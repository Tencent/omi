# Omi 4.0 - 合一  

(Coming soon....)

> 下一代 Web 框架，去万物糟粕，合精华为一。

### 特性

- 0.5 KB 的代码尺寸，比小更小
- 顺势而为，顺从浏览器 API 设计
- Webcomponents + JSX 相互融合为一个框架 Omi
- JSX 是开发体验最棒(智能提示)，[语法噪音最少](https://github.com/facebook/jsx#why-not-template-literals)的 UI 表达式
- 每一个组件拥有 update 方法自由渲染最佳更新视图的时机，功耗低，自由度高，性能卓越
- 局部 CSS 最佳解决方案(Shadow DOM)，社区为局部 CSS 折腾了不少框架，Shadow DOM Style 是最完美的方案
- WeStore 体系，99% 的项目不需要什么时间旅行,请不要上来就 redux，Omi store 体系可以满足所有项目，也能时间旅行
- 可以看看[Facebook React 和 Web Components对比优势](https://www.cnblogs.com/rubylouvre/p/4072979.html)，Omi融合了他们各自的有点，而且给开发者自由的选择喜爱的方式

---

- [Getting Started](#getting-started)
	- [Hello Omi](#hello-omi)
	- [Lifecycle](#lifecycle)
- [Install](#install)
- [Links](#links)
- [License](#license)


## Getting Started

### Hello Omi

先创建一个自定义元素:

```js
import { WeElement } from 'omi'

class HelloElement extends WeElement {

    static get props(){
        return ['prop-from-parent']
    }

    onClick = (evt) => {
        console.log(this)
        //trigger CustomEvent
        this.fire('abc', { name : 'dntzhang', age: 12 })
        evt.stopPropagation()
    }

    css() {
        return `
         div{
             color: red;
             cursor: pointer;
         }`
    }

    render(props) {
        return (
            <div onClick={this.onClick}>
                Hello {props.msg} {props.propFromParent}
                <div>Click Me!</div>
            </div>
        )
    }
    
}

customElements.define('hello-element', HelloElement)
```

使用该元素:

``` js
import { render, WeElement } from 'omi'
import './hello-element'

class MyApp extends WeElement {

    onClick = (evt) => {

    }

    onAbc = (evt) => {
        this.data.abc = ' by ' + evt.detail.name
        this.update()   
    }

    install () {
        this.data.abc = 'abc'
        this.data.passToChild = '123'
    }

    installed(){
        this.data.passToChild = '12345'
        this.data.abc = 'abcde'
        this.update()    
    }

    css() {
        return `
         div{
             color: green;
         }`
    }

    render(props, data) {
        return (
            <div onClick={this.onClick}>
                Hello {props.name} {data.abc}
                <hello-element onAbc={this.onAbc} prop-from-parent={data.passToChild} msg="WeElement"></hello-element>
            </div>
        )
    }
}


customElements.define('my-app', MyApp)

render(<my-app name='Omi v4.0'></my-app>, 'body')
```

告诉 Babel to 把 JSX 转化成 Omi.h() 的调用:

``` json
{
    "presets": ["env", "omi"]
}
```

需要安装下面两个 npm 包支持上面的配置:

``` bash
"babel-preset-env": "^1.6.0",
"babel-preset-omi": "^0.1.1",
```

### Scoped CSS


如果不想把 css 写在 js 里，你可以使用 [to-string-loader](https://www.npmjs.com/package/to-string-loader), 看 [omi-cli config](https://github.com/AlloyTeam/omi-cli/blob/master/template/app/config/webpack.config.dev.js#L156-L162)：

``` js
{
    test: /[\\|\/]_[\S]*\.css$/,
    use: [
        'to-string-loader',
        'css-loader'
    ]
}
```

如果你的 css 文件以 `_` 开头, css 会使用 to-string-loader. 如：

``` js
import { render, WeElement } from 'omi'
//typeof cssStr is string
import cssStr from './_index.css' 

class MyApp extends WeElement {

  css() {
    return cssStr
  }
  ...
  ...
  ...
```


### Lifecycle

| Lifecycle method            | When it gets called                              |
|-------------------------------|--------------------------------------------------|
| `install`        | before the component gets mounted to the DOM     |
| `installed`         | after the component gets mounted to the DOM      |
| `uninstall`      | prior to removal from the DOM                    |
| `beforeUpdate`       | before `render()`                                |
| `afterUpdate`        | after `render()`                                 |

## Install

Get javascript file from Github:

* [omi/master/dist](https://github.com/Tencent/omi/tree/master/dist)
* [omi.js](https://github.com/Tencent/omi/blob/master/dist/omi.js)
* [omi.min.js](https://raw.githubusercontent.com/Tencent/omi/master/dist/omi.min.js)

## Links

- [westore](https://github.com/dntzhang/westore)
- [omijs.org](http://omijs.org/)

## License

MIT © [dntzhang](https://github.com/dntzhang)
