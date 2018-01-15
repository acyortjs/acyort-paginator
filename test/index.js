const path = require('path')
const Acyort = require('acyort')
const { defaults } = require('acyort-config')

const config = defaults

config.base = __dirname
config.cache =  true
config.scripts = ['helper.js']
config.scripts_dir = '/'
config.per_page = 1

const acyort = new Acyort(config)

acyort.build()
