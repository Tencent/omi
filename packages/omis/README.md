English | [简体中文](./README.CN.md) 

# Omis

> Functional Component + Store + Scoped Style in 3KB

* Functional style but non-functional programming
* Structure-Style-Behavior Separation
* Hyperscript is visually more friendly
* Each component can have a store and be de-centralized
* Stores of each component can rely on global stores and be centralized
* Each component store has an update method that executes the method to customize local refresh components

[→ Omis Codepen Demos](https://codepen.io/collection/XjLaRo/)

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
    add(e) {
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

## Develop

``` bash
npm start example-name
```

## Publish

``` bash
npm run build
```

## Todo

* Web Components Supporting

## License

MIT 
