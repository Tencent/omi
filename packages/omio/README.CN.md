[English](./README.md) | 简体中文

# Omio

> 兼容老浏览器的 Omi 版本(支持到IE8+和移动端浏览器)

---

## 立即使用

```bash
$ npm i omi-cli -g             
$ omi init-o my-app   
$ cd my-app           
$ npm start                     
$ npm run build               
```

### 与 omi 不同之处

omio 拥有 omi一样的语法，但是也有一些差异需要注意：

* omio 支持 `staticCss`，omi 是不支持的

`css` 和 `staticCss` 的区别是 ? 例如：

``` js
render() {
  return (
    <div>
      <my-ele name={this.name}></my-ele>
      <my-ele name={this.name}></my-ele>
      <my-ele name={this.name}></my-ele>
    </div>
  )
}
```

如上面的例子,`css`方法会渲染三次，并插入到 head，而`staticCss` 只会渲染一次。
当你 update 组件或者 setState 时候，`css`方法会渲染三次，并更新head里对应三个地方的样式，`staticCss` 不再渲染。

* Omio 不支持 slot, 请使用 `props.children` 代替，像 react 一样
* Omio 支持 store 注入，但不支持 store path updating
* Omio 不支持 render array，未来可能支持
* Omio 不支持 `fire` 触发自定义事件，可以和 react 一样使用 `props.xxx()` 去触发。Omi 同时支持 `fire` and `props.xxx()` 两种方式。


## 在 Omi 项目中使用

``` bash
npm i omio
```
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

## License

MIT © [dntzhang](https://github.com/dntzhang)
