# 如何对 omi 组件进行测试

关于 OMI 组件测试，前期技术参考过 React 及 Vue 组件库的单元测试流程由于生态部分有部分不太兼容，于是换了思路去看基于webcomponent 的技术生态，想去看看有没有相关的组件测试之类的东西。webcomponent 本身就应该与框架无关，Omi 组件开发测试的方案主要参考了 Lit 框架生态中，对于 webcomponent 的的测试方案于是便尝试使用 `@web/test-runner + @open-wc/testing ` 的技术栈进行测试.

## 安装测试工具 

```js
npm i -D @open-wc/testing@next
```
### 测试组件的挂载情况

第一部分也就是说测试组件在实际使用过程中，props 属性是否全部被挂载到 webcomponent 组件上，
方案基本为使用 @open-wc/testing 提供的 fixture, html 模块对 webcomponent 进行渲染，Chai 用于断言,使用 expect 对产物进行判断是否与期望一致（CSS Style, Attribute Props 等）

webcomponent 的shadowDom 可以被 

```js
const el = await fixture(html` <o-button>Default</o-button> `) 
```

解析出内部的 html，再通过 shadowRoot 使用 querySelector() 找到你要测试部分，通过判断其 classList 和节点是否存在以及属性值可以判断是否成功渲染。

以 button 组件的单元测试为例

```js
import { html, fixture, expect } from '@open-wc/testing'

import '../src/index.esm.js'

const defaultProps = {
  plain: false,
  round: false,
  circle: false,
  loading: false,
  disabled: false,
  autofocus: false,
  nativeType: 'button',
  block: false,
}

describe('Testing o-button', () => {
  it('tests button with default props', async () => {
    const el = await fixture(html` <o-button>Default</o-button> `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(classList.includes('o-button')).to.be.true
  })

  it('tests setting type', async () => {
    const el = await fixture(html`
      <o-button type="primary">Primary</o-button>
    `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(classList.includes('o-button-primary')).to.be.true
  })

  it('tests setting disabled', async () => {
    const el = await fixture(html` <o-button disabled>Disabled</o-button> `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(button.getAttribute('disabled')).to.equal('')
    expect(classList.includes('is-disabled')).to.be.true
  })

  it('tests setting plain', async () => {
    const el = await fixture(html` <o-button plain>Plain</o-button> `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(classList.includes('is-plain')).to.be.true
  })

  it('tests setting size', async () => {
    const el = await fixture(html` <o-button size="medium">Medium</o-button> `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(classList.includes('o-button-medium')).to.be.true
  })

  it('tests setting round', async () => {
    const el = await fixture(html` <o-button round>Round</o-button> `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(classList.includes('is-round')).to.be.true
  })

  it('tests setting circle', async () => {
    const el = await fixture(html` <o-button circle>Circle</o-button> `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(classList.includes('is-circle')).to.be.true
  })

  it('tests setting block', async () => {
    const el = await fixture(html` <o-button block>Block</o-button> `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(classList.includes('is-block')).to.be.true
  })

  it('tests setting loading', async () => {
    const el = await fixture(html` <o-button loading>Loading</o-button> `)
    const svg = el.shadowRoot.querySelector('svg')
    expect(svg).to.not.be.null
  })

  it('passes the a11y audit', async () => {
    const el = await fixture(html` <o-button></o-button> `)
    expect(el).shadowDom.to.be.accessible()
  })
})

```
