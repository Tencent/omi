# Omi 4.0 - 合一  (Coming soon....)

> 下一代 Web 框架，去万物糟粕，合精华为一。

### 特性

- 0.5 KB 的代码尺寸，比小更小
- 顺势而为，顺从浏览器 API 设计
- Webcomponents + JSX 相互融合为一个框架 Omi
- JSX 是开发体验最棒(智能提示)，语法噪音最少的 UI 表达式
- 每一个组件拥有 update 方法自由渲染最佳更新视图的时机，功耗低，自由度高，性能卓越
- 局部 CSS 最佳解决方案(Shadow DOM)，社区为局部 CSS 折腾了不少框架，Shadow DOM Style 是最完美的方案
- WeStore 体系，99% 的项目不需要什么时间旅行(redux),请不要上来就 redux，Omi 自带的 store 体系可以满足所有项目，也可以时间旅行


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
import { WeElement } from '../../src/omi'

class HelloElement extends WeElement {

    static get observedAttributes() { 
        return ['prop-from-parent']
    }

    onClick = (evt) => {
        console.log(this)
        evt.stopPropagation()
    }

    css() {
        return `
         div{
             color: red;
         }`
    }

    render() {
        console.log(this.props.propFromParent)
        return (
            <div onClick={this.onClick}>
                Hello {this.props.msg} {this.props.propFromParent}
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
    
    onClick = (evt)=> {
       
    }

    css() {
        return `
         div{
             color: green;
         }`
    }

    render() {
        return (
            <div onClick={this.onClick}>
                Hello {this.props.name}
                <hello-element msg="Omi v4.0"></hello-element>
            </div>
        )
    }
}


customElements.define('my-app', MyApp)

render(<my-app name='WeElement'></my-app>, 'body')
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
import './hello-element'
//typeof cssStr is string
import cssStr from './_index.css' 

class MyApp extends WeElement {

  css() {
    return cssStr
  }

  render() {
      return (
          <div onClick={this.onClick}>
              Hello {this.props.name}
              <hello-element msg="Omi v4.0"></hello-element>
          </div>
      )
  }
}
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

``` bash
npm i omi
```

or get it from CDN:

* [https://unpkg.com/omi@4.0.0/dist/omi.min.js](https://unpkg.com/omi@4.0.0/dist/omi.min.js)
* [https://unpkg.com/omi@4.0.0/dist/omi.js](https://unpkg.com/omi@4.0.0/dist/omi.js)

## Links

- [westore](https://preactjs.com/)
- [omijs.org](http://omijs.org/)

## License

MIT © [dntzhang](https://github.com/dntzhang)
