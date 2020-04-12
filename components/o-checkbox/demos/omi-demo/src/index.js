import { define, render } from 'omi'
import '@omiu/checkbox'

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

  onChange = (evt) => {
    console.log(evt.detail)
  }
}

define('my-counter', _ => (
  <div>
    <button onClick={_.store.sub}>-</button>
    <span>{_.store.data.count}</span>
    <button onClick={_.store.add}>+</button>

    <div>
      <o-checkbox label="Label"></o-checkbox>
      <br />

      <o-checkbox checked label="checked"></o-checkbox>
      <br />

      <o-checkbox onChange={_.store.onChange} indeterminate label="indeterminate"></o-checkbox>
      <br />

      <o-checkbox disabled label="disabled"></o-checkbox>
      <br />
      <o-checkbox disabled checked label="disabled checked"></o-checkbox>
    </div>
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

render(<my-counter />, 'body', new Store)
