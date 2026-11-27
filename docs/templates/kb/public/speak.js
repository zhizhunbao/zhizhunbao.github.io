// Read aloud (since 2026-11-27): every English quote (a blockquote, such as the professor's original text on the course
// pages) gets a button above it, and a page with two or more gets a "Play all" button under its title that reads every
// quote in order. The quote being read is outlined and scrolled into view, and the line being read is highlighted.
// A second click stops; starting another reading stops the first.
// Recorded voice first: media/<page>.audio.json ({ voice, sections: { "1.1": ["cst8913/audio/.../01.mp3", ...] } }) gives,
// for each numbered section, one MP3 per line of its quote, spoken by a Microsoft neural voice; a quote plays the files
// of the numbered heading before it, line by line. Without files the browser's own speech synthesis (Web Speech API)
// reads it line by line, with the most natural English voice the browser has (Edge's "Natural" voices, then Google's,
// before the robotic Windows desktop voices).

const LABEL = '🔊 Read aloud'
const ALL = '▶ Play all English'
const STOP = '■ Stop'
let current = null // { button, label, quotes, index, line }
const player = new Audio()

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
  walk(quote)
  quote._lines = out
  return out
}

function markLine(quote, i) {
  document.querySelectorAll('.kb-line-reading').forEach((n) => n.classList.remove('kb-line-reading'))
  linesOf(quote)[i]?.classList.add('kb-line-reading')
}

function stop() {
  if ('speechSynthesis' in window) speechSynthesis.cancel()
  player.pause()
  player.onended = null
  document.querySelectorAll('.kb-line-reading').forEach((n) => n.classList.remove('kb-line-reading'))
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

function playLine(run, quote, files, j) {
  if (current !== run) return
  if (j >= files.length) return nextQuote(run)
  markLine(quote, j)
  player.src = files[j]
  player.onended = () => playLine(run, quote, files, j + 1)
  player.play().catch(() => playLine(run, quote, files, j + 1))
}

function readQuote(run) {
  const quote = run.quotes[run.index]
  for (const q of run.quotes) q.classList.remove('kb-speaking')
  quote.classList.add('kb-speaking')
  quote.scrollIntoView({ behavior: 'smooth', block: 'center' })
  const lines = linesOf(quote)
  if (quote._audio?.length) return playLine(run, quote, quote._audio, 0)
  const v = voice()
  lines.forEach((line, i) => {
    const u = new SpeechSynthesisUtterance(line.textContent.trim())
    u.lang = v?.lang || 'en-US'
    if (v) u.voice = v
    u.rate = 0.9
    u.onstart = () => { if (current === run) markLine(quote, i) }
    if (i === lines.length - 1) u.onend = () => nextQuote(run)
    speechSynthesis.speak(u)
  })
}

function start(button, label, quotes) {
  const again = current?.button === button
  stop()
  if (again || !quotes.length) return
  current = { button, label, quotes, index: 0 }
  button.textContent = STOP
  readQuote(current)
}

function makeButton(label, cls, onClick) {
  const b = document.createElement('button')
  b.type = 'button'
  b.className = cls
  b.textContent = label
  b.addEventListener('click', onClick)
  return b
}

// the section number ("1.10") of the nearest numbered heading before an element, looking through heading wrappers
function sectionOf(el) {
  for (let n = el.previousElementSibling; n; n = n.previousElementSibling) {
    const h = n.matches('h1, h2, h3, h4, h5') ? n : n.querySelector('h1, h2, h3, h4, h5')
    const m = h?.textContent.trim().match(/^(\d+(?:\.\d+)*)\s/)
    if (m) return m[1]
  }
  return null
}

async function recordings() {
  const slug = location.pathname.split('/').pop().replace(/\.html$/, '')
  try {
    const r = await fetch(new URL(`media/${slug}.audio.json`, location.href), { cache: 'no-store' })
    if (!r.ok) return null
    const data = await r.json()
    return { sections: data.sections || {}, base: new URL('media/', location.href) }
  } catch {
    return null
  }
}

export async function readAloud(body) {
  stop() // a page swapped in place stops the previous page's reading
  const hasSpeech = 'speechSynthesis' in window
  if (hasSpeech) speechSynthesis.getVoices() // starts loading the voice list before the first click
  const quotes = [...body.querySelectorAll('blockquote')].filter((q) => isEnglish(q.innerText))
  if (!quotes.length) return
  const rec = await recordings()
  for (const q of quotes) {
    const files = rec?.sections[sectionOf(q)]
    if (Array.isArray(files)) q._audio = files.map((f) => new URL(f, rec.base).href)
  }
  const playable = quotes.filter((q) => q._audio || hasSpeech)
  for (const quote of playable) {
    const b = makeButton(LABEL, 'kb-speak', () => start(b, LABEL, [quote]))
    quote.before(b)
  }
  if (playable.length > 1) {
    const all = makeButton(ALL, 'kb-speak kb-speak-all', () => start(all, ALL, playable))
    const h1 = body.querySelector('h1')
    h1 ? h1.after(all) : body.prepend(all)
  }
}
