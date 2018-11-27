QUnit.test("", function (assert) {
  var a = { a: 1 }
  var b = { b: 2 }

  assert.deepEqual(mapping({
    from: a,
    to: b
  }), { a: 1, b: 2 })
})


QUnit.test("", function (assert) {
  var a = { a: 1 }

  assert.deepEqual(mapping({
    from: a
  }), { a: 1 })
})


QUnit.test("", function (assert) {
  var a = { a: 1 }
  var b = mapping({
    from: a
  })
  assert.deepEqual(b === a, false)
})


QUnit.test("", function (assert) {
  var a = { a: { b: 2 } }
  var b = mapping({
    from: a,
    rule: {
      a: function () {
        return mapping({ from: this.a })
      }
    }
  })

  assert.deepEqual(b.a, a.a)

  assert.deepEqual(b.a === a.a, false)
})

QUnit.test("", function (assert) {
  var A = { a: { b: { c: 2 } } }
  var B = mapping({
    from: A,
    rule: {
      a: function () {
        return mapping({
          from: this.a, rule: {
            b: function () {
              return mapping({ from: this.b })
            }
          }
        })
      }
    }
  })

  assert.deepEqual(B.a.b, A.a.b)

  assert.deepEqual(B.a.b === A.a.b, false)
})


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