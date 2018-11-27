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

assert.deepEqual(mapping({
  from: a,
  to: b
}), { a: 1, b: 2 })
```

Deep mapping:

```js

QUnit.test("", function (assert) {
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

  assert.deepEqual(B.a, null)
  assert.deepEqual(B.list[0], A.a[0])
  assert.deepEqual(B.c, 13)
  assert.deepEqual(B.d, 'test')
  assert.deepEqual(B.e, 'aaa')
  assert.deepEqual(B.list[0] === A.a[0], false)
})
```

Deep deep mapping:

```js

QUnit.test("", function (assert) {
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

  assert.deepEqual(A.a, B.list)
  assert.deepEqual(A.a[0].obj, B.list[0].obj)
  assert.deepEqual(A.a[0].obj === B.list[0].obj, false)
})
```



## License

MIT © [dntzhang](https://github.com/dntzhang)