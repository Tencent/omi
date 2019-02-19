var express = require('express')
var app = express()
var Omi = require('omio')
require('./my-element')

app.get('/', function (req, res) {
  res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Omi SSR</title></head>
        <body>${Omi.renderToString(Omi.h('my-element'))}</body>
      </html>
    `)
})

app.listen(3000)