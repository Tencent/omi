var htmlToJson = require('html2json').html2json

function compile(wxml) {
  return walk(htmlToJson(minifier(wxml)))
}

function minifier(wxml) {
  return wxml.replace(/>\s+|\s+</g, function (m) {
    return m.trim()
  }).replace(/<!--[\s\S]*?-->/g, '')
}

function walk(node) {
  return (
    `function render(){
  return ${_walk(node)}
}`)
}

function _walk(node, currentIndex, children) {
  var c = ''
  var result = ''
  if (node.node === 'text') {
    var text = node.text.trim().replace(/\\n/g, '')
    if (text != '') {
      return `\`${bracesText(text)}\``
    } else {
      return ''
    }
  } else if (node.child) {
    node.child.forEach((childNode, index, arr) => {
      c += _walk(childNode, index, arr)
      if (childNode.node !== 'text') {
        var next = arr[index + 1]
        if (!(next && next.attr && (next.attr['wx:elif'] || next.attr.hasOwnProperty('wx:else')))) {
          c += ','
        }
      }
    })
    if (c.endsWith(',')) {
      c = c.substr(0, c.length - 1)
    }
  }
  if (node.node === 'root') {
    return c
  }
  if (node.attr) {
    var ifCond = ''
    var isThree = false
    var ifAttr = node.attr['wx:if'] || node.attr['wx:elif']
    if (ifAttr) {
      var cond = ifAttr.join ? ifAttr.join('') : ifAttr
      var next = children[currentIndex + 1]

      if (next && next.attr && (next.attr['wx:elif'] || next.attr.hasOwnProperty('wx:else'))) {
        ifCond = cond.substr(2, cond.length - 4) + '?'
        isThree = true
      } else {
        ifCond = cond.substr(2, cond.length - 4) + '&&'
      }

      delete node.attr['wx:if']
      delete node.attr['wx:elif']
    }

    if (node.attr.hasOwnProperty('wx:else')) {
      delete node.attr['wx:else']
    }

    var forAttr = node.attr['wx:for']
    if (forAttr) {
      var str = forAttr.join ? forAttr.join('') : forAttr
      str = str.substr(2, str.length - 4)
      var index = node.attr['wx:for-index'] || 'index'
      var item = node.attr['wx:for-item'] || 'item'
      var current = `${str}.map((${item},${index})=>{
        ${c}
      })`

      delete node.attr['wx:for']
      delete node.attr['wx:for-index']
      delete node.attr['wx:for-item']

      result = `${ifCond}h('${node.tag}',${stringify(node.attr)},${current})`
    } else {
      result = `${ifCond}h('${node.tag}',${stringify(node.attr)},[${c}])`
    }

    if (isThree) {
      result += ':'
    }
  } else {
    result = `h('${node.tag}',${stringify(node.attr)},[${c}])`
  }
  return result
}


function stringify(attr) {
  if (attr) {
    var result = '{'
    var keys = Object.keys(attr)
    var maxIndex = keys.length - 1
    keys.forEach((key, index) => {
      var str = attr[key].join ? attr[key].join('') : attr[key]
      if (str.indexOf('{{') === 0) {
        attr[key] = braces(str)
        result += "'" + key + "': " + attr[key] + (maxIndex === index ? '' : ',')
      } else {
        attr[key] = bracesText(str)
        result += "'" + key + "': `" + attr[key] + (maxIndex === index ? '`' : '`,')
      }
    })
    return result += '}'
  }
  return null
}

function braces(str) {
  return str.replace(/{{([\S\s]*?)}}/g, function (a, b) { return b })
}

function bracesText(str) {
  return str.replace(/{{([\S\s]*?)}}/g, function (a, b) { return '${' + b + '}' })
}

module.exports = compile
