// Adds the "Last updated on" line under the page title, as on Microsoft Learn.
export default {
  start: () => {
    const date = document.querySelector('meta[name="kb:date"]')?.content
    const h1 = document.querySelector('article h1')
    if (!date || !h1) return
    const meta = document.createElement('ul')
    meta.className = 'page-metadata'
    const li = document.createElement('li')
    li.textContent = `Last updated on ${date}`
    meta.appendChild(li)
    h1.after(meta)
  }
}
