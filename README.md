# acyort-paginator

[![Build Status](https://travis-ci.org/acyortjs/acyort-paginator.svg?branch=master)](https://travis-ci.org/acyortjs/acyort-paginator)
[![codecov](https://codecov.io/gh/acyortjs/acyort-paginator/branch/master/graph/badge.svg)](https://codecov.io/gh/acyortjs/acyort-paginator)

Paginator Helper for [AcyOrt](https://github.com/acyortjs/acyort)

## Install

```bash
$ npm i acyort-paginator -S
```

## Usage

set config in `config.yml`

```yml
# ...
plugin:
  - acyort-paginator
# ...
```

add function in templates

```html
<a rel="prev" href="{{ _url(page.prev) }}">←</a>

<-- default -->
{{ _paginator(page) }}

<!-- custom more tag -->
{{ _paginator(page, '...') }}

<a rel="next" href="{{ _url(page.next) }}">→</a>
```
