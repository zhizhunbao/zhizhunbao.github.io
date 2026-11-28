// Multiple-choice quizzes: a paragraph that is only a link to a .json file inside the article becomes the quiz.
// Data: { "questions": [{ "stem", "zhStem", "options", "answer", "zhTerm", "definition", "zh", "keys", "verbs", "zhVerbs" }] }:
// stem is a scenario and zhStem its Chinese; definition is the answer's official English definition and zh its Chinese,
// keys their key words as [English, Chinese] pairs in the same order on both sides, verbs and zhVerbs their verb phrases.
// A lab question has "explain" and "zhExplain" (one line each) instead of definition, zh, keys and verbs.
// "marks" holds the same kind of marks for the stem (and a lab explanation): { stem: { keys, verbs, zhVerbs }, explain }.
// Click an option to check it: the right option turns green (a wrong pick red), then the question in Chinese and the
// definition in both languages show (open after a wrong pick, folded after a right one), each key word coloured the same on both sides (kb.css .kb-key) and the verb
// phrases underlined (marks.js).

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
import { markPhrases, markVerbs } from './marks.js'

const LETTERS = 'ABCDEFGH'

// Key word n of the stem and of the translation share a colour; a key word blanked out of the stem is skipped
const keySpan = (n) => el('span', { class: 'kb-key', 'data-key': (n % 4) + 1 })

// Key words and verb phrases of an English text (lang 0) or its Chinese (lang 1); m = { keys, verbs, zhVerbs }
function marked(tag, attrs, text, m, lang) {
  const e = el(tag, { ...attrs, text })
  if (!m) return e
  markPhrases(e, (m.keys || []).map((k) => k[lang]), keySpan)
  markVerbs(e, (lang ? m.zhVerbs : m.verbs) || [])
  return e
}

// After answering: a lab question's one-line explanation, or the term's definition in English and Chinese, marked
function explanation(q) {
  const m = q.marks?.explain
  if (q.explain) return [marked('p', {}, q.explain, m, 0), marked('p', {}, q.zhExplain, m, 1)]
  const en = el('p', {}, el('strong', { text: q.options[q.answer] }), el('span', { text: `: ${q.definition}` }))
  markPhrases(en.lastChild, (q.keys || []).map((k) => k[0]), keySpan)
  markVerbs(en.lastChild, q.verbs || [])
  const zh = el('p', {}, el('strong', { text: q.zhTerm }), el('span', { text: `：${q.zh}` }))
  markPhrases(zh.lastChild, (q.keys || []).map((k) => k[1]), keySpan)
  markVerbs(zh.lastChild, q.zhVerbs || [])
  return [en, zh]
}

function render(box, data, src) {
  const qs = data.questions || []
  let answered = 0, correct = 0
  const score = el('p', { class: 'kb-quiz-score', 'aria-live': 'polite' })
  const showScore = () => { score.textContent = `${answered} of ${qs.length} answered, ${correct} correct` }
  const reset = el('button', { class: 'button button-sm', type: 'button', text: 'Start over' })
  reset.addEventListener('click', () => { box.replaceChildren(); render(box, data, src); box.scrollIntoView() })
  const bar = el('div', { class: 'kb-quiz-bar' }, score, reset)
  const list = el('ol', { class: 'kb-quiz-list' })
  qs.forEach((q, i) => {
    const id = `kb-quiz-q${i + 1}`
    const stem = marked('p', { class: 'kb-quiz-stem', id }, q.stem, q.marks?.stem, 0)
    const opts = el('ul', { class: 'kb-quiz-options', role: 'list', 'aria-labelledby': id })
    // the explanation opens by itself after a wrong pick and stays folded after a right one (user, 2026-10-20)
    const result = el('details', { class: 'kb-quiz-result', hidden: true })
    const buttons = q.options.map((o, j) => {
      const b = el('button', { class: 'kb-quiz-option', type: 'button' }, el('span', { class: 'kb-quiz-letter', text: LETTERS[j] }), el('span', { text: o }))
      b.addEventListener('click', () => {
        const right = j === q.answer
        answered++
        if (right) correct++
        buttons.forEach((x, k) => {
          x.disabled = true
          if (k === q.answer) x.classList.add('is-correct')
          else if (k === j) x.classList.add('is-wrong')
        })
        result.className = `kb-quiz-result ${right ? 'is-correct' : 'is-wrong'}`
        result.replaceChildren(el('summary', { text: 'Explanation' }),
          marked('p', { class: 'kb-quiz-zhstem' }, q.zhStem, q.marks?.stem, 1), ...explanation(q))
        result.open = !right
        result.hidden = false
        showScore()
      })
      opts.append(el('li', {}, b))
      return b
    })
    list.append(el('li', { class: 'kb-quiz-question' }, stem, opts, result))
  })
  showScore()
  box.append(bar, list)
}

export async function quiz() {
  for (const a of document.querySelectorAll('.content p > a[href$=".json"]')) {
    const p = a.parentElement
    if (p.textContent.trim() !== a.textContent.trim()) continue // only a paragraph that is the link alone
    const src = new URL(a.href)
    const box = el('div', { class: 'kb-quiz' })
    try {
      const r = await fetch(src)
      if (!r.ok) throw new Error(r.status)
      render(box, await r.json(), src)
      p.replaceWith(box)
    } catch {
      // leave the link in place: it still opens the data
    }
  }
}
