import { define, render } from '../../src/omi'

class Store {
  data = {
    count: 1
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
}

define('my-counter', _ => {
  console.log(_.usingSelf)
  return <div>
    <button onClick={_.store.sub}>-</button>
    <span>{_.store.data.count}</span>
    <button onClick={_.store.add}>+</button>
    <div>Double: {_.usingSelf.doubleCount}</div>
  </div>
}, {
  useSelf: [
      'count',
      {
        doubleCount: [
          'count',
          count => count * 2
        ]
      }],
    //or using useSelf, useSelf will update self only, exclude children components
    //useSelf: ['count'], 
    css: `span { color: red; }`,
    installed() {
      console.log('installed')
    }
  })

render(<my-counter />, 'body', new Store)