## Omiu 

Omiu 是 Omi 官方 UI 组件库，基于 Omio(IE8+) 且兼容 Omi,使用微信 7.0 设计风格。

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
import 'omiu/button'

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

由于发布的 dist `omiu/button` 等其他组件都是 E6+ 写的，所以你需要把 node modules 下的 js 也设置成经过 babel 或 ts 编译才能正常跑起来。或者直接导入所有：

```js
import 'omiu/dist/omiu.js'
```