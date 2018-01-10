const paginator = ({ current, total }) => {
  const step = 2

  function num(f, t) {
    return Array(t - f)
      .fill(f)
      .map((n, i) => n + i)
      .map(n => `<a${n === current ? ' class="current"' : ''}>${n}</a>`)
      .join('')
  }

  function last() {
    return `<i>...</i><a>${total}</a>`
  }

  function first() {
    return '<a>1</a><i>...</i>'
  }

  const html = [
    '<span>',
    '',
    '</span>',
  ]

  if (total < step * 2 + 6) {
    html[1] = num(1, total + 1)
    return html.join('')
  }

  if (current < step * 2 + 1) {
    html[1] += num(1, step * 2 + 4)
    html[1] += last()
    return html.join('')
  }

  if (current > total - step * 2) {
    html[1] += first()
    html[1] += num(total - step * 2 - 2, total + 1)
    return html.join('')
  }

  html[1] += first()
  html[1] += num(current - step, current + step + 1)
  html[1] += last()
  return html.join('')
}

module.exports = paginator
