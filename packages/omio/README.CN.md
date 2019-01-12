[English](./README.md) | 简体中文

# Omio

> 兼容老浏览器的 Omi 版本(支持到IE8+和移动端浏览器)

---

## 立即使用

```bash
$ npm i omi-cli -g             
$ omi init my-app   
$ cd my-app           
$ npm start                     
$ npm run build               
```

要求  omi-cli v3.3.0+。

### 与 omi 不同之处

omio 拥有 omi一样的语法，但是也有一些差异需要注意：

* Omio 不支持 slot, 请使用 `props.children` 代替，像 react 一样，omi 也支持 `props.children` 


## 在 Omi 项目中使用

``` bash
npm i omio
```

## Omiu

> Omi ui.

Simple UI framework, compatible with omi and omio.

* [English Docs](https://tencent.github.io/omi/packages/omiu/examples/build/index.html)
* [中文文档](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html)

需要注意，Omio 的 UI 组件的 API 设计不要和 DOM 的 API（属性和方法） 重复，因为 omi 组件就是 DOM，为了让 omio 的组件能够无缝过渡到 omi 中使用需要记住这一点。

### Webpack Alias

如果你想在已经存在的 omi 项目下使用 omio，你可以使用下面配置，不用任何代码更改:

```js
module.exports = {
  //...
  resolve: {
    alias: {
      omi: 'omio'
    }
  }
};
```


## 兼容 IE8

```js
import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  //ie8 不能使用 observe
  //static observe = true

  data = {
    count: 1
  }

  sub = () => {
    this.data.count--
    //手动 update
    this.update()
  }

  add = () => {
    this.data.count++
    //手动 update
    this.update()
  }

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.data.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body')
```

如果你不需要兼容 IE8，只需要兼容 IE9+，你可以使用 `static observe = true` 进行数据监听自动更新视图。

## 相关文章

* [Omio 兼容 IE8 踩坑之路](https://github.com/Tencent/omi/blob/master/tutorial/omio.cn.md)

## License

MIT © [dntzhang](https://github.com/dntzhang)
