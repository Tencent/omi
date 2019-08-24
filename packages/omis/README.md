English | [简体中文](./README.CN.md) 

# Omis

> Functional Component + Store + Scoped Style + Web Components in tiny size

* Functional style but non-functional programming
* Structure-Style-Behavior Separation
* Scoped style supporting
* Web Components supporting
* Hyperscript is visually more friendly
* Each component can have a store and be de-centralized
* Support global store to share data and update on demand
* Each component store has an update method that executes the method to customize local refresh components
* [Mini Program(小程序) supporting](https://github.com/Tencent/omi/tree/master/packages/omi-kbone)

- [→ Omis Codepen Demos](https://codepen.io/collection/XjLaRo/)
- [→ Docs](https://tencent.github.io/omi/site/omis/index.html)
- [→ Omisu Button Codepen](https://codepen.io/dntzhang-the-typescripter/pen/eqJNyy) & [→ Omisu Button Source](https://github.com/Tencent/omi/blob/master/packages/omisu/src/button/index.tsx#L8-L31)

## Usage

```bash
npm i omis
```

```jsx
import { render, h } from 'omis'

const Counter = (props, store) => {
  return (
    <div>
      <button onClick={store.sub}>-</button>
      <span>{store.count}</span>
      <button onClick={store.add}>+</button>
    </div>
  )
}

Counter.store = _ => {
  return {
    count: 1,
    add() {
      this.count++
      _.update()
    },
    sub() {
      this.count--
      _.update()
    }
  }
}

Counter.css = `
span{
  color: red;
}
`

render(<Counter />, 'body')
```

## Description of parameters

```jsx
const Comp = (props, store, _, $) => {

}

Comp.store = (_, $) => {

}
```

* `_` represents `component`
* `$` represents `globalStore`

## Quick Start

```bash
$ npm i omi-cli -g     # install cli
$ omi init-s my-app    # init project
$ cd my-app            
$ npm start            # develop
$ npm run build        # release
```

> `npx omi-cli init-s my-app` (npm v5.2.0+)

## Web Components

```jsx
import { define } from 'omis'

const HelloMessage = (props, store) => {
  return (
    <div onClick={store.clickHandler} >
      <div>Hello {props.msg}</div>
      <div>{props.user.name}</div>
      <div>{props.user.age}</div>
    </div>
  )
}

HelloMessage.css = `div{
	color: red;
}`

HelloMessage.store = _ => {
  return {
    clickHandler() {
      _.props.onMyEvent && _.props.onMyEvent(123)
    }
  }
}

HelloMessage.propTypes = {
  msg: String,
  user: Object
}

define('hello-msg', HelloMessage)
```

Then you can use `<hello-msg></hello-msg>` anywhere:

```html
<hello-msg msg="Omis" user="{name:'dntzhang', age: 18}"></hello-msg>

<script>
  var ele = document.querySelector('hello-msg')

  ele.addEventListener('myEvent', function(evt){
    console.log(evt)
  })
</script>
```

## Contribution

### Develop

``` bash
npm start example-name
```

### Publish

``` bash
npm run build
```

### Testing

``` bash
npm run test
```

## License

MIT 
