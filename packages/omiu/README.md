# Omiu

> Omi ui.

Simple UI framework, compatible with omi and omio(IE8+), using the design style of Wechat 7.0.

* [English Docs](https://tencent.github.io/omi/packages/omiu/examples/build/index.html)
* [中文文档](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html)

## Use it immediately

```
npm i omi-cli -g             
omi init my-app   
cd my-app           
npm start                     
npm run build    
```

> `npx omi-cli init my-app` is also supported(npm v5.2.0+).

## Use it in existing project

```js
npm i omiu
```

```js
import { WeElement, define, render } from 'omi'
import 'omiu/button'

define('my-app', class extends WeElement {
  onClick = () => {
    console.log('Hello omiu!');
  }

  render() {
    return (
      <o-button onClick={this.onClick}>I am button.</o-button>
    )
  }
})

render(<my-app />, 'body')
```

## Development 

```bash
npm install
cd examples
npm install
npm start
```