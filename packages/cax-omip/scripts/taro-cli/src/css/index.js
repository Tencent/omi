
let map = require('./tag-mapping')
let css = require('css')
let cssWhat = require('css-what')
let cssStringify = require('./css-stringify')

function compileWxss(str) {
  let obj = css.parse(str)
  obj.stylesheet.rules.forEach(rule => {
    rule.selectors && rule.selectors.forEach((selector, index) => {
      let sltObjs = cssWhat(selector)
      sltObjs.forEach(sltObj => {
        sltObj.forEach(item => {
          if (item.type == 'tag') {
            item.name = map(item.name)

          }
        })

      })

      rule.selectors[index] = cssStringify(sltObjs)
    })
  })
  return css.stringify(obj)
}

module.exports = compileWxss
