// Read aloud (since 2026-11-27): every English quote (a blockquote, such as the professor's original text on the course
// pages) gets a button above it, and a page with two or more gets a "Play all" button under its title that reads every
// quote in order. The quote being read is outlined and scrolled into view, and the line being read is highlighted.
// A second click stops; starting another reading stops the first.
// Recorded voice first: media/<page>.audio.json ({ voice, sections: { "1.1": ["cst8913/audio/.../01.mp3", ...] } }) gives,
// for each numbered section, one MP3 per line of its quote, spoken by a Microsoft neural voice; a quote plays the files
// of the numbered heading before it, line by line. Without files the browser's own speech synthesis (Web Speech API)
// reads it line by line, with the most natural English voice the browser has (Edge's "Natural" voices, then Google's,
// before the robotic Windows desktop voices).
// Section titles: a reading starts with the numbered heading above its quote or table, highlighted while read;
// audio.json's "headings" maps a section number to its recording.
// English and Chinese ("中英对照"): audio.json's "zh" maps a section number to one MP3 per line of the Chinese translation
// that follows the quote; the button reads the whole English quote, then the whole Chinese translation, line by line.
// Importance order: audio.json's "priority" lists section numbers, most important first; a "Play by importance" button
// under "Play all" reads those sections in that order (the order is this site's own judgment, not the source's).
// Step tables (same page): a table whose header starts "Step | Action" gets a button above it that reads its rows in
// order (the Action and the result cells), highlighting the row being read, and the page a "Play all steps" button;
// audio.json's "tables" lists, per step table in page order, one MP3 per row.

const LABEL = '🔊 Read aloud'
const ALL = '▶︎ Play all English'
const ALL_STEPS = '▶︎ Play all steps'
const BY_PRIORITY = '★ Play by importance'
const BOTH = '▶︎ 中英对照'
const ICON = {
  pause: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"/></svg>',
  play: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>',
  stop: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1" fill="currentColor"/></svg>',
}
const STOP = '■ Stop'
let current = null // { button, label, quotes, index, line }
const player = new Audio()

// A bar fixed at the bottom of the window while a reading runs, so it can be paused or stopped wherever the page has
// scrolled to (the buttons that started it may be off screen).
let bar = null
let paused = false
function showBar() {
  if (!bar) {
    bar = document.createElement('div')
    bar.className = 'kb-speak-bar'
    bar.setAttribute('role', 'group')
    bar.setAttribute('aria-label', 'Reading controls')
    const pause = makeButton('❚❚', 'kb-speak-pause', togglePause)
    pause.setAttribute('aria-label', 'Pause')
    const halt = makeButton('', 'kb-speak-stop', () => stop())
    halt.innerHTML = ICON.stop
    halt.setAttribute('aria-label', 'Stop')
    bar.append(pause, halt)
    document.body.append(bar)
  }
  paused = false
  setPause(false)
  bar.hidden = false
  document.documentElement.classList.add('kb-reading')
}
function setPause(on) {
  const b = bar.querySelector('.kb-speak-pause')
  b.innerHTML = on ? ICON.play : ICON.pause
  b.setAttribute('aria-label', on ? 'Resume' : 'Pause')
}
function togglePause() {
  if (!current) return
  paused = !paused
  setPause(paused)
  if (paused) {
    player.pause()
    if ('speechSynthesis' in window) speechSynthesis.pause()
  } else if ('speechSynthesis' in window && speechSynthesis.paused) {
    speechSynthesis.resume()
  } else {
    player.play().catch(() => {})
  }
}

const isEnglish = (text) => {
  const letters = text.replace(/\s/g, '')
  return letters.length > 0 && (letters.match(/[A-Za-z]/g) || []).length > letters.length * 0.5
}

function voice() {
  const en = speechSynthesis.getVoices().filter((v) => /^en/i.test(v.lang))
  const pick = (test) => en.find(test)
  return pick((v) => /natural/i.test(v.name) && /en-US/i.test(v.lang))
    || pick((v) => /natural/i.test(v.name))
    || pick((v) => /google/i.test(v.name) && /en-US/i.test(v.lang))
    || pick((v) => /google/i.test(v.name))
    || pick((v) => /online/i.test(v.name))
    || pick((v) => /en-US/i.test(v.lang))
    || en[0] || null
}

// The lines of a quote in reading order: each paragraph, and the own text of each list item (wrapped in a span, so a
// nested list under it is not highlighted with it).
function linesOf(quote) {
  if (quote._lines) return quote._lines
  if (quote.tagName === 'TABLE') return (quote._lines = [...quote.tBodies[0].rows])
  return (quote._lines = linesIn([quote]))
}

// The Chinese translation of a quote: the paragraphs and lists right after it, up to the next heading, table, figure
// or quote; its lines pair one to one with the quote's lines.
function zhBlockOf(quote) {
  if (quote._zhBlock !== undefined) return quote._zhBlock
  const parts = []
  for (let n = quote.nextElementSibling; n; n = n.nextElementSibling) {
    if (n.matches('.heading-wrapper, h1, h2, h3, h4, h5, .table-wrapper, table, blockquote') || n.querySelector('img')) break
    if (/^(P|UL|OL)$/.test(n.tagName)) parts.push(n)
  }
  if (!parts.length) return (quote._zhBlock = null)
  const block = document.createElement('div')
  block.className = 'kb-zh-block'
  parts[0].before(block)
  block.append(...parts)
  return (quote._zhBlock = block)
}
function zhLinesOf(quote) {
  if (quote._zhLines) return quote._zhLines
  const block = zhBlockOf(quote)
  return (quote._zhLines = block ? linesIn([...block.children], true) : [])
}

function linesIn(roots, rootsAreLines = false) {
  const out = []
  const walk = (node) => {
    for (const c of [...node.children]) {
      if (c.tagName === 'P') out.push(c)
      else if (c.tagName === 'LI') {
        if ([...c.children].some((x) => x.tagName === 'P')) { walk(c); continue }
        let span = c.querySelector(':scope > .kb-line')
        if (!span) {
          span = document.createElement('span')
          span.className = 'kb-line'
          while (c.firstChild && !/^(UL|OL)$/.test(c.firstChild.tagName || '')) span.append(c.firstChild)
          c.prepend(span)
        }
        out.push(span)
        for (const x of c.children) if (/^(UL|OL)$/.test(x.tagName)) walk(x)
      } else if (/^(UL|OL|DIV)$/.test(c.tagName)) walk(c)
    }
  }
  for (const r of roots) {
    if (rootsAreLines && r.tagName === 'P') out.push(r)
    else if (rootsAreLines) walk({ children: [r] })
    else walk(r)
  }
  return out
}

// the text of an element without the read-aloud button inside it
const textOf = (el) => el.tagName === 'TR'
  ? [...el.cells].slice(1).map(textOf).join('. ')
  : [...el.childNodes].filter((n) => !n.classList?.contains('kb-speak')).map((n) => n.textContent).join('').trim()

// Highlights the line being read and keeps it in view. A section title goes to the top of the window (just under the
// header), so the section reads from the top down. A line does not move the page while it is in the upper part of the
// window; once lines pass 40% of the visible height, each one is scrolled smoothly back to 40%, so the page moves a
// little per line (never a whole screen, never backwards). Phones: the visible height is used.
function mark(el, isTitle = false) {
  document.querySelectorAll('.kb-line-reading').forEach((n) => n.classList.remove('kb-line-reading'))
  if (!el) return
  el.classList.add('kb-line-reading')
  follow(el, isTitle)
}

function follow(el, isTitle) {
  const view = window.visualViewport?.height || innerHeight // phones: the visible height, without the browser bars
  const head = document.querySelector('header')
  // the site header scrolls away with the page; leave room for it only if it stays fixed at the top
  const header = head && /fixed|sticky/.test(getComputedStyle(head).position) ? Math.max(0, head.getBoundingClientRect().bottom) : 0
  const top = el.getBoundingClientRect().top
  let spot = null
  if (isTitle) spot = header + 8
  else if (top > view * 0.4 || top < header + 8) spot = Math.max(header + 8, view * 0.4)
  if (spot !== null) scrollTo({ top: scrollY + top - spot, behavior: 'smooth' })
}

function stop() {
  if ('speechSynthesis' in window) speechSynthesis.cancel()
  player.pause()
  player.onended = null
  document.querySelectorAll('.kb-line-reading').forEach((n) => n.classList.remove('kb-line-reading'))
  if (bar) bar.hidden = true
  document.querySelectorAll('.kb-zh-block.kb-speaking').forEach((n) => n.classList.remove('kb-speaking'))
  document.documentElement.classList.remove('kb-reading')
  paused = false
  if (current) {
    current.button.textContent = current.label
    for (const q of current.quotes) q.classList.remove('kb-speaking')
  }
  current = null
}

function nextQuote(run) {
  if (current !== run) return // stopped or replaced
  run.index += 1
  if (run.index < run.quotes.length) readQuote(run)
  else stop()
}

// The steps of a reading: the section title first (when there is one), then each line; a step plays its recording or,
// without one, is spoken by the browser.
// English and Chinese: the whole English quote first, then the whole Chinese translation below it, each line highlighted
// and the reading frame moved to the part being read.
function stepsOf(quote, mode) {
  const steps = quote._heading ? [{ el: quote._heading.el, src: quote._heading.src, text: quote._heading.text, title: true, box: quote }] : []
  linesOf(quote).forEach((line, i) => steps.push({ el: line, src: quote._audio?.[i], text: textOf(line), box: quote }))
  if (mode === 'both') {
    const block = zhBlockOf(quote)
    zhLinesOf(quote).forEach((line, i) => steps.push({ el: line, src: quote._zh?.[i], text: textOf(line), zh: true, box: block }))
  }
  return steps
}

function playStep(run, steps, j) {
  if (current !== run) return
  if (j >= steps.length) return nextQuote(run)
  const step = steps[j]
  if (step.box && !step.box.classList.contains('kb-speaking')) {
    for (const q of run.quotes) q.classList.remove('kb-speaking')
    document.querySelectorAll('.kb-zh-block.kb-speaking').forEach((n) => n.classList.remove('kb-speaking'))
    step.box.classList.add('kb-speaking')
  }
  mark(step.el, step.title)
  if (step.src) {
    player.src = step.src
    player.onended = () => playStep(run, steps, j + 1)
    player.play().catch(() => playStep(run, steps, j + 1))
    return
  }
  const v = step.zh ? speechSynthesis.getVoices().find((x) => /^zh/i.test(x.lang)) : voice()
  const u = new SpeechSynthesisUtterance(step.text)
  u.lang = v?.lang || (step.zh ? 'zh-CN' : 'en-US')
  if (v) u.voice = v
  u.rate = 0.9
  u.onend = () => playStep(run, steps, j + 1)
  speechSynthesis.speak(u)
}

function readQuote(run) {
  const quote = run.quotes[run.index]
  for (const q of run.quotes) q.classList.remove('kb-speaking')
  quote.classList.add('kb-speaking')
  playStep(run, stepsOf(quote, run.mode), 0)
}

function start(button, label, quotes, mode = 'en') {
  const again = current?.button === button
  stop()
  if (again || !quotes.length) return
  current = { button, label, quotes, index: 0, mode }
  button.textContent = STOP
  showBar()
  readQuote(current)
}

// A unit's button sits on the line of its numbered section title (beside the heading, not inside it, so the outline
// and the anchor keep the title's own text); without a title it goes above the unit.
function place(button, unit) {
  const h = unit._heading?.el
  if (!h) return (unit.closest('.table-wrapper') || unit).before(button)
  button.classList.add('kb-speak-head')
  const wrap = h.closest('.heading-wrapper')
  wrap?.classList.add('kb-has-speak')
  h.after(button)
}

function makeButton(label, cls, onClick) {
  const b = document.createElement('button')
  b.type = 'button'
  b.className = cls
  b.textContent = label
  b.addEventListener('click', onClick)
  return b
}

// the nearest numbered heading before an element (looking through heading wrappers): { el, number, text }, where text
// is the heading's English part (a Chinese gloss in full-width brackets is dropped)
function headingOf(el) {
  for (let n = (el.closest('.table-wrapper') || el).previousElementSibling; n; n = n.previousElementSibling) {
    const h = n.matches('h1, h2, h3, h4, h5') ? n : n.querySelector('h1, h2, h3, h4, h5')
    const m = h?.textContent.trim().match(/^(\d+(?:\.\d+)*)\s/)
    if (m) return { el: h, number: m[1], text: h.textContent.replace(/（[^）]*）/g, '').trim() }
  }
  return null
}
const sectionOf = (el) => headingOf(el)?.number || null

// the section title as a reading step: its recording (audio.json "headings", by section number) or its English text
function titleStep(unit, rec) {
  const h = headingOf(unit)
  if (!h) return null
  const file = rec?.headings?.[h.number]
  return { el: h.el, src: file ? new URL(file, rec.base).href : null, text: h.text }
}

async function recordings() {
  const slug = location.pathname.split('/').pop().replace(/\.html$/, '')
  try {
    const r = await fetch(new URL(`media/${slug}.audio.json`, location.href), { cache: 'no-store' })
    if (!r.ok) return null
    const data = await r.json()
    return { sections: data.sections || {}, tables: data.tables || [], headings: data.headings || {}, priority: data.priority || [], zh: data.zh || {}, base: new URL('media/', location.href) }
  } catch {
    return null
  }
}

export async function readAloud(body) {
  stop() // a page swapped in place stops the previous page's reading
  const hasSpeech = 'speechSynthesis' in window
  if (hasSpeech) speechSynthesis.getVoices() // starts loading the voice list before the first click
  const quotes = [...body.querySelectorAll('blockquote')].filter((q) => isEnglish(q.innerText))
  const tables = [...body.querySelectorAll('table')].filter((t) => t.rows[0]?.cells[0]?.textContent.trim() === 'Step'
    && /^Action/.test(t.rows[0]?.cells[1]?.textContent.trim() || '') && t.tBodies[0]?.rows.length)
  if (!quotes.length && !tables.length) return
  const rec = await recordings()
  tables.forEach((t, i) => {
    const files = rec?.tables?.[i]
    if (Array.isArray(files) && files.length === t.tBodies[0].rows.length) t._audio = files.map((f) => new URL(f, rec.base).href)
  })
  for (const t of tables) t._heading = titleStep(t, rec)
  const playableTables = tables.filter((t) => t._audio || hasSpeech)
  for (const t of playableTables) {
    const b = makeButton(LABEL, 'kb-speak', () => start(b, LABEL, [t]))
    place(b, t)
  }
  const h1 = body.querySelector('h1')
  if (playableTables.length > 1) {
    const all = makeButton(ALL_STEPS, 'kb-speak kb-speak-all', () => start(all, ALL_STEPS, playableTables))
    h1 ? h1.after(all) : body.prepend(all)
  }
  for (const q of quotes) {
    const files = rec?.sections[sectionOf(q)]
    if (Array.isArray(files)) q._audio = files.map((f) => new URL(f, rec.base).href)
  }
  for (const q of quotes) q._heading = titleStep(q, rec)
  const playable = quotes.filter((q) => q._audio || hasSpeech)
  for (const quote of playable) {
    const b = makeButton(LABEL, 'kb-speak', () => start(b, LABEL, [quote]))
    place(b, quote)
  }
  if (playable.length > 1) {
    const all = makeButton(ALL, 'kb-speak kb-speak-all', () => start(all, ALL, playable))
    h1 ? h1.after(all) : body.prepend(all)
    // audio.json "priority": section numbers, most important first; the button plays those sections in that order
    const order = (rec?.priority || []).map((n) => playable.find((q) => sectionOf(q) === n)).filter(Boolean)
    if (order.length > 1) {
      const pri = makeButton(BY_PRIORITY, 'kb-speak kb-speak-all', () => start(pri, BY_PRIORITY, order))
      pri.title = `Order: ${rec.priority.join(', ')}`
      all.after(pri)
    }
    // English then Chinese, line by line, when the page has the Chinese recordings ("zh" in audio.json)
    for (const q of playable) {
      const files = rec?.zh?.[sectionOf(q)]
      if (Array.isArray(files)) q._zh = files.map((f) => new URL(f, rec.base).href)
    }
    if (playable.some((q) => q._zh)) {
      const both = makeButton(BOTH, 'kb-speak kb-speak-all', () => start(both, BOTH, playable, 'both'))
      ;(body.querySelector('.kb-speak-all:last-of-type') || all).after(both)
    }
  }
}
