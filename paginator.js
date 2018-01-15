function paginator({ base, current, total }, more = '&hellip;') {
  const { _url } = this.helper.methods
  const url = (n) => {
    if (n === 1) {
      return _url(`${base}/`)
    }
    return _url(`${base}/page/${n}/`)
  }

  if (!current && !total) {
    return ''
  }

  const step = 1

  function num(f, t) {
    return Array(t - f)
      .fill(f)
      .map((n, i) => n + i)
      .map(n => `<a ${n === current ? 'class="current"' : `href="${url(n)}"`}>${n}</a>`)
      .join('')
  }

  function last() {
    return `<i>${more}</i><a href="${url(total)}">${total}</a>`
  }

  function first() {
    return `<a href="${url(1)}">1</a><i>${more}</i>`
  }

  const html = [
    '<span>',
    '',
    '</span>',
  ]

  if (total < (step * 2) + 6) {
    html[1] = num(1, total + 1)
    return html.join('')
  }

  if (current < (step * 2) + 2) {
    html[1] += num(1, (step * 2) + 4)
    html[1] += last()
    return html.join('')
  }

  if (current > total - (step * 2) - 1) {
    html[1] += first()
    html[1] += num(total - (step * 2) - 2, total + 1)
    return html.join('')
  }

  html[1] += first()
  html[1] += num(current - step, current + step + 1)
  html[1] += last()
  return html.join('')
}

module.exports = paginator
