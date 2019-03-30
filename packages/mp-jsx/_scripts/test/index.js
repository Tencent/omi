/* mp-jsx v0.1.0
  base on taro-transformer-wx v1.2.22
  https://github.com/NervJS/taro/tree/master/packages/taro-transformer-wx
*/
const jsx2wxml = require('../jsx2wxml')
const fs = require('fs')
const path = require('path')

const baseOptions = {
  isRoot: false,
  isApp: false,
  sourcePath: __dirname,
  outputPath: __dirname,
  code: '',
  isTyped: false
}

const { template } = jsx2wxml.default({
  ...baseOptions,
  code: buildComponent(fs.readFileSync(path.join(__dirname, "./test.jsx"), 'utf8'))
})


console.log(template  ===
`<block>
    <block>
        <block wx:if="{{bb}}">
            <view>show</view>
        </block>
        <block wx:else>
            <view>hide</view>
        </block>
    </block>
</block>`)


function buildComponent(code) {
  return `
class WeElement {
  render () {
    return ${code}
  }
}
`
}

