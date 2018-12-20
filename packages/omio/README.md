English | [简体中文](./README.CN.md) 

# Omio

> Omi for old browsers(IE8+ and mobile browsers)

---

## Use immediately

```bash
$ npm i omi-cli -g             
$ omi init-o my-app   
$ cd my-app           
$ npm start                     
$ npm run build               
```

## Differences to omi

Omio has the same grammar as omi, but there are also some differences:

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
* Omio does not support `fire` custom event, you can use `props.xxx()` to trigger the custom event. Omi supports `fire` and `props.xxx()`.


## Use in omi project

``` bash
npm i omio
```

### Webpack Alias

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

## Supports IE8

```js
import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  //commented out for ie8
  //static observe = true

  data = {
    count: 1
  }

  sub = () => {
    this.data.count--
    //no observe, so call this.update for ie8
    this.update()
  }

  add = () => {
    this.data.count++
    //no observe, so call this.update for ie8
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

If you only need to be compatible with IE9 and IE9+，you can use `static observe = true`.

* Omio does not support slot, please use `props.children` instead like react 
* Omio does not support store path updating
* Omio does not support return array in the render method, each component must have a root node(todo)
* Omio does not support `fire` custom event, you can use `props.xxx()` to trigger the custom event. Omi supports `fire` and `props.xxx()`.

## License

[MIT](https://github.com/Tencent/omi/blob/master/LICENSE) © [dntzhang](https://github.com/dntzhang)
