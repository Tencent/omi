## What's Store?

Store is Omi's built-in centralized data warehouse, which solves and provides the following problems and capabilities:

* Component Tree Data Sharing
* Data Change Updates Dependent Components on Demand

![](https://github.com/Tencent/omi/raw/master/assets/store.jpg)

## A piece of code is completely ready for Store

```jsx
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
  static use = [
    { count: 'count' }
  ]

  add = () => this.store.add()
  sub = () => this.store.sub()

  addIfOdd = () => {
    if (this.use.count % 2 !== 0) {
      this.store.add()
    }
  }

  addAsync = () => {
    setTimeout(() => this.store.add(), 1000)
  }

  render() {
    return (
      <p>
        Clicked: {this.use.count} times
        {' '}
        <button onClick={this.add}>+</button>
        {' '}
        <button onClick={this.sub}>-</button>
        {' '}
        <button onClick={this.addIfOdd}>
          Add if odd
        </button>
        {' '}
        <button onClick={this.addAsync}>
          Add async
        </button>
      </p>
    )
  }
})

render(<my-counter />, 'body', {
  data: {
    count: 0
  },
  sub() {
    this.data.count--
  },
  add() {
    this.data.count++
  },
})
```

* Declare a dependent path by `static use'.
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

Static use:

```jsx
static use = [
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
render() {
  return (
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
  )
}
...
...
```

Without alias, you can also access it directly through `this.store.data.xxx'.

### Path hit rule

| Proxy Path | path in static use   | update |
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

  static use = [
    'menus',
    'sideBarShow',
    'lan'
  ]

  render() {
    const [menus, sideBarShow, lan] = this.use

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
