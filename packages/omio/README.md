English | [简体中文](./README.CN.md) | [한국어](./README.KR.md)

# Omio

> Omi for old browsers(IE8+ and mobile browsers)

---

## Use immediately

```bash
$ npm i omi-cli -g             
$ omi init my-app   
$ cd my-app           
$ npm start                     
$ npm run build               
```

Required omi-cli v3.3.0+.

## Differences to omi

Omio has the same grammar as omi, but there are also some differences:

* Omio does not support slot, please use `props.children` instead like react 
* Omio does not support store path updating


## Use in omi project

``` bash
npm i omio
```

## Omiu

> Omi ui.

Simple UI framework, compatible with omi and omio.

* [English Docs](https://tencent.github.io/omi/packages/omiu/examples/build/index.html)
* [中文文档](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html)

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

## Support IE8

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

## License

[MIT](https://github.com/Tencent/omi/blob/master/LICENSE) © [dntzhang](https://github.com/dntzhang)
