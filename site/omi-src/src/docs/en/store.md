## What's Store?

Store is Omi's built-in centralized data warehouse, which solves and provides the following problems and capabilities:

* Component Tree Data Sharing
* Data Change Updates Dependent Components on Demand

![](https://github.com/Tencent/omi/raw/master/assets/store.jpg)

## A piece of code is completely ready for Store

```jsx
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
  use = ['count', 'adding']

  addIfOdd = () => {
    if (this.store.data.count % 2 !== 0) {
      this.store.add()
    }
  }

  addAsync = () => {
    this.store.data.adding = true
    setTimeout(() => {
      this.store.data.adding = false
      this.store.add()
    }, 1000)
  }

  render() {
    const store = this.store
    const { data, add, sub } = store
    return (
      <p>
        Clicked: {data.count} times
        {' '}
        <button onClick={add}>+</button>
        {' '}
        <button onClick={sub}>-</button>
        {' '}
        <button disabled={data.count % 2 === 0} onClick={this.addIfOdd}>
          Add if odd
        </button>
        {' '}
        <button disabled={data.adding} onClick={this.addAsync}>
          Add async
        </button>
      </p>
    )
  }
})

render(<my-counter />, 'body', new class Store {
  data = {
    count: 0,
    adding: false
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
})
```

* Declare a dependent path by `use` or `useSelf`(useSelf will update self only, exclude children components).
* `store` injects all components from the root node through the third parameter of render.

Here is a complicated example of `use'.

Data of store:

```json
{
  count: 0,
  arr: ['china', 'tencent'],
  motto: 'I love omi.',
  userInfo: {
    firstName: 'dnt',
    lastName: 'zhang',
    age: 18
  }
}
```

Use grammar:

```jsx
use = [
  'count', //Direct string, accessible through this.using[0] 
  'arr[0]', //It also supports path, which is accessible through this.using[1]
  //Support JSON
  {
    //Alias, accessible through this.using.reverseMotto
    reverseMotto: [
      'motto', //path
      target => target.split('').reverse().join('')  //computed
    ]
  },
  { name: 'arr[1]' }, //{ alias: path }，accessible through this.using.name
  {
    //alias，accessible through this.using.fullName
    fullName: [
      ['userInfo.firstName', 'userInfo.lastName'], //path array
      (firstName, lastName) => firstName + lastName //computed
    ]
  },
]
```

Let's look at the use of JSX:

```jsx
...
...
render() {
  return (
    <div>
      <button onClick={this.sub}>-</button>
      <span>{this.using[0]}</span>
      <button onClick={this.add}>+</button>
      <div>
        <span>{this.using[1]}</span>
        <button onClick={this.rename}>rename</button>
      </div>
      <div>{this.using.reverseMotto}</div><button onClick={this.changeMotto}>change motto</button>
      <div>{this.using.name}</div>
      <div>{this.using[3]}</div>
      <div>
        {this.using.fullName}
        <button onClick={this.changeFirstName}>change first name</button>
      </div>
    </div>
  )
}
...
...
```

Without alias, you can also access it directly through `this.store.data.xxx'.

### Path hit rule

| Proxy Path | path in use   | update |
| ---------- | ---------- | -------- |
| abc        | abc        | true     |
| abc[1]     | abc        | true     |
| abc.a      | abc        | true     |
| abc        | abc.a      | false   |
| abc        | abc[1]     | false   |
| abc        | abc[1].c   | false   |
| abc.b      | abc.b      | true     |

The above can be updated by hitting only one condition!

Summary: As long as the path of the injected component is equal to that declared in use or under one of the path sub-nodes declared in use, it will be updated!

### Destructuring assignment

```jsx
import { define, WeElement } from 'omi'
import '../my-list'

define('my-sidebar', class extends WeElement {
  static css = require('./_index.css')

  use = [
    'menus',
    'sideBarShow',
    'lan'
  ]

  render() {
    const [menus, sideBarShow, lan] = this.using

    return (
      <div class={`list${sideBarShow ? ' show' : ''}`}>
        {menus[lan].map((menu, index) => (
          <my-list menu={menu} index={index} />
        ))}
      </div>
    )
  }
})
```

Here is an example of using the ES2015+ Grammar `const [xx, xxx] = xxxx` for fast assignment.


## Dynamic use

If you don't want the same components to have the same dependencies, you can use dynamic use:

```js
use() {
  return [
    'a.b',
    'c[1].d',
    `e.f.${xxx}.d[${index}]`
  ]
}
```

## Functional style 

```jsx
import { define, render } from 'omi'

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

define('my-counter', ['count'], _ => (
  <div>
    <button onClick={_.store.sub}>-</button>
    <span>{_.store.data.count}</span>
    <button onClick={_.store.add}>+</button>
  </div>
))

render(<my-counter />, 'body', new Store)
```

Very flexible!
