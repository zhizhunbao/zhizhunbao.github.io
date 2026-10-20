// Multiple-choice quizzes: a paragraph that is only a link to a .json file inside the article becomes the quiz.
// Data: { "questions": [{ "stem", "zhStem", "options", "answer", "zhTerm", "definition", "zh", "keys", "verbs", "zhVerbs" }] }:
// stem is a scenario and zhStem its Chinese; definition is the answer's official English definition and zh its Chinese,
// keys their key words as [English, Chinese] pairs in the same order on both sides, verbs and zhVerbs their verb phrases.
// A lab question has "explain" and "zhExplain" (one line each) instead of definition, zh, keys and verbs.
// Click an option to check it: the right option turns green (a wrong pick red), then the question in Chinese and the
// definition in both languages show, each key word coloured the same on both sides (kb.css .kb-key) and the verb
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

// After answering: a lab question's one-line explanation, or the term's definition in English and Chinese, marked
function explanation(q) {
  if (q.explain) return [el('p', { text: q.explain }), el('p', { text: q.zhExplain })]
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
    const stem = el('p', { class: 'kb-quiz-stem', id, text: q.stem })
    const opts = el('ul', { class: 'kb-quiz-options', role: 'list', 'aria-labelledby': id })
    const result = el('div', { class: 'kb-quiz-result', hidden: true, 'aria-live': 'polite' })
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
        result.replaceChildren(el('p', { class: 'kb-quiz-zhstem', text: q.zhStem }), ...explanation(q))
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
