var Omi = typeof require === 'function'
  ? require('omi')
  : window.Omi

if(!Omi){
  Omi = window.Omi
}

var htm = typeof require === 'function'
  ? require('htm')
  : window.htm

var html = htm.default ? htm.default.bind(Omi.h) : html.bind(Omi.h)

if (typeof exports == "object") {
  module.exports = html
} else if (typeof define == "function" && define.amd) {
  define([], function () { return html })
} else {
  window.html = html
}
