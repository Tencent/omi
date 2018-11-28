## Mappingjs

> Objects mapping for javascript. [Omi MVVM](https://github.com/Tencent/omi/blob/master/tutorial/omi-mvvm.md)'s best partner.

## Install

```js
npm i mappingjs
```

## Usage

```js
var a = { a: 1 }
var b = { b: 2 }

deepEqual(mapping({
  from: a,
  to: b
}), { a: 1, b: 2 })
```

### Auto Mapping


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

### Auto Mapping with init value

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

const res = mapping.auto(new TodoItem('task'), { author: { a: 1 } })

deepEqual(res, {
  author: {
    firstName: "dnt",
    lastName: "zhang",
    a: 1
  },
  completed: false,
  text: "task"
})
```

### Deep mapping

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

### Deep deep mapping

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

## License

MIT © [dntzhang](https://github.com/dntzhang)