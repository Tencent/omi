## Omiu 

Omiu 是 Omi 官方 UI 组件库，基于 Omio(IE8+) 且兼容 Omi,使用微信 7.0 设计风格。

[→ Omiu Docs && REPL](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html)

## 色彩

|  **颜色**  | **意义**  |
| ------------- |:-------------:|
| #07C160  | 尊贵活力绿 | 
| #171717  | 沉稳典雅黑 |   
| #FEFEFE  | 清新脱俗白 |   
| #F95050  | 气质醒目红 |   
| #ECECEC  | 迷惘淡泊灰 |   

## 新项目快速使用

```
npm i omi-cli -g             
omi init my-app   
cd my-app           
npm start                     
npm run build    
```

> `npx omi-cli init my-app` 也支持(要求 npm v5.2.0+)

## 现有项目使用

```js
npm i omiu
```

```js
import { WeElement, define, render } from 'omi'
//node modules 下的 omiu 组件都是 E6+,你需要把 node modules 下的 js 也设置成经过 babel 或 ts 编译才能正常跑起来
import 'omiu/button'

//或者导入所有组件，node modules 的 omi.js 是 ES5 的，不需要额外配置
//import 'omiu'

define('my-app', class extends WeElement {
  onClick = () => {
    console.log('Hello omiu!');
  }

  render() {
    return (
      <o-button onClick={this.onClick}>按钮</o-button>
    )
  }
})

render(<my-app />, 'body')
```
