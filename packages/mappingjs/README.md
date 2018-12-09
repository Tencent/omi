<p align="center"><img src="../../assets/mappingjs.png" alt="mappingjs" /></p>

## Mappingjs

> Objects mapping for javascript. [Omi MVVM](https://github.com/Tencent/omi/blob/master/tutorial/omi-mvvm.md)'s best partner.

## Install

```js
npm i mappingjs
```

## Usage


```js
class TodoItem {
  constructor(text, completed) {
    this.text = text
    this.completed = completed || false

    this.author = {
      firstName: 'dnt',
      lastName: 'zhang'
    }
  }
}


const res = mapping(new TodoItem('task'), { author: { other: 'lei' } })

deepEqual(res, {
  author: {
    firstName: 'dnt',
    lastName: 'zhang',
    other: 'lei'
  },
  completed: false,
  text: 'task'
})
```

### Auto Mapping with rule
 
<!---
### Manual mapping

```js

var A = { a: [{ name: 'abc', age: 18 }, { name: 'efg', age: 20 }], e: 'aaa' }
var B = mapping({
  from: A,
  to: { d: 'test' },
  rule: {
    a: null,
    c: 13,
    list: function () {
      return this.a.map(function (item) {
        return mapping({ from: item })
      })
    }
  }
})

deepEqual(B.a, null)
deepEqual(B.list[0], A.a[0])
deepEqual(B.c, 13)
deepEqual(B.d, 'test')
deepEqual(B.e, 'aaa')
deepEqual(B.list[0] === A.a[0], false)
```

Manual deep mapping:

```js
var A = { a: [{ name: 'abc', age: 18, obj: { f: 'a', l: 'b' } }, { name: 'efg', age: 20, obj: { f: 'a', l: 'b' } }], e: 'aaa' }
var B = mapping({
  from: A,
  rule: {
    list: function () {
      return this.a.map(function (item) {
        return mapping({
          from: item, rule: {
            obj: function () {
              return mapping({ from: this.obj })
            }
          }
        })
      })
    }
  }
})

deepEqual(A.a, B.list)
deepEqual(A.a[0].obj, B.list[0].obj)
deepEqual(A.a[0].obj === B.list[0].obj, false)
```

## Other example

```js
const testObj = {
  same: 10,
  bleh: 4,
  firstName: 'dnt',
  lastName: 'zhang',
  a: {
    c: 10
  }
}

const vmData = mapping({
  from: testObj,
  to: { aa: 1 },
  rule: {
    dumb: 12,
    func: function () {
      return 8
    },
    b: function () {
      return mapping({ from: this.a })
    },
    bar: function () {
      return this.bleh
    },
    fullName: function () {
      return this.firstName + this.lastName
    },
    'd[2].b[0]': function () {
      return this.a.c
    }
  }
})
```
-->



<!---
```js

class TodoItem {
  constructor(text, completed) {
    this.text = text
    this.completed = completed || false

    this.author = {
      firstName: 'dnt',
      lastName: 'zhang'
    }
  }
}

const res = mapping.auto(new TodoItem('task'))

deepEqual(res, {
  author: {
    firstName: "dnt",
    lastName: "zhang"
  },
  completed: false,
  text: "task"
})
```
-->

## License

MIT © [dntzhang](https://github.com/dntzhang)