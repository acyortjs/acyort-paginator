const paginator = ({ page }) => {
  // const size = this.postData.length
  const size = 10
  const step = 2

  function num(f, t) {
    let html = ''
    for (let i = f; i < t; i += 1) {
      html += `<a${i === page ? ' class="current"' : ''}>${i}</a>`
    }
    return html
  }

  function last() {
    return `<i>...</i><a>${size}</a>`
  }

  function first() {
    return '<a>1</a><i>...</i>'
  }

  const html = [
    '<span>',
    '',
    '</span>',
  ]

  if (size < step * 2 + 6) {
    html[1] = num(1, size + 1)
    return html.join('')
  }

  if (page < step * 2 + 1) {
    html[1] += num(1, step * 2 + 4)
    html[1] += last()
    return html.join('')
  }

  if (page > size - step * 2) {
    html[1] += first()
    html[1] += num(size - step * 2 - 2, size + 1)
    return html.join('')
  }

  html[1] += first()
  html[1] += num(page - step, page + step + 1)
  html[1] += last()
  return html.join('')
}

module.exports = paginator
