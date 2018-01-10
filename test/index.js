const path = require('path')
const Acyort = require('acyort')
const { defaults } = require('acyort-config')

const config = defaults

config.title = 'AcyOrt'
config.description = 'A Node.js blog tool powered by GitHub.'
config.user = 'LoeiFy'
config.repository = 'Recordum'
config.base = __dirname
config.cache =  true
config.url = 'http://acyort.com'
config.scripts = ['helper.js']
config.scripts_dir = '/'

const acyort = new Acyort(config)

acyort.build()
