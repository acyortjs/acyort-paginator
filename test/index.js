const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const assert = require('power-assert')
const Acyort = require('acyort')
const { defaults } = require('acyort-config')

const $ = file => cheerio.load(fs.readFileSync(path.join(__dirname, file)))
const config = defaults

config.base = __dirname
config.cache =  true
config.scripts = ['helper.js']
config.scripts_dir = '/'
config.per_page = 1

describe('paginator', () => {
  it('build', async function () {
    this.timeout(5000)

    const acyort = new Acyort(config)
    await acyort.build()

    assert($('index.html').html() === '<html><head></head><body><span><a class=\"current\">1</a><a href=\"/page/2/\">2</a><a href=\"/page/3/\">3</a><a href=\"/page/4/\">4</a><a href=\"/page/5/\">5</a><i>????</i><a href=\"/page/10/\">10</a></span>\n</body></html>')

    assert($('page/6/index.html').html() === '<html><head></head><body><span><a href=\"/\">1</a><i>????</i><a href=\"/page/5/\">5</a><a class=\"current\">6</a><a href=\"/page/7/\">7</a><i>????</i><a href=\"/page/10/\">10</a></span>\n</body></html>')

    assert($('page/9/index.html').html() === '<html><head></head><body><span><a href=\"/\">1</a><i>????</i><a href=\"/page/6/\">6</a><a href=\"/page/7/\">7</a><a href=\"/page/8/\">8</a><a class=\"current\">9</a><a href=\"/page/10/\">10</a></span>\n</body></html>')

    assert($('categories/2983644/page/4/index.html').html() === '<html><head></head><body><span><a href=\"/categories/2983644/\">1</a><a href=\"/categories/2983644/page/2/\">2</a><a href=\"/categories/2983644/page/3/\">3</a><a class=\"current\">4</a><a href=\"/categories/2983644/page/5/\">5</a></span>\n</body></html>')

    assert($('categories/index.html').html() === '<html><head></head><body></body></html>')
  })

  it('reset', async function () {
    this.timeout(5000)

    const acyort = new Acyort(config)
    await acyort.start(2222)
    acyort.helper.reset()
    await acyort.build()
    assert(typeof acyort.helper.methods._paginator === 'function')
    acyort.server.close()
  })
})
