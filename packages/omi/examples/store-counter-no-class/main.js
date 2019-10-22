import { render, define } from '../../src/omi'
import store from './store'

define('my-counter', _ => (
  <div>
    <button onClick={_.store.sub}>-</button>
    <span>{_.store.data.count}</span>
    <button onClick={_.store.add}>+</button>
  </div>
), {
    use: ['count'],
    //or using useSelf, useSelf will update self only, exclude children components
    //useSelf: ['count'],
    css: `span { color: red; }`,
    installed() {
      console.log('installed')
    }
  })

render(<my-counter />, 'body', store)
