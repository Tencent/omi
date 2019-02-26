# Omip

使用 Omi 开发小程序

> 现在，Omi 不仅仅可以开发桌面 Web、移动 H5，还可以直接开发小程序！

* Write Once, Run Anywhere
* Learn Once, Write Anywhere

![](../../assets/omip.png)

## 快速开始

```js
npm i omi-cli -g
omi init-p my-app
cd my-app
npm start
```
> node 版本要求 >= 8

把小程序目录设置到 dist 目录就可以愉快地调试了！

## 代码示例

```js
import { WeElement, define } from 'omi'
import './index.css'

define('my-counter', class extends WeElement {
  data = {
    count: 1
  }

  sub = () => {
    this.data.count--
    this.update()
  }

  add = () => {
    this.data.count++
    this.update()
  }

  render() {
    return (
      <view>
        <button onClick={this.sub}>-</button>
        <text>{this.data.count}</text>
        <button onClick={this.add}>+</button>
      </view>
    )
  }
})
```

## License

MIT © dntzhang

#### Open Source Software Licensed Under the MIT License:

[tarojs](https://github.com/NervJS/taro) 1.2.13
Copyright (c) 2019 O2Team
