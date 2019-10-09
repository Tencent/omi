import React from 'react';
import ReactDOM from 'react-dom';

import { $ } from './omis/omis'

const countStore = new class Store {
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

const nameStore = new class Store {
  data = {
    name: 'hello'
  }
  rename = () => {
    console.log(123)
    this.data.name = 'bcd'
  }
}

const Counter = $({
  render() {
    const $s = $.store.countStore
    const $ns = $.store.nameStore
    return <>
      <button onClick={$s.sub}>-</button>
      <span>{$s.data.count}</span>
      <button onClick={$s.add}>+</button>
      <div>{Math.random()}</div>
      <div onClick={$ns.rename}>{$ns.data.name}</div>
    </>
  },
  use: {
    countStore: ['count'],
    nameStore: ['name']
  }
})

const App = $({
  render() {
    const $s = $.store.countStore
    return <div>
      <div>{$s.data.msg}</div>
      <button onClick={$s.random}>Click me to updateSelf-{$s.data.num}</button>
      <div>{$s.data.count}</div>
      <Counter></Counter>
    </div>
  },
  store: {
    nameStore,
    countStore
  },
  useSelf: { countStore: ['num'] }
})


ReactDOM.render(<App />, document.getElementById('root'));

