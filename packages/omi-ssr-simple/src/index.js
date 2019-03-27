var express = require('express')
var app = express()
var Omi = require('omio')
require('./my-element')

app.get('/', function (req, res) {
  const obj = Omi.renderToString(<my-element />)
  res.end(`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Omi SSR</title>
    ${obj.css.join('')}
  </head>
  <body>${obj.html}</body>
</html>`)
})

app.listen(3000)
