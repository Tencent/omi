## 使用parcel替代webpack制作omi-tap插件

[Parcel](https://parceljs.org/) 是一个零配置的网络应用打包工具, 适用于经验不同的开发者, 它利用多核处理提供了极快的速度。对比 webpack 最大的两个亮点:

* 零配置
* 极快速

omi 相关的插件都是基于 webpack 进行开发，今天正式投入 Parcel 怀抱。

## 准备工作

通过 yarn 或 npm 安装 parcel:

```
yarn global add parcel-bundler
```
or:
```
npm install -g parcel-bundler
```

创建一个 package.json 文件:
```
yarn init -y
```
or
```
npm init -y
```
创建完的内容大概是这样:
```
{
  "name": "omi-tap",
  "version": "0.1.0",
  "description": "Support tap event in your Omi project.",
  "main": "index.js",
  "scripts": {
    "start": "parcel example/index.html --open",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["tap","omix","omi","omi-tap"],
  "author": "dntzhang",
  "license": "MIT",
  "dependencies": {},
  "devDependencies": {
    "omix": "^1.2.4",
    "babel-preset-env": "^1.6.1",
    "babel-preset-omi": "^0.1.0",
    "parcel-bundler": "^1.2.0"
  }
}
```
devDependencies是开发时候的依赖包，parcel-bundler全局安装完后，可以使用下面命令来打包:
```
parcel example/index.html --open
```
带上--open会自动打开浏览器。parcel打包可以使用js或者html为入口文件。

添加 .babelrc ,如下:
```
{
  "presets": [
    "env", "omi"
  ]
}
```

## 实现 omi-tap

```js
Omi.extendPlugin('omi-tap', function (dom, instance) {

    var x1,
        y1,
        scrollTop

    dom.removeEventListener('touchstart', dom._preTouchStart, false)
    dom.removeEventListener('touchend', dom._preTouchEnd, false)
    dom.addEventListener('touchstart', start, false)
    dom.addEventListener('touchend', end, false)

    dom._preTouchStart = start
    dom._preTouchEnd = end

    function start(evt) {
        x1 = evt.touches[0].pageX
        y1 = evt.touches[0].pageY
        scrollTop = document.body.scrollTop
    }

    function end(evt) {
        if (Math.abs(evt.changedTouches[0].pageX - x1) < 30 && Math.abs(evt.changedTouches[0].pageY - y1) < 30 && Math.abs(document.body.scrollTop - scrollTop) < 30) {
            getHandler('tap', dom, instance)(evt)
        }
    }
})

function getHandler(name, dom, instance) {
    var value = dom.getAttribute(name)
    if (value === null) {
        if (dom[name]) {
            return function (evt) {
                dom[name].bind(instance)(evt, dom)
            }
        }
        return noop
    } else {
        return function (evt) {
            instance[value].bind(instance)(evt, dom)
        }
    }
}
```

omi 的插件体系通过 `Omi.extendPlugin(pluginName, fn)`  方法实现，相当于后置处理器，插件方法会在组件 mounted/installed 之后执行。上面的 tap 的原理:

* 判断触摸前后的距离是否小于30
* 判断触摸前后的滚动条位置是否小于30

同时满足上面两个条件触发 tap 事件。

## 插件使用

``` js
npm install omix
npm install omi-tap
```

然后:

```js
import { Component } from 'omix';
import 'omi-tap';

class App extends Component {
    tapHandler(evt) {
        alert('Hello Omi + Parcel!')
    }

    render() {
        return (
            <div>
                <h1 omi-tap tap={this.tapHandler}>Hello Omi + Parcel 📦 🚀</h1>
            </div>
        )
    }
}

Omi.render(new App(),"#container");
```

## 开发调试

```
npm start
```
or
```
parcel example/index.html --open
```

# 项目源码
[https://github.com/AlloyTeam/omix/tree/master/plugins/omi-tap](https://github.com/AlloyTeam/omix/tree/master/plugins/omi-tap) 
