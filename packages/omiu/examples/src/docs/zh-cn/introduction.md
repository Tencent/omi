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
omi init-u my-app   
cd my-app           
npm start                     
npm run build    
```

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