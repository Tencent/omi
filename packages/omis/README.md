English | [简体中文](./README.CN.md) 

# Omis

> Functional Component + Store + Scoped Style in 3KB

* Functional style but non-functional programming
* Structure-Style-Behavior Separation
* Hyperscript is visually more friendly
* Each component can have a store and be de-centralized
* Support global store to share data and update on demand
* Each component store has an update method that executes the method to customize local refresh components

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
      this.update()
    },
    sub() {
      this.count--
      this.update()
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

## Quick Start

```bash
$ npm i omi-cli -g     # install cli
$ omi init-s my-app    # init project
$ cd my-app            
$ npm start            # develop
$ npm run build        # release
```

> `npx omi-cli init-s my-app` (npm v5.2.0+)

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

### Todo

* Web Components Supporting

## License

MIT 
