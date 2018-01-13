const { _url } = acyort.helper.methods

acyort.extend.helper('_paginator', require('../paginator').bind({ _url }))
