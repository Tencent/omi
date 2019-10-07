## What's GlobalStore?

GlobalStore is Omi's built-in centralized data warehouse, which solves and provides the following problems and capabilities:

* Component Tree Data Sharing
* Data Change Updates Dependent Components on Demand

![](https://github.com/Tencent/omi/raw/master/assets/store.jpg)

## A piece of code is completely ready for GlobalStore

```jsx
import { render, h } from 'omi'

const Counter = function (props, store, _, $) {
  return <p>
    Clicked: {$.data.count} times
    {' '}
    <button onClick={store.add}>+</button>
    <button onClick={store.sub}>-</button>
    <button onClick={store.addIfOdd}>
      Add if odd
      </button>
    <button onClick={store.addAsync}>
      Add async
      </button>
  </p>
}

Counter.use = ['count']

Counter.store = (_, $) => {
  return {
    add() {
      $.add()
    },
    sub() {
      $.sub()
    },
    addIfOdd() {
      if ($.data.count % 2 !== 0) {
        $.add()
      }
    },
    addAsync() {
      setTimeout(() => $.add(), 1000)
    }
  }
}

render(<Counter />, 'body', {
  data: {
    count: 0
  },
  sub() {
    this.data.count--
  },
  add() {
    this.data.count++
  }
})
```

* Declare a dependent path by `use'.
* `globalStore` injects all components from the root node through the third parameter of render.

Here is a complicated example of `use'.

Data of globalStore:

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

Static use:

```jsx
use = [
  'count', //Direct string, accessible through this.use[0] 
  'arr[0]', //It also supports path, which is accessible through this.use[1]
  //Support JSON
  {
    //Alias, accessible through this.use.reverseMotto
    reverseMotto: [
      'motto', //path
      target => target.split('').reverse().join('')  //computed
    ]
  },
  { name: 'arr[1]' }, //{ alias: path }，accessible through this.use.name
  {
    //alias，accessible through this.use.fullName
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
<div>
  <button onClick={this.sub}>-</button>
  <span>{this.use[0]}</span>
  <button onClick={this.add}>+</button>
  <div>
    <span>{this.use[1]}</span>
    <button onClick={this.rename}>rename</button>
  </div>
  <div>{this.use.reverseMotto}</div><button onClick={this.changeMotto}>change motto</button>
  <div>{this.use.name}</div>
  <div>{this.use[3]}</div>
  <div>
    {this.use.fullName}
    <button onClick={this.changeFirstName}>change first name</button>
  </div>
</div>
...
...
```

Without alias, you can also access it directly through `$.data.xxx'.

### Path hit rule

| Observe Path | path in use   | update |
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
const Comp = function() {
  const [menus, sideBarShow, lan] = this.using

  return (
    <div class={`list${sideBarShow ? ' show' : ''}`}>
      {menus[lan].map((menu, index) => (
        <my-list menu={menu} index={index} />
      ))}
    </div>
  )
}

Comp.use = [
  'menus',
  'sideBarShow',
  'lan'
]
```

Here is an example of using the ES2015+ Grammar `const [xx, xxx] = xxxx` for fast assignment.


## Dynamic use

If you don't want the same components to have the same dependencies, you can use dynamic use:

```js
Comp.store = _ => {
  _.use = [
    'a.b',
    'c[1].d',
    `e.f.${xxx}.d[${index}]`
  ]
}
```

Very flexible!
