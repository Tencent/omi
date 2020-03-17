

var WxParse = require('./wxParse.js');

module.exports = function comi(md, scope) {
  WxParse.wxParse('article', 'md', md, scope, 5);
}