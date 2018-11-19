let htmlToJson = require('html2json').html2json
let map = require('./tag-mapping')
let reURL = /^(https?):\/\/.+$/;

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

function checkIsArray(json) {
  let count = 0
  for (let i = 0, len = json.child.length; i < len; i++) {
    let tagName = json.child[i].tag
    if (tagName) {
      if (tagName === 'block') {
        if (json.child[i].attr['wx:if']) {
          count++
        }
      } else {
        count++
      }
    }
    if (count > 1) {
      return true
    }
  }

  return false
}

function walk(node, fnName) {
  if(checkIsArray(node)){
 return `function ${fnName}() {
  0.0
  return [ ${_walk(node)} ]

}`
  } else {
 return `function ${fnName}() {
  0.0
  return ${_walk(node)}

}`
  }

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
      } else {
        c += ','
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

    let forAttr = node.attr['wx:for'] || node.attr['wx:for-items']

    if (forAttr) {
      let str = forAttr.join ? forAttr.join('') : forAttr
      str = str.substr(2, str.length - 4)
      let index = node.attr['wx:for-index'] || 'index'
      let item = node.attr['wx:for-item'] || 'item'
      let current = `${str}.map((${item},${index})=>{
        return ${c}
      })`

      delete node.attr['wx:for']
      delete node.attr['wx:for-items']
      delete node.attr['wx:for-index']
      delete node.attr['wx:for-item']
      if (node.tag == 'block') {
        result = `${ifCond} [${current}]`
      } else {
        result = `${ifCond}h('${map(node.tag)}',${stringify(
          node.attr,
          map(node.tag)
        )},${current})`
      }
    } else if (node.tag == 'block') {
      result = `${ifCond} [${c}]`
    } else {
      result = `${ifCond}h('${map(node.tag)}',${stringify(node.attr, map(node.tag))},[${c}])`
    }

    if (isThree) {
      result += ':'
    }
  } else {
    result = `h('${map(node.tag)}',${stringify(node.attr, map(node.tag))},[${c}])`
  }
  return result
}

function joinNestArray(arr){
  let str = ''
  arr.forEach(item => {
    if(typeof item === 'string'){
      str += item + ' '
    }else if(item.join){
      str += joinNestArray(item)
    }
  })

  return str
}

function stringify(attr, tag) {
  if (attr) {
    let result = '{'
    let keys = Object.keys(attr)
    let maxIndex = keys.length - 1
    let isImg = tag === 'img'
    keys.forEach((key, index) => {
      let v = attr[key]
      let isBind = false
      if (key.indexOf('bind') === 0) {
        key = key.replace('bind', 'on')
        isBind = true
      }
      let str = v.join ? joinNestArray(v) : v

      if (str.indexOf('{{') === 0) {
        attr[key] = braces(str)
        result +=
          "'" + key + "': " + attr[key] + (maxIndex === index ? '' : ',')
      } else {
        attr[key] = bracesText(str)
        if(isImg && key === 'src'){
          result += `'src': ${fixImgSrc(v)}` + (maxIndex === index ? '' : ',')
        } else if (isBind) {
          if(attr[key] !== ''){
            result +=
              "'" + key + "': this." + attr[key] + (maxIndex === index ? '' : ',')
          }
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

function fixImgSrc(src) {
  if (reURL.test(src)) {
    return src
  } else {
    return `require('${src}')`
  }
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
