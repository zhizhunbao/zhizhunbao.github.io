// Multiple-choice quizzes: a paragraph that is only a link to a .json file inside the article becomes the quiz.
// Data: { "questions": [{ "stem", "options", "answer", "zhTerm", "zh", "keys", "roles", "page", "href" }] }, href relative
// to the JSON file; zh is the definition in Chinese, keys its key words as [English, Chinese] pairs in the same order on
// both sides, roles the subject, verb and object of the English and zhVerbs the same verbs in the Chinese (marks.js).
// Click an option to check it; the answer, the Chinese name and translation and a link to the page section then show,
// each key word coloured the same in the stem and the translation (kb.css .kb-key).

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
import { markPhrases, markGrammar, markVerbs } from './marks.js'

const LETTERS = 'ABCDEFGH'

// Key word n of the stem and of the translation share a colour; a key word blanked out of the stem is skipped
const keySpan = (n) => el('span', { class: 'kb-key', 'data-key': (n % 4) + 1 })

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
    markPhrases(stem, (q.keys || []).map((k) => k[0]), keySpan)
    markGrammar(stem, q.roles || [])
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
        const zh = el('p', {}, el('strong', { text: q.zhTerm }), el('span', { text: `：${q.zh}` }))
        markPhrases(zh.lastChild, (q.keys || []).map((k) => k[1]), keySpan)
        markVerbs(zh.lastChild, q.zhVerbs || [])
        result.className = `kb-quiz-result ${right ? 'is-correct' : 'is-wrong'}`
        result.replaceChildren(
          el('p', { class: 'kb-quiz-verdict', text: right ? 'Correct.' : `Not quite. The answer is ${LETTERS[q.answer]}: ${q.options[q.answer]}.` }),
          zh,
          el('p', {}, el('a', { href: new URL(q.href, src).href, text: `Read it on ${q.page}` })),
        )
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
