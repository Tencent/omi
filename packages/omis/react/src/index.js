import React from 'react';
import ReactDOM from 'react-dom';

import {$} from './omis/omis'
console.log($)
class Store {
  data = {
    count: 1,
    msg: 'omis',
    num: Math.random()
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
  random = () => {
    this.data.num = Math.random()
  } 
}

const Counter = $({
  render() {
    const $s = $.store
    return <>
      <button onClick={$s.sub}>-</button>
      <span>{$s.data.count}</span>
      <button onClick={$s.add}>+</button>
      <div>{Math.random()}</div>
    </>
  },
  use: ['count']
})

const App = $({
  render() {
    const $s = $.store
    return <div>
      <div>{$s.data.msg}</div>
      <button onClick={$s.random}>Click me to updateSelf-{$s.data.num}</button>
      <div>{$s.data.count}</div>
      <Counter></Counter>
    </div>
  },
  store: new Store(),
  useSelf: ['num']
})


ReactDOM.render(<App />, document.getElementById('root'));

