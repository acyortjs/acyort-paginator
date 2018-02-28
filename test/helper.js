const paginator = require('../paginator')

const { running } = acyort.server.status

if (!running) {
  acyort.helper.register('_paginator', paginator.bind(acyort))
}
