
let styleId = 0
const styleList = []
const cache = {}

export function getStyleId(ctor) {
  for (let i = 0, len = styleList.length; i < len; i++) {
    let item = styleList[i]

    if (item.ctor === ctor) {
      return item.attrName
    }
  }

  let attrName = '_ss' + styleId
  styleList.push({ ctor, attrName })
  styleId++

  return attrName
}

// many thanks to https://github.com/thomaspark/scoper/
export function scoper(css, prefix) {
  prefix = '[' + prefix.toLowerCase() + ']'
  // https://www.w3.org/TR/css-syntax-3/#lexical
  css = css.replace(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, '')
  // eslint-disable-next-line
  let re = new RegExp('([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|\s*{)', 'g')
  /**
   * Example:
   *
   * .classname::pesudo { color:red }
   *
   * g1 is normal selector `.classname`
   * g2 is pesudo class or pesudo element
   * g3 is the suffix
   */
  css = css.replace(re, (g0, g1, g2, g3) => {
    if (typeof g2 === 'undefined') {
      g2 = ''
    }

    /* eslint-ignore-next-line */
    if (
      g1.match(
        /^\s*(@media|\d+%?|@-webkit-keyframes|@keyframes|to|from|@font-face)/
      )
    ) {
      return g1 + g2 + g3
    }

    let appendClass = g1.replace(/(\s*)$/, '') + prefix + g2
 
    return appendClass + g3
  })

  return css
}

export function addStyle(cssText, id) {
  id = id.toLowerCase()
  let ele = document.getElementById(id)
  let head = document.getElementsByTagName('head')[0]
  if (ele && ele.parentNode === head) {
    head.removeChild(ele)
  }

  let someThingStyles = document.createElement('style')
  head.appendChild(someThingStyles)
  someThingStyles.setAttribute('type', 'text/css')
  someThingStyles.setAttribute('id', id)
  if (window.ActiveXObject) {
    someThingStyles.styleSheet.cssText = cssText
  } else {
    someThingStyles.textContent = cssText
  }
}



export function appendStyle(style, attr) {
  if (!cache[attr]) {
    addStyle(scoper(style, attr), attr)
    cache[attr] = true
  }
}