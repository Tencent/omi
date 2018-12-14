English | [简体中文](./README.CN.md) 

# Omio

> Omi for old browsers(IE9+ and mobile browsers)

---

## Install

``` bash
npm i omio
```

## Webpack Alias

If you want to use omio under existing omi projects, no code changes are required through the following configuration:

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

## Differences to omi

* Omio supports `staticCss`, omi does not support it. 

What's the difference between the `css` and the `staticCss` method? For example：

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

The `css` method will render three times to html head element, the `staticCss` will render one times only !
When you update the component `css` method will rerender, but the `staticCss` will not rerender.

* Omio does not support slot, please use `props.children` instead like react 
* Omio does not support store path updating
* Omio does not support return array in the render method, each component must have a root node(todo)

## License

MIT © [dntzhang](https://github.com/dntzhang)
