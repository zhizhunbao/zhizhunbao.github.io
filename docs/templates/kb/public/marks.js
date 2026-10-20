// Marks phrases inside rendered text without touching the Markdown: each phrase is searched once, left to right, in the
// element's text, and every text node it covers is wrapped in a span. Wrapping keeps the text, so phrases may cross
// bold or other inline markup, and a second call can mark inside the first (key words, then grammar).

// Whole words only: an English phrase never matches inside a longer word ("it" in "with"); Chinese has no such edge
const word = /[A-Za-z0-9]/
export function find(text, ph, from) {
  for (let i = text.indexOf(ph, from); i >= 0; i = text.indexOf(ph, i + 1)) {
    const before = word.test(ph[0]) && word.test(text[i - 1] || '')
    const after = word.test(ph[ph.length - 1]) && word.test(text[i + ph.length] || '')
    if (!before && !after) return i
  }
  return -1
}

// make(index) returns the span for phrase `index`, or null to leave it unmarked (it still moves the search on);
// a phrase not found (or empty) is skipped and the search goes on.
// skips[index] whole-word matches are passed over first (a word that also occurs earlier in a subordinate clause).
export function markPhrases(root, phrases, make, skips = []) {
  const text = root.textContent
  const ranges = []
  let at = 0
  phrases.forEach((ph, n) => {
    let i = ph ? find(text, ph, at) : -1
    for (let k = skips[n] || 0; k > 0 && i >= 0; k--) i = find(text, ph, i + ph.length)
    if (i < 0) return
    ranges.push([i, i + ph.length, n])
    at = i + ph.length
  })
  for (const [start, end, n] of ranges) {
    const nodes = []
    const walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
    let pos = 0
    for (let node = walk.nextNode(); node; node = walk.nextNode()) {
      const len = node.data.length
      if (pos + len > start && pos < end) nodes.push([node, Math.max(0, start - pos), Math.min(len, end - pos)])
      pos += len
    }
    for (const [node, a, b] of nodes) {
      const mid = a > 0 ? node.splitText(a) : node
      if (b - a < mid.data.length) mid.splitText(b - a)
      const span = make(n)
      if (!span) break
      mid.replaceWith(span)
      span.append(mid)
    }
  }
}

const verbBox = () => {
  const s = document.createElement('span')
  s.className = 'kb-role kb-role-V'
  return s
}

// Sentence trunk of an English definition: [["S" | "V" | "O", phrase, skip?], ...] in order. Only the verb (谓语) is
// boxed (user, 2026-10-20); subject and object stay in the data and only keep the search in place.
export function markGrammar(root, roles) {
  markPhrases(root, roles.map((r) => r[1]), (n) => {
    if (roles[n][0] !== 'V') return null
    return verbBox()
  }, roles.map((r) => r[2] || 0))
}

// The same verbs in the Chinese translation: [[phrase, skip], ...], one per English verb ("" when it has none)
export function markVerbs(root, verbs) {
  markPhrases(root, verbs.map((v) => v[0]), verbBox, verbs.map((v) => v[1] || 0))
}
