## Omis

1kb store system for React/Preact apps.

## Usage 

```jsx
import { $, render } from 'omis'

const Counter = $({
  render() {
    return <div>{$.store.data.count}</div>
  },
  use: ['count']
  //or
  //useSelf: ['count']
})

const App = $({
  render() {
    return (
      <div>
        <Counter />
      </div>
    )
  }
})

render(
  ReactDOM.render, //use Preact.render here when using preact
  <App />,
  '#root',
  {
    data: {
      count: 1
    }
  })
```

## Multi-store injection

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { $, render } from './omis/omis'

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
  useSelf: { countStore: ['num'] }
})

render(
  ReactDOM.render, //use Preact.render here when using preact
  <App />,
  '#root',
  {
    nameStore,
    countStore
  })
```
