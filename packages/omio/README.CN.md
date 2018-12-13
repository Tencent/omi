[English](./README.md) | 简体中文

# Omio

> 兼容老浏览器的 Omi 版本(支持到IE9+和移动端浏览器)

---

## Install

``` bash
npm i omi
```
## Webpack Alias

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

### 与 omi 不同之处

omio 支持 `staticCss`，omi 是不支持的。`css` 和 `staticCss` 的区别是 ? 例如：

``` js
render() {
        return (
		<div>
			<Hello name={this.name}></Hello>
			<Hello name={this.name}></Hello>
			<Hello name={this.name}></Hello>
		</div>
		)
    }
```

如上面的例子,`css`方法会渲染三次，并插入到 head，而`staticCss` 只会渲染一次。
当你 update 组件或者 setState 时候，`css`方法会渲染三次，并更新head里对应三个地方的样式，`staticCss` 不再渲染。

## License

MIT © [dntzhang](https://github.com/dntzhang)
