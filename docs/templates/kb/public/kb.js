// Draws the Learn-style page chrome from DocFX output: global and section navigation (toc.json),
// the table of contents tree, breadcrumbs, "In this article", search (index.json) and the theme menu.
// Also converts DocFX's Markdown output to Learn markup (alerts, tables, heading anchors), draws quizzes (quiz.js) and
// underlines (red, wavy) the verb of each definition and of its translation in term tables (marks.js, data in media/<page>.grammar.json).

import { quiz } from './quiz.js'
import { markVerbs } from './marks.js'

const meta = (name) => document.querySelector(`meta[name="${name}"]`)?.content
let page = new URL(location.href)
page.hash = ''
let rel = new URL(meta('kb:rel') || './', page)
const tocJson = (relPath) => relPath ? new URL(relPath.replace(/\.html$/, '.json'), page) : null
const same = (a, b) => a && b && a.pathname.replace(/index\.html$/, '') === b.pathname.replace(/index\.html$/, '')
const el = (tag, attrs = {}, ...kids) => {
  const e = document.createElement(tag)
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue
    if (k === 'class') e.className = v
    else if (k === 'text') e.textContent = v
    else e.setAttribute(k, v)
  }
  e.append(...kids.filter(Boolean))
  return e
}
const svg = (d, size = 14) => {
  const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  s.setAttribute('viewBox', '0 0 16 16'); s.setAttribute('width', size); s.setAttribute('height', size); s.setAttribute('aria-hidden', 'true')
  const p = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  p.setAttribute('fill', 'currentColor'); p.setAttribute('d', d)
  s.append(p)
  return s
}
const ICON = {
  info: 'M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm-.5 5h1v4h-1zm.5-2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z',
  tip: 'M8 1a4.5 4.5 0 0 1 2.5 8.24V11a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V9.24A4.5 4.5 0 0 1 8 1zm0 1a3.5 3.5 0 0 0-1.8 6.5l.3.15V10.5h3V8.65l.3-.15A3.5 3.5 0 0 0 8 2zM6 12.5h4v1H6zm1 2h2v1H7z',
  warning: 'M8 1.5l7 12.5H1zm0 2.05L2.7 13h10.6zM7.5 6h1v4h-1zm.5 5.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z',
  link: 'M6.35 9.65l3.3-3.3.7.7-3.3 3.3zM4.5 13A2.5 2.5 0 0 1 2.73 8.73l2-2 .71.71-2 2a1.5 1.5 0 0 0 2.12 2.12l2-2 .71.71-2 2A2.49 2.49 0 0 1 4.5 13zm6.77-3.73l-.71-.71 2-2a1.5 1.5 0 0 0-2.12-2.12l-2 2-.71-.71 2-2a2.5 2.5 0 0 1 3.54 3.54z',
}

async function load(url) {
  try { const r = await fetch(url); return r.ok ? r.json() : null } catch { return null }
}

// Resolve every href in a toc.json against the toc file itself.
function resolve(items, base, parents = []) {
  for (const it of items || []) {
    // A node with both a page and children only expands in the tree, so its page becomes an "Overview" child (as on Learn).
    if (it.href && it.items?.length && it.items[0].href !== it.href) it.items.unshift({ name: 'Overview', href: it.href })
    it.url = it.href && !it.items?.length ? new URL(it.href, base) : null
    it.tocUrl = it.tocHref ? new URL(it.tocHref.replace(/\.html$/, '.json'), base) : null
    it.parents = parents
    resolve(it.items, base, [...parents, it])
  }
  return items || []
}
const flat = (items) => (items || []).flatMap((it) => [it, ...flat(it.items)])
const firstUrl = (it) => it.url || (it.items || []).map(firstUrl).find(Boolean) || null

// ---------- content: Learn markup ----------
function content() {
  const body = document.querySelector('.content')
  if (!body) return
  const kinds = { NOTE: ['is-info', 'info'], TIP: ['is-success', 'tip'], IMPORTANT: ['is-primary', 'info'], CAUTION: ['is-danger', 'warning'], WARNING: ['is-warning', 'warning'] }
  for (const box of body.querySelectorAll('div.NOTE, div.TIP, div.IMPORTANT, div.CAUTION, div.WARNING')) {
    const kind = Object.keys(kinds).find((k) => box.classList.contains(k)) || 'NOTE'
    const h = box.querySelector(':scope > h5')
    const title = el('p', { class: 'alert-title' }, el('span', { class: 'icon', 'aria-hidden': 'true' }, svg(ICON[kinds[kind][1]], 16)), ' ', h ? h.textContent.trim() : kind[0] + kind.slice(1).toLowerCase())
    h?.remove()
    box.className = `alert ${kinds[kind][0]}`
    box.prepend(title)
  }
  for (const t of body.querySelectorAll('table')) {
    t.classList.add('table', 'table-sm')
    // key-value tables written as | | | have an empty header row: drop it
    const head = t.querySelector('thead')
    if (head && ![...head.querySelectorAll('th')].some((th) => th.textContent.trim())) head.remove()
    // term tables (Term | Definition | 中文解释 | Source): fixed column widths so long URLs cannot squeeze the Chinese column
    const first = t.querySelector('th')?.textContent.trim()
    if (first === 'Term' && /Source/.test(t.querySelector('th:last-child')?.textContent || '') && t.rows[0]?.cells.length === 4) t.classList.add('kb-terms')
    // coverage tables (Week | Group | Terms in the course | Source): narrow week, wide terms
    if (first === 'Week' && t.rows[0]?.cells.length === 4) t.classList.add('kb-coverage')
    const wrap = el('div', { class: 'table-wrapper' })
    t.replaceWith(wrap)
    wrap.append(t)
  }
  for (const h of body.querySelectorAll('h2[id], h3[id]')) {
    const wrap = el('div', { class: 'heading-wrapper', 'data-heading-level': h.tagName.toLowerCase() })
    const a = el('a', { class: 'anchor-link', href: `#${h.id}`, 'aria-label': `Section titled: ${h.textContent.trim()}` }, svg(ICON.link, 16))
    h.classList.add('heading-anchor')
    h.replaceWith(wrap)
    wrap.append(a, h)
  }
  for (const a of body.querySelectorAll('a[href^="http"]')) {
    if (new URL(a.href).origin !== location.origin) a.setAttribute('data-linktype', 'external')
  }
  // Figures are exported at 2x: show them at half their pixels; max-width caps them at the article, the width of its tables.
  // A figure too large for 2x is exported at 1x and named *@1x.png (MSC2020). Screenshots (.webp, the project pages) fill the
  // article width instead (kb.css).
  for (const img of body.querySelectorAll('img[src*="media/"]:not([src$=".webp"])')) {
    const fix = () => { if (img.naturalWidth) img.style.width = `${Math.round(img.naturalWidth / (decodeURIComponent(img.src).endsWith('@1x.png') ? 1 : 2))}px` }
    img.complete ? fix() : img.addEventListener('load', fix, { once: true })
  }
  quiz()
  grammar(body)
}

// Term tables: media/<page>.grammar.json maps each term to { verbs: the verb phrases of its definition (column 2),
// zhVerbs: the same verbs in the translation (column 3) }
async function grammar(body) {
  const tables = body.querySelectorAll('table.kb-terms')
  if (!tables.length) return
  const slug = page.pathname.split('/').pop().replace(/\.html$/, '')
  const data = await load(new URL(`media/${slug}.grammar.json`, page))
  if (!data) return
  for (const tr of [...tables].flatMap((t) => [...t.tBodies[0].rows])) {
    const g = data[tr.cells[0]?.querySelector('strong')?.textContent.trim()]
    if (!g || tr.cells.length < 3) continue
    markVerbs(tr.cells[1], g.verbs)
    markVerbs(tr.cells[2], g.zhVerbs)
  }
}

// ---------- header navigation ----------
function nav(rootItems, sectionItems, section) {
  const ul = document.getElementById('kb-nav')
  for (const it of rootItems) {
    const kids = group(it)
    if (kids) {
      ul.append(dropdown(it, kids, section))
      for (const k of kids) document.getElementById('kb-mobile-nav').append(el('li', {}, el('a', { class: `tree-item tree-leaf${k === section ? ' is-selected' : ''}`, href: firstUrl(k).href, text: k.name })))
      continue
    }
    const url = firstUrl(it)
    if (!url) continue
    const active = it === section
    ul.append(el('li', {}, el('a', { class: `site-header-button${active ? ' is-active' : ''}`, href: url.href, 'aria-current': active ? 'true' : null, text: it.name })))
    document.getElementById('kb-mobile-nav').append(el('li', {}, el('a', { class: `tree-item tree-leaf${active ? ' is-selected' : ''}`, href: url.href, text: it.name })))
  }
  const brand = document.getElementById('kb-section-brand')
  const secUl = document.getElementById('kb-section-nav')
  if (section) {
    brand.href = (firstUrl(section) || rel).href
    brand.querySelector('span').textContent = section.name
    for (const it of sectionItems) {
      const url = firstUrl(it)
      if (url) secUl.append(el('li', {}, el('a', { class: 'site-header-button', href: url.href, text: it.name })))
    }
  } else {
    document.getElementById('kb-secondary-nav').remove()
  }
  more(ul)
  if (section) more(secUl)
}

// A top-bar entry with no page of its own whose items are sections (Science: Computer Science, Mathematical Sciences)
// is a group: a button that opens its sections; the button and the current section in the menu are marked when it holds the current section.
// Its items may also be subgroups (Natural Sciences, Social Sciences) that hold sections: as on Learn, each is a menu row
// with a chevron that opens its sections in a submenu beside it, and it is marked when it holds the current section.
const group = (it) => {
  const kids = it.href ? [] : flat(it.items).filter((k) => k.tocUrl && firstUrl(k))
  return kids.length ? kids : null
}
function dropdown(it, kids, section) {
  const link = (k) => el('li', {}, el('a', { class: `site-header-button${k === section ? ' is-active' : ''}`, href: firstUrl(k).href, 'aria-current': k === section ? 'true' : null, text: k.name }))
  const subs = []
  const sub = (k) => {
    const list = el('ul', { class: 'kb-more-menu kb-submenu', hidden: '' }, ...(k.items || []).filter((s) => kids.includes(s)).map(link))
    const holds = (k.items || []).includes(section)
    const b = el('button', { class: `site-header-button kb-sub-button${holds ? ' is-active' : ''}`, type: 'button', 'aria-expanded': 'false' },
      el('span', { text: k.name }), el('span', { class: 'icon' }, svg('M5.65 12.65l-.7-.7L8.88 8 4.95 4.05l.7-.7L10.3 8z', 12)))
    const open = (show) => { subs.forEach((s) => { s.list.hidden = true; s.b.setAttribute('aria-expanded', 'false') }); list.hidden = !show; b.setAttribute('aria-expanded', String(show)) }
    b.addEventListener('click', (e) => { e.stopPropagation(); open(list.hidden) })
    b.addEventListener('mouseenter', () => open(true))
    subs.push({ list, b })
    return el('li', { class: 'kb-sub' }, b, list)
  }
  const rows = (it.items || []).map((k) => (k.tocUrl ? link(k) : sub(k)))
  const menu = el('ul', { class: 'kb-more-menu kb-group-menu', hidden: '' }, ...rows)
  const btn = el('button', { class: `site-header-button kb-more-button${kids.includes(section) ? ' is-active' : ''}`, type: 'button', 'aria-expanded': 'false' },
    el('span', { text: it.name }), el('span', { class: 'icon' }, svg('M3.35 5.65l.7-.7L8 8.88l3.95-3.93.7.7L8 10.3z', 12)))
  const close = () => { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); subs.forEach((s) => { s.list.hidden = true; s.b.setAttribute('aria-expanded', 'false') }) }
  btn.addEventListener('click', (e) => { e.stopPropagation(); const show = menu.hidden; close(); menu.hidden = !show; btn.setAttribute('aria-expanded', String(show)) })
  document.addEventListener('click', close)
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close() })
  return el('li', { class: 'position-relative' }, btn, menu)
}

// Header bars: the items that do not fit on one line go, in order, into a "More" menu at the end (like Learn's header).
// The menu is marked when it holds the current section; it is laid out again when the window is resized.
function more(ul) {
  const items = [...ul.children]
  const menu = el('ul', { class: 'kb-more-menu', hidden: '' })
  const btn = el('button', { class: 'site-header-button kb-more-button', type: 'button', 'aria-expanded': 'false' },
    el('span', { text: 'More' }), el('span', { class: 'icon' }, svg('M3.35 5.65l.7-.7L8 8.88l3.95-3.93.7.7L8 10.3z', 12)))
  const li = el('li', { class: 'kb-more position-relative' }, btn, menu)
  const close = () => { menu.hidden = true; btn.setAttribute('aria-expanded', 'false') }
  btn.addEventListener('click', (e) => { e.stopPropagation(); menu.hidden = !menu.hidden; btn.setAttribute('aria-expanded', String(!menu.hidden)) })
  document.addEventListener('click', close)
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close() })
  const nav = ul.closest('nav')
  // the bar may reach the next element in the header (the search box) or the end of the header row
  const limit = () => {
    const next = nav.nextElementSibling
    if (next) return next.getBoundingClientRect().left - 16
    const row = nav.parentElement
    return row.getBoundingClientRect().right - parseFloat(getComputedStyle(row).paddingRight)
  }
  const layout = () => {
    close()
    ul.replaceChildren(...items)
    if (!ul.offsetParent || !items.length || items.at(-1).getBoundingClientRect().right <= limit()) return
    ul.append(li)
    let n = items.length
    while (n > 0 && li.getBoundingClientRect().right > limit()) items[--n].remove()
    const moved = items.slice(n)
    menu.replaceChildren(...moved) // in the original order
    btn.classList.toggle('is-active', moved.some((it) => it.querySelector('.is-active')))
  }
  let frame = 0
  addEventListener('resize', () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(layout) })
  document.fonts?.ready.then(layout)
  layout()
}

// ---------- left table of contents (Atlas tree) ----------
function tree(items, current) {
  const ul = document.getElementById('kb-toc')
  const path = new Set(current ? current.parents : [])
  const build = (list, level) => list.map((it, i) => {
    const pos = { 'aria-setsize': list.length, 'aria-level': level, 'aria-posinset': i + 1 }
    if (!it.items?.length) {
      const a = el('a', { ...pos, role: 'treeitem', class: `tree-item tree-leaf${it === current ? ' is-selected' : ''}`, href: it.url ? it.url.href : '#', 'aria-current': it === current ? 'page' : null, text: it.name })
      return el('li', { role: 'none' }, a)
    }
    const li = el('li', { ...pos, class: 'tree-item', role: 'treeitem', 'aria-expanded': path.has(it) ? 'true' : 'false' })
    const exp = el('span', { class: 'tree-expander', text: it.name })
    exp.addEventListener('click', () => li.setAttribute('aria-expanded', li.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'))
    li.append(exp, el('ul', { class: 'tree-group', role: 'group' }, ...build(it.items, level + 1)))
    return li
  })
  ul.append(...build(items, 1))
  ul.querySelector('.is-selected')?.scrollIntoView({ block: 'nearest' })

  const filter = document.getElementById('kb-toc-filter')
  filter.addEventListener('input', () => {
    const q = filter.value.trim().toLowerCase()
    const walk = (li) => {
      const leaf = li.querySelector(':scope > a.tree-leaf')
      if (leaf) { const show = !q || leaf.textContent.toLowerCase().includes(q); li.hidden = !show; return show }
      const kids = [...li.querySelectorAll(':scope > ul > li')].map(walk)
      const self = !!q && li.querySelector(':scope > .tree-expander').textContent.toLowerCase().includes(q)
      const show = !q || self || kids.some(Boolean)
      li.hidden = !show
      if (q && show) li.setAttribute('aria-expanded', 'true')
      return show
    }
    for (const li of ul.querySelectorAll(':scope > li')) walk(li)
  })
}

// ---------- breadcrumbs ----------
function breadcrumbs(section, current) {
  const ol = document.getElementById('kb-breadcrumbs')
  const crumbs = [{ name: document.querySelector('.site-header-brand span')?.textContent || 'Home', url: new URL('index.html', rel) }]
  if (section) crumbs.push({ name: section.name, url: firstUrl(section) })
  for (const p of current ? current.parents : []) crumbs.push({ name: p.name, url: firstUrl(p) })
  const seen = new Set()
  for (const c of crumbs) {
    const key = c.name // every level shows, even when a group opens the same page as its parent
    if (seen.has(key)) continue
    seen.add(key)
    ol.append(el('li', { class: 'breadcrumbs-item' }, c.url ? el('a', { href: c.url.href, text: c.name }) : el('span', { text: c.name })))
  }
}

// ---------- In this article ----------
let outlineMark = null
function outline() {
  // runs again after an in-place page change: clear the side rail and its scroll listener first
  if (outlineMark) removeEventListener('scroll', outlineMark)
  outlineMark = null
  document.getElementById('kb-outline').replaceChildren()
  document.getElementById('side-doc-outline').hidden = true
  // H2 and H3, unlike Learn (H2 only): this site's long review pages need the sub-topics in the rail
  const heads = [...document.querySelectorAll('.content h2[id], .content h3[id]')]
  if (!heads.length) return
  const lists = [['side-doc-outline', 'kb-outline'], ['center-doc-outline', 'kb-center-outline']]
  const rows = []
  for (const [navId, listId] of lists) {
    const ol = document.getElementById(listId)
    for (const h of heads) {
      const a = el('a', { class: 'color-text-subtle', href: `#${h.id}`, text: h.textContent.trim() })
      const li = el('li', { class: `border-left-md padding-left-xxs border-color-transparent${h.tagName === 'H3' ? ' kb-outline-h3' : ''}` }, a)
      ol.append(li)
      if (listId === 'kb-outline') rows.push([h, li, a])
    }
    document.getElementById(navId).hidden = false
  }
  // Phones and tablets: the outline sits under the title, first four entries, then "Show N more"
  const center = document.getElementById('center-doc-outline')
  // after the H1, or after the whole home-page profile card that holds it
  ;(document.querySelector('.content .kb-profile') || document.querySelector('.content h1'))?.after(center)
  const extra = [...center.querySelectorAll('li')].slice(4)
  if (extra.length) {
    extra.forEach((li) => li.classList.add('is-extra'))
    const more = el('button', { class: 'doc-outline-more', type: 'button', text: `Show ${extra.length} more` })
    more.addEventListener('click', () => {
      const open = center.classList.toggle('is-expanded')
      more.textContent = open ? 'Show less' : `Show ${extra.length} more`
    })
    center.append(more)
  }
  const mark = () => {
    // the last heading above 120px; at the bottom of the page, where the last headings can no longer scroll that
    // high (a click on Glossary or References after a tall figure), the heading just clicked (the #hash) if it is
    // on screen, else the last heading on screen
    const bottom = scrollY + innerHeight >= document.documentElement.scrollHeight - 2
    const line = bottom ? innerHeight : 120
    let active = rows[0]
    for (const r of rows) if (r[0].getBoundingClientRect().top < line) active = r
    const picked = bottom && rows.find((r) => `#${r[0].id}` === decodeURIComponent(location.hash))
    if (picked && picked[0].getBoundingClientRect().top >= 0 && picked[0].getBoundingClientRect().top < innerHeight) active = picked
    for (const r of rows) {
      const on = r === active
      r[1].classList.toggle('border-color-primary', on)
      r[1].classList.toggle('border-color-transparent', !on)
      r[2].className = on ? 'font-weight-semibold color-text' : 'color-text-subtle'
    }
  }
  outlineMark = mark
  addEventListener('scroll', mark, { passive: true })
  mark()
}

// ---------- search (DocFX index.json) ----------
function search() {
  const input = document.getElementById('kb-search-input')
  const list = document.getElementById('kb-search-results')
  let index = null
  const run = async () => {
    const q = input.value.trim().toLowerCase()
    if (!q) { list.hidden = true; return }
    index ||= Object.values(await load(new URL('index.json', rel)) || {})
    const words = q.split(/\s+/)
    const hits = index
      .map((d) => {
        const t = (d.title || '').toLowerCase(), s = (d.summary || '').toLowerCase()
        const score = words.reduce((n, w) => n + (t.includes(w) ? 3 : 0) + (s.includes(w) ? 1 : 0), 0)
        return words.every((w) => t.includes(w) || s.includes(w)) ? [score, d] : null
      })
      .filter(Boolean).sort((a, b) => b[0] - a[0]).slice(0, 8)
    list.replaceChildren(...(hits.length ? hits.map(([, d]) => el('li', { role: 'option' },
      el('a', { href: new URL(d.href, rel).href },
        el('span', { class: 'kb-search-title', text: (d.title || '').replace(/ \| .*$/, '') }),
        el('span', { class: 'kb-search-summary', text: (d.summary || '').slice(0, 140) })))) : [el('li', { class: 'kb-search-empty', text: 'No results' })]))
    list.hidden = false
  }
  input.addEventListener('input', run)
  const form = document.getElementById('kb-search')
  document.getElementById('kb-search-toggle').addEventListener('click', () => { form.classList.add('is-open'); input.focus() })
  input.addEventListener('blur', () => setTimeout(() => { if (!input.value) form.classList.remove('is-open') }, 200))
  input.addEventListener('blur', () => setTimeout(() => { list.hidden = true }, 200))
  document.getElementById('kb-search').addEventListener('submit', (e) => {
    e.preventDefault()
    const a = list.querySelector('a')
    if (a) location.href = a.href
  })
}

// ---------- theme and mobile menu ----------
function theme() {
  // Light, Dark, Auto: one menu in the header, one in the footer; the current choice is marked
  let choice = 'auto'
  try { choice = localStorage.getItem('kb-theme') || 'auto' } catch {}
  const apply = (t) => {
    choice = t
    const real = t === 'auto' ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : t
    document.documentElement.classList.remove('theme-light', 'theme-dark')
    document.documentElement.classList.add(`theme-${real}`)
    for (const b of document.querySelectorAll('.kb-theme-menu [data-theme]')) b.setAttribute('aria-pressed', String(b.dataset.theme === t))
  }
  apply(choice)
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (choice === 'auto') apply('auto') })
  for (const box of document.querySelectorAll('.kb-theme')) {
    const btn = box.querySelector('.kb-theme-button')
    const menu = box.querySelector('.kb-theme-menu')
    btn.addEventListener('click', (e) => { e.stopPropagation(); menu.hidden = !menu.hidden; btn.setAttribute('aria-expanded', String(!menu.hidden)) })
    menu.addEventListener('click', (e) => {
      const t = e.target.closest('[data-theme]')?.dataset.theme
      if (!t) return
      try { localStorage.setItem('kb-theme', t) } catch {}
      apply(t)
      menu.hidden = true
      btn.setAttribute('aria-expanded', 'false')
    })
  }
  document.addEventListener('click', () => {
    for (const m of document.querySelectorAll('.kb-theme-menu')) m.hidden = true
    for (const b of document.querySelectorAll('.kb-theme-button')) b.setAttribute('aria-expanded', 'false')
  })
  const col = document.getElementById('kb-toc-collapse')
  const setCollapsed = (on) => {
    document.documentElement.classList.toggle('layout-menu-collapsed', on)
    col.setAttribute('aria-expanded', String(!on))
    col.setAttribute('aria-label', on ? 'Expand' : 'Collapse')
  }
  try { setCollapsed(localStorage.getItem('kb-toc-collapsed') === '1') } catch {}
  col.addEventListener('click', () => {
    const on = !document.documentElement.classList.contains('layout-menu-collapsed')
    setCollapsed(on)
    try { localStorage.setItem('kb-toc-collapsed', on ? '1' : '0') } catch {}
  })
  const mb = document.getElementById('kb-menu-button')
  mb.addEventListener('click', () => {
    const open = document.documentElement.classList.toggle('kb-menu-open')
    mb.setAttribute('aria-expanded', String(open))
  })
}

// Links in the article to other sites open in a new tab; links to pages of this site (and navigation: header, TOC,
// breadcrumbs, footer) stay in this tab
function newTabs() {
  const mark = (a) => {
    const url = new URL(a.href, location.href)
    if (!a.closest('.content') || a.closest('.doc-outline') || url.origin === location.origin || !/^https?:$/.test(url.protocol)) return
    a.target = '_blank'
    a.rel = 'noopener'
  }
  document.addEventListener('click', (e) => { const a = e.target.closest('a[href]'); if (a) mark(a) }, true)
  document.addEventListener('auxclick', (e) => { const a = e.target.closest('a[href]'); if (a) mark(a) }, true)
}

// The menu's right edge can be dragged to set its width (200 to 600 px); the width is remembered, double-click resets it
function resizeMenu() {
  const KEY = 'kb-toc-width', MIN = 200, MAX = 600, DEFAULT = 275
  const root = document.documentElement
  const set = (w) => root.style.setProperty('--layout-menu-expanded-target-width', `${w}px`, 'important')
  try { const w = Number(localStorage.getItem(KEY)); if (w >= MIN && w <= MAX) set(w) } catch {}
  const left = document.getElementById('left-container')
  if (!left) return
  const handle = document.createElement('div')
  handle.className = 'kb-resize'
  handle.setAttribute('role', 'separator')
  handle.setAttribute('aria-orientation', 'vertical')
  handle.setAttribute('aria-label', 'Resize menu')
  handle.title = 'Drag to resize, double-click to reset'
  left.append(handle)
  let width = null
  const move = (e) => {
    width = Math.round(Math.min(MAX, Math.max(MIN, e.clientX - left.getBoundingClientRect().left)))
    set(width)
  }
  const stop = () => {
    root.classList.remove('kb-resizing')
    document.removeEventListener('pointermove', move)
    if (width) try { localStorage.setItem(KEY, String(width)) } catch {}
  }
  handle.addEventListener('pointerdown', (e) => {
    e.preventDefault()
    root.classList.add('kb-resizing')
    document.addEventListener('pointermove', move)
    document.addEventListener('pointerup', stop, { once: true })
  })
  handle.addEventListener('dblclick', () => {
    set(DEFAULT)
    try { localStorage.removeItem(KEY) } catch {}
  })
}

// ---------- in-place navigation ----------
// Menu and breadcrumb links within the same section fetch the next page and swap only <main> (breadcrumbs, article,
// date), so the menu keeps its scroll position and width and the page does not flash. Anything else (another section,
// a redirect stub, a failed fetch, modifier keys) is an ordinary page load.
const NAV = {}
function selectLeaf() {
  const toc = document.getElementById('kb-toc')
  for (const a of toc.querySelectorAll('a.tree-leaf.is-selected')) { a.classList.remove('is-selected'); a.removeAttribute('aria-current') }
  const leaf = [...toc.querySelectorAll('a.tree-leaf')].find((a) => same(new URL(a.href), page))
  if (!leaf) return
  leaf.classList.add('is-selected')
  leaf.setAttribute('aria-current', 'page')
  for (let li = leaf.parentElement.closest('li.tree-item'); li; li = li.parentElement.closest('li.tree-item')) li.setAttribute('aria-expanded', 'true')
  leaf.scrollIntoView({ block: 'nearest' })
}
async function go(href, push) {
  const url = new URL(href)
  try {
    const r = await fetch(url)
    if (!r.ok) throw new Error(r.status)
    const doc = new DOMParser().parseFromString(await r.text(), 'text/html')
    const m = (name) => doc.querySelector(`meta[name="${name}"]`)?.content
    const toc = m('kb:tocrel') ? new URL(m('kb:tocrel').replace(/\.html$/, '.json'), url).href : null
    const main = doc.getElementById('main')
    if (!main || doc.querySelector('meta[http-equiv="refresh"]') || toc !== NAV.tocUrl?.href) throw new Error('not in place')
    if (push) {
      history.replaceState({ y: scrollY }, '')
      history.pushState({ y: 0 }, '', url.href)
    }
    document.title = doc.title
    for (const name of ['description', 'kb:rel', 'kb:navrel', 'kb:tocrel']) {
      const mine = document.querySelector(`meta[name="${name}"]`)
      if (mine && m(name) !== undefined) mine.content = m(name)
    }
    page = new URL(url)
    page.hash = ''
    rel = new URL(m('kb:rel') || './', page)
    document.getElementById('main').replaceWith(document.adoptNode(main))
    document.documentElement.classList.remove('kb-menu-open')
    content()
    outline()
    const current = flat(NAV.tocItems).find((it) => same(it.url, page)) || null
    breadcrumbs(NAV.section && NAV.sectionItems.length ? NAV.section : null, NAV.sectionItems.length ? current : null)
    selectLeaf()
    const target = url.hash && document.getElementById(decodeURIComponent(url.hash.slice(1)))
    if (target) target.scrollIntoView()
    else if (push) scrollTo(0, 0)
    return true
  } catch {
    location.href = url.href
    return false
  }
}
function inPlace() {
  history.scrollRestoration = 'manual'
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return
    const a = e.target.closest('#kb-toc a[href], #kb-breadcrumbs a[href]')
    if (!a || a.target === '_blank') return
    const url = new URL(a.href)
    if (url.origin !== location.origin) return
    if (same(url, page) && url.hash) return // a jump within this page
    e.preventDefault()
    if (same(url, page)) return
    go(url.href, true)
  })
  addEventListener('popstate', async (e) => {
    const url = new URL(location.href)
    if (same(url, page)) return // only the #hash changed
    if (await go(url.href, false) && !url.hash) scrollTo(0, e.state?.y || 0)
  })
}

// Figures: the article column caps an image at its width, so browser zoom does not enlarge it. Clicking one opens it
// on its own, at a fixed size (half its pixels: figures are exported at 2x), where zoom does enlarge it and the overlay
// scrolls; clicking the image switches to fit-to-window and back, Esc or the backdrop closes it (like Learn's lightbox).
function lightbox() {
  let open = null
  const close = () => { open?.remove(); open = null; document.documentElement.classList.remove('kb-lightbox-open') }
  document.addEventListener('click', (e) => {
    const img = e.target.closest('.content img')
    if (!img || img.closest('a')) return
    const big = el('img', { src: img.currentSrc || img.src, alt: img.alt, class: 'kb-lightbox-img' })
    big.style.width = `${Math.round(img.naturalWidth / (/(\.webp|@1x\.png)$/.test(decodeURIComponent(img.src)) ? 1 : 2))}px` // screenshots and @1x figures are 1x
    big.addEventListener('click', (ev) => { ev.stopPropagation(); open.classList.toggle('is-fit') })
    const shut = el('button', { class: 'kb-lightbox-close', type: 'button', 'aria-label': 'Close', text: '×' })
    open = el('div', { class: 'kb-lightbox', role: 'dialog', 'aria-modal': 'true', 'aria-label': img.alt || 'Figure' }, shut, big)
    open.addEventListener('click', close)
    document.body.append(open)
    document.documentElement.classList.add('kb-lightbox-open')
    shut.focus()
  })
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) close() })
}

// The wheel scrolls what is under the pointer: over the menu or the outline only that rail moves, over the article the page
function wheelScope() {
  const rails = ['affixed-left-container', 'affixed-right-container'].map((id) => document.getElementById(id)).filter(Boolean)
  // a rail ends at the bottom of the window: below the header at the top of the page, full height once the header scrolls away
  const fit = () => { for (const r of rails) r.style.maxHeight = `${innerHeight - Math.max(0, r.getBoundingClientRect().top)}px` }
  addEventListener('scroll', fit, { passive: true })
  addEventListener('resize', fit)
  fit()
  // on phones the menu is hidden until the menu button opens it, so it is measured again then
  document.getElementById('kb-menu-button')?.addEventListener('click', () => requestAnimationFrame(fit))
  // the whole side column listens, including the empty space under a short rail
  for (const [col, rail] of [['layout-body-menu', rails[0]], ['layout-body-aside', rails[1]]]) {
    const el = document.getElementById(col)
    if (!el || !rail) continue
    el.addEventListener('wheel', (e) => {
      if (e.ctrlKey) return // ctrl + wheel zooms the page
      e.preventDefault() // the pointer is on a side column: only its rail moves, the article stays put (even when the rail fits)
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? rail.clientHeight : 1
      rail.scrollTop += e.deltaY * unit
    }, { passive: false })
  }
}

async function main() {
  resizeMenu()
  newTabs()
  content()
  theme()
  search()
  outline()
  const navUrl = tocJson(meta('kb:navrel'))
  const tocUrl = tocJson(meta('kb:tocrel'))
  const root = navUrl ? resolve((await load(navUrl))?.items, navUrl) : []
  const sameToc = navUrl && tocUrl && navUrl.href === tocUrl.href
  const sectionItems = tocUrl && !sameToc ? resolve((await load(tocUrl))?.items, tocUrl) : []
  // sections may sit inside a top-bar group (Science), so search the whole top-bar tree
  const section = flat(root).find((it) => it.tocUrl && tocUrl && it.tocUrl.href === tocUrl.href) || root.find((it) => same(it.url, page)) || null
  const tocItems = sectionItems.length ? sectionItems : root
  const current = flat(tocItems).find((it) => same(it.url, page)) || null
  nav(root, sectionItems, section)
  if (!sectionItems.length) document.getElementById('kb-mobile-nav').remove() // the tree already lists the sections
  tree(tocItems, current)
  breadcrumbs(section && sectionItems.length ? section : null, sectionItems.length ? current : null)
  Object.assign(NAV, { tocUrl, tocItems, section, sectionItems })
  inPlace()
  wheelScope()
  lightbox()
}

// Local preview only: watch.py rewrites kb-build.txt after each rebuild; reload the page when it changes.
function liveReload() {
  if (location.hostname !== 'localhost') return
  let seen = null
  const check = async () => {
    const r = await fetch(`${rel}kb-build.txt`, { cache: 'no-store' }).catch(() => null)
    if (!r?.ok) return // not served by watch.py
    const stamp = await r.text()
    if (seen !== null && stamp !== seen) location.reload()
    seen = stamp
    setTimeout(check, 1000)
  }
  check()
}

main()
liveReload()
