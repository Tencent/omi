# omi-kbone

<p align="center"><img src="https://tencent.github.io/omi/assets/snake.jpg" alt="omi-kbone" width="200"/></p>

使用 omi + [kbone](https://github.com/wechat-miniprogram/kbone) 多端开发(小程序和Web)的贪吃蛇游戏。

## 一套语法多端运行

主界面:

```jsx
import { define, h, rpx } from 'omio'
import '../game'
import './_index.css'

define('my-index', ({ store }) => (
  <div class="container">
    <h1>OMI SNAKE</h1>

    <my-game></my-game>

    <div class="ctrl">
      <div class="btn cm-btn cm-btn-dir up" onClick={store.turnUp}><i></i><em></em><span>Up</span></div>
      <div class="btn cm-btn cm-btn-dir down" onClick={store.turnDown}><i></i><em></em><span>Down</span></div>
      <div class="btn cm-btn cm-btn-dir left" onClick={store.turnLeft}><i></i><em></em><span >Left</span></div>
      <div class="btn cm-btn cm-btn-dir right" onClick={store.turnRight}><i></i><em></em><span >Right</span></div>
      <div class="btn cm-btn space" onClick={store.toggleSpeed}><i></i><span >加速/减速</span></div>
      <div class="btn reset small" onClick={store.reset}><i ></i><span >Reset</span></div>
      <div class="btn pp small" onClick={store.pauseOrPlay}><i></i><span >{store.data.paused ? 'Play' : 'Pause'}</span></div>
    </div>
  </div>
), {
    useSelf: ['paused'],
    css: ("undefined" != typeof wx && wx.getSystemInfoSync) ? '' : rpx(require('./_index.css'))
  })
```

游戏界面:

```jsx
import { define, h, rpx } from 'omio'
import './_index.css'

define('my-game', _ => (
  <div class="game">
    {_.store.data.map.map(row => {
      return <p>
        {row.map(col => {
          if (col) {
            return <b class='s'></b>
          }
          return <b></b>
        })}
      </p>
    })}
  </div>
), {
    use: ['map'],
    css: ("undefined" != typeof wx && wx.getSystemInfoSync) ? '' : rpx(require('./_index.css'))
  })
```

## 快速开始

``` bash
npx omi-cli init-kbone my-app
cd my-app
npm run mp       //开发小程序
npm run web      //开发 web
npm run build    //发布 web
```

## 目录说明

```
├─ build
│  ├─ mp     //微信开发者工具指向的目录，用于生产环境
│  ├─ web    //web 编译出的文件，用于生产环境
├─ config
├─ public
├─ scripts
├─ src
│  ├─ assets
│  ├─ components    //存放所有页面的组件
│  ├─ models        //存放所有模型
│  ├─ stores        //存放页面的 store
│  ├─ log.js        //入口文件，会 build 成  log.html
│  └─ index.js      //入口文件，会 build 成  index.html
```

## 注意事项

* 不要使用 bindtap，使用 onClick
* 图片请使用 cdn 地址或者 base64
* 如果要兼容 web，请用 HTML 和 CSS 标签，比如用 div，不用 view 等

## License

MIT 
