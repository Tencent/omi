# Comi - 小程序 markdown 渲染和代码高亮解决方案

Comi 读 ['kəʊmɪ]，类似中文 科米，是腾讯 Omi 团队开发的小程序代码高亮和 markdown 渲染组件。

<img src="https://github.com/Tencent/omi/raw/master/assets/comi.jpg" width="320">

### 体验

![](https://github.com/Tencent/omi/raw/master/assets/omi-cloud.jpg)

Comi 基于下面的 5 个组件进行开发：

* prismjs
* wxParse
* remarkable
* html2json
* htmlparser

先看 Comi 使用，再分析原理。

## 使用

先拷贝 [此目录](https://github.com/Tencent/omi/tree/master/packages/comi/mp/comi) 到你的项目。

js:

```js
const comi = require('../../comi/comi.js');

Page({
  onLoad: function () {
    comi(`你要渲染的 md！`, this)
  }
})
```

wxml:

```html
<include src="../../comi/comi.wxml" />
```

wxss:

```css
@import "../../comi/comi.wxss";
```

简单把！

### 在 omip 中使用

先拷贝 [此目录](https://github.com/Tencent/omi/tree/master/packages/comi/omip/src/components/comi) 到你的项目。

js:

```jsx
import { WeElement, define } from 'omi'
import './index.css'
import comi from '../../components/comi/comi'

define('page-index', class extends WeElement {

  install() {
    comi(`你要渲染的 md`, this.$scope)
  }

  render() {
    return (
      <view>
        <include src="../../components/comi/comi.wxml" />
      </view>
    )
  }
})
```

css:

```css
@import '../../components/comi/comi.wxss';
```

## 原理

在开发 Comi 之前，我们进行了预研，是否有必要造这个轮子。

### 代码高亮预研

* wxParse 只是用标签包括代码，并未处理代码转成 WXML，所以渲染出的代码是没有颜色
* 老牌的 highlightjs 没有 WXML 对应的方案
* 老牌的 highlightjs 对 JSX 高亮支持太差
* prismjs 是 react 官方使用的高亮插件，对 JSX 支持高亮很好
* prismjs 支持几乎所有的语言，并且支持自定义扩展语言
* prismjs 拥有 Line Highlight 插件（目前还未移植到 Comi）

综合上面信息，决定基于 prismjs 二次开发。

### markdown 渲染预研

* wxParse 老牌的渲染组件，支持 markdown
* wxParse 内置的 showdownjs 不满足代码高亮的格式需求（比如语言种类也会生成一个标签，当然可以通过 wxss 隐藏）
* 小程序基础库 1.4.0 开始支持 `rich-text` 组件展示富文本，但是格式需要转成 json
* 高性能 remarkable，Facebook 和 Docusaurus 都在使用，支持 md 语法修改和扩展

```html
<rich-text nodes="{{nodes}}" bindtap="tap"></rich-text>
```

```js
Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
  },
  tap() {
    console.log('tap')
  }
})
```

综合上面信息，放弃 rich-text，决定基于 wxParse + remarkable 二次开发，移除 showdownjs。Comi 需要 remarkable 的高性能和灵活性。markdown 会持久化存在 db， 在小程序内运行时转换成 wxml，所以对性能还是有一定要求。

### 劫持 prismjs tokens

```js
 tokens: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
    _.hooks.run('after-tokenize', env);

		for (var i = 0, len = env.tokens.length; i < len; i++) {
      var v = env.tokens[i]
      if (Object.prototype.toString.call(v.content) === '[object Array]') {
        v.deep = true
        this._walkContent(v.content)
      }
    }
    return env.tokens
  },
```

这段代码增加 tokens 方法到 prismjs 中，原库自带的 prism.highlight 的会把 tokens 转成 html，因为我们的目标的 wxml，所以这里提前把 tokens
作为方法返回值。当然还做了一件事，就是扩展了 token item 的 deep 属性来决定是否需要继续向下遍历生成 wxml。

原始的 jsx:

```js
render() {
    const { tks } = this.data
    return (
      <view class='pre language-jsx'>
        <view class='code'>
          {tks.map(tk => {
            return tk.deep ? <text class={'token ' + tk.type}>{
              tk.content.map(stk => {
                return stk.deep ? stk.content.map(sstk => {
                  return <text class={'token ' + sstk.type}>{sstk.content || sstk}</text>
                }) : <text class={'token ' + stk.type}>{stk.content || stk}</text>
              })}</text> : <text class={'token ' + tk.type}>{tk.content || tk}</text>
          })}
        </view>
      </view>
    )
  }
```

jsx 编译出生成的 wxml，把这段 wxml 嵌入到 wxparse 里:

```html
<!-- 千万 不要格式化下面的 wxml，不然 text 嵌套 text 导致换行全部出来了 -->
<template name="wxParseCode">
  <view class="pre language-jsx">
      <view class="code">
          <block wx:for="{{item.tks}}" wx:for-item="tk">
              <block wx:if="{{tk.deep}}"><text class="{{'token ' + tk.type}}"><block wx:for="{{tk.content}}" wx:for-item="stk"><block wx:if="{{stk.deep}}"><text class="{{'token ' + sstk.type}}" wx:for="{{stk.content}}" wx:for-item="sstk">{{sstk.content || sstk}}</text>
              </block>
              <block wx:else><text class="{{'token ' + stk.type}}">{{stk.content || stk}}</text>
              </block>
          </block>
          </text>
  </block>
  <block wx:else><text class="{{'token ' + tk.type}}">{{tk.content || tk}}</text>
  </block>
  </block>
  </view>
  </view>
</template>
```

这段 wxml 不能进行格式化美化，不然多出许多换行符，因为 text 嵌套 text 会保留换行符！！

修改 wxparse 里的分支逻辑：

```html
<block wx:elif="{{item.tagType == 'block'}}">
  <view class="{{item.classStr}} wxParse-{{item.tag}}" style="{{item.styleStr}}">
    <block wx:if="{{item.tag == 'pre'}}">
        <template is="wxParseCode" data="{{item}}" />
    </block>
    <block wx:elif="{{item.tag != 'pre'}}" >
      <block wx:for="{{item.nodes}}" wx:for-item="item" wx:key="">
        <template is="wxParse1" data="{{item}}" />
      </block>
    </block>
  </view>
</block>
```

当 `item.tag` 为 `pre` 的时候使用 wxParseCode 模板，数据传入 item。item 的数据从哪里来？

先修改 md 渲染器为 Remarkable:


```js
} else if (type == 'md' || type == 'markdown') {
  var converter = new Remarkable()
  var html = converter.render(data)
  transData = HtmlToJson.html2json(html, bindName);
}
```

使用上面的 prism.tokens 计算出代码片段的 tokens，用户 wxparse 的模板渲染：

```js
function transPre(transData) {
  transData.nodes.forEach((node, index) => {
    if (node.tag == 'pre') {
      var lan = 'markup'
      if (node.nodes[0].classStr) {
        lan = node.nodes[0].classStr.split(' ')[0].replace('language-', '')
      }
      var tks = prism.tokens(node.nodes[0].nodes[0].text, prism.languages[lan], lan)
      transData.nodes[index].tks = tks
    }
  })
}
```