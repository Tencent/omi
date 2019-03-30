/* mp-jsx v0.1.0
  base on taro-transformer-wx v1.2.22
  https://github.com/NervJS/taro/tree/master/packages/taro-transformer-wx
*/
const jsx2wxml = require('../jsx2wxml')
const fs = require('fs')
const path = require('path')


function buildComponent(code) {
  return `
class WeElement {
  render () {
    return ${code}
  }
}
`
}


const baseOptions = {
  isRoot: false,
  isApp: false,
  sourcePath: __dirname,
  outputPath: __dirname,
  code: '',
  isTyped: false
}

let { template } = jsx2wxml.default({
  ...baseOptions,
  code: buildComponent(fs.readFileSync(path.join(__dirname, "./test.jsx"), 'utf8'))
})


console.log(template  ===
`<block>
    <view>show</view>
</block>`)

template = jsx2wxml.default({
  ...baseOptions,
  code: buildComponent(fs.readFileSync(path.join(__dirname, "./test.1.jsx"), 'utf8'))
}).template


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



template = jsx2wxml.default({
  ...baseOptions,
  code: buildComponent(fs.readFileSync(path.join(__dirname, "./test.2.jsx"), 'utf8'))
}).template


console.log(template ===
`<block>
    <view>
        <view bindtap="onTap" wx:for="{{array}}" wx:for-item="item" wx:for-index="_anonIdx"><text>{{item.name}}</text>
        </view>
    </view>
</block>`)

