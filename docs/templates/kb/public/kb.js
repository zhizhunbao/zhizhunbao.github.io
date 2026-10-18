// Draws the Learn-style page chrome from DocFX output: global and section navigation (toc.json),
// the table of contents tree, breadcrumbs, "In this article", search (index.json) and the theme menu.
// Also converts DocFX's Markdown output to Learn markup (alerts, tables, heading anchors).

const meta = (name) => document.querySelector(`meta[name="${name}"]`)?.content
const page = new URL(location.href)
page.hash = ''
const rel = new URL(meta('kb:rel') || './', page)
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
    it.url = it.href ? new URL(it.href, base) : null
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
}

// ---------- header navigation ----------
function nav(rootItems, sectionItems, section) {
  const ul = document.getElementById('kb-nav')
  for (const it of rootItems) {
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
    const key = c.url?.pathname
    if (seen.has(key) && c.url) continue
    seen.add(key)
    ol.append(el('li', { class: 'breadcrumbs-item' }, c.url ? el('a', { href: c.url.href, text: c.name }) : el('span', { text: c.name })))
  }
}

// ---------- In this article ----------
function outline() {
  const heads = [...document.querySelectorAll('.content h2[id]')]
  if (!heads.length) return
  const lists = [['side-doc-outline', 'kb-outline'], ['center-doc-outline', 'kb-center-outline']]
  const rows = []
  for (const [navId, listId] of lists) {
    const ol = document.getElementById(listId)
    for (const h of heads) {
      const a = el('a', { class: 'color-text-subtle', href: `#${h.id}`, text: h.textContent.trim() })
      const li = el('li', { class: 'border-left-md padding-left-xxs border-color-transparent' }, a)
      ol.append(li)
      if (listId === 'kb-outline') rows.push([h, li, a])
    }
    document.getElementById(navId).hidden = false
  }
  // Phones and tablets: the outline sits under the title, first four entries, then "Show N more"
  const center = document.getElementById('center-doc-outline')
  document.querySelector('.content h1')?.after(center)
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
    let active = rows[0]
    for (const r of rows) if (r[0].getBoundingClientRect().top < 120) active = r
    for (const r of rows) {
      const on = r === active
      r[1].classList.toggle('border-color-primary', on)
      r[1].classList.toggle('border-color-transparent', !on)
      r[2].className = on ? 'font-weight-semibold color-text' : 'color-text-subtle'
    }
  }
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

async function main() {
  content()
  theme()
  search()
  outline()
  const navUrl = tocJson(meta('kb:navrel'))
  const tocUrl = tocJson(meta('kb:tocrel'))
  const root = navUrl ? resolve((await load(navUrl))?.items, navUrl) : []
  const sameToc = navUrl && tocUrl && navUrl.href === tocUrl.href
  const sectionItems = tocUrl && !sameToc ? resolve((await load(tocUrl))?.items, tocUrl) : []
  const section = root.find((it) => it.tocUrl && tocUrl && it.tocUrl.href === tocUrl.href) || root.find((it) => same(it.url, page)) || null
  const tocItems = sectionItems.length ? sectionItems : root
  const current = flat(tocItems).find((it) => same(it.url, page)) || null
  nav(root, sectionItems, section)
  if (!sectionItems.length) document.getElementById('kb-mobile-nav').remove() // the tree already lists the sections
  tree(tocItems, current)
  breadcrumbs(section && sectionItems.length ? section : null, sectionItems.length ? current : null)
}

main()
