let htmlToJson = require('html2json').html2json
let map = require('./tag-mapping')

function parse(wxml, fnName) {
  return walk(htmlToJson(minifier(wxml)), fnName)
}

function minifier(wxml) {
  return wxml
    .replace(/>\s+|\s+</g, m => {
      return m.trim()
    })
    .replace(/<!--[\s\S]*?-->/g, '')
}

function walk(node, fnName) {
  return `function ${fnName}() {
  0.0
  return ${_walk(node)}

}`
}

function _walk(node, currentIndex, children) {
  let c = ''
  let result = ''
  if (node.node === 'text') {
    let text = node.text.trim().replace(/\\n/g, '')
    if (text != '') {
      return `\`${bracesText(text)}\``
    }
    return ''
  } else if (node.child) {
    node.child.forEach((childNode, index, arr) => {
      c += _walk(childNode, index, arr)
      if (childNode.node !== 'text') {
        let next = arr[index + 1]
        if (
          !(
            next &&
            next.attr &&
            (next.attr['wx:elif'] || next.attr.hasOwnProperty('wx:else'))
          )
        ) {
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
    let ifCond = ''
    let isThree = false
    let ifAttr = node.attr['wx:if'] || node.attr['wx:elif']
    if (ifAttr) {
      let cond = ifAttr.join ? ifAttr.join('') : ifAttr
      let next = children[currentIndex + 1]

      if (
        next &&
        next.attr &&
        (next.attr['wx:elif'] || next.attr.hasOwnProperty('wx:else'))
      ) {
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

    let forAttr = node.attr['wx:for']
    if (forAttr) {
      let str = forAttr.join ? forAttr.join('') : forAttr
      str = str.substr(2, str.length - 4)
      let index = node.attr['wx:for-index'] || 'index'
      let item = node.attr['wx:for-item'] || 'item'
      let current = `${str}.map((${item},${index})=>{
        return ${c}
      })`

      delete node.attr['wx:for']
      delete node.attr['wx:for-index']
      delete node.attr['wx:for-item']
      if (node.tag == 'block') {
        result = `${ifCond} ${current}`
      } else {
        result = `${ifCond}h('${map(node.tag)}',${stringify(
          node.attr
        )},${current})`
      }
    } else if (node.tag == 'block') {
      result = `${ifCond} ${c}`
    } else {
      result = `${ifCond}h('${map(node.tag)}',${stringify(node.attr)},[${c}])`
    }

    if (isThree) {
      result += ':'
    }
  } else {
    result = `h('${map(node.tag)}',${stringify(node.attr)},[${c}])`
  }
  return result
}

function stringify(attr) {
  if (attr) {
    let result = '{'
    let keys = Object.keys(attr)
    let maxIndex = keys.length - 1
    keys.forEach((key, index) => {
      let v = attr[key]
      let isBind = false
      if (key.indexOf('bind') === 0) {
        key = key.replace('bind', 'on')
        isBind = true
      }
      let str = v.join ? v.join(' ') : v
      if (str.indexOf('{{') === 0) {
        attr[key] = braces(str)
        result +=
          "'" + key + "': " + attr[key] + (maxIndex === index ? '' : ',')
      } else {
        attr[key] = bracesText(str)
        if (isBind) {
          result +=
            "'" + key + "': this." + attr[key] + (maxIndex === index ? '' : ',')
        } else {
          result +=
            "'" + key + "': `" + attr[key] + (maxIndex === index ? '`' : '`,')
        }
      }
    })
    return (result += '}')
  }
  return null
}

function braces(str) {
  return str.replace(/{{([\S\s]*?)}}/g, (a, b) => {
    return b
  })
}

function bracesText(str) {
  return str.replace(/{{([\S\s]*?)}}/g, (a, b) => {
    return '${' + b + '}'
  })
}

module.exports = parse
