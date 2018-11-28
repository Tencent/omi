QUnit.test("", function (assert) {
  var A = { a: 1 }
  var B = { b: 2 }

  assert.deepEqual(mapping({
    from: A,
    to: B
  }), { a: 1, b: 2 })
})

QUnit.test("", function (assert) {
  var A = { a: 1 }
  var B = { b: 2 }

  assert.deepEqual(mapping({
    from: A,
    to: B,
    rule: {
      'aa.bb': function () {
        return this.a
      }
    }
  }), { a: 1, b: 2, aa: { bb: 1 } })
})

QUnit.test("", function (assert) {
  var A = { a: 1 }
  var B = { b: 2 }

  assert.deepEqual(mapping({
    from: A,
    to: B,
    rule: {
      'aa.bb': function () {
        return this.a
      },
      'cc[2].bb': function () {
        return this.a
      }
    }
  }), { a: 1, b: 2, aa: { bb: 1 }, cc: [undefined, undefined, { bb: 1 }] })
})


QUnit.test("", function (assert) {
  var A = { a: 1 }

  assert.deepEqual(mapping({
    from: A
  }), { a: 1 })
})


QUnit.test("", function (assert) {
  var A = { a: 1 }
  var B = mapping({
    from: A
  })
  assert.deepEqual(B === A, false)
})


QUnit.test("", function (assert) {
  var A = { a: { b: 2 } }
  var B = mapping({
    from: A,
    rule: {
      a: function () {
        return mapping({ from: this.a })
      }
    }
  })

  assert.deepEqual(B.a, A.a)

  assert.deepEqual(B.a === A.a, false)
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


QUnit.test("", function (assert) {
  let id = 0

  class TodoItem {
    constructor(text, completed) {
      this.id = id++
      this.text = text
      this.completed = completed || false

      this.author = {
        firstName: 'dnt',
        lastName: 'zhang'
      }
    }
  }

  class TodoList {
    constructor(items) {
      this.items = items || []
      this.ee = 111
    }
  }

  const list = new TodoList([
    new TodoItem('task1'),
    new TodoItem('task2'),
    new TodoItem('task3'),
    123,
    [2, 3, 4],
    [{ aa: 1 }],
    [{ "aa": { bb: 2 } }]
  ])

  const res = mapping.auto(list)

  assert.deepEqual(res, {
    "items": [
      {
        "id": 0,
        "text": "task1",
        "completed": false,
        "author": {
          "firstName": "dnt",
          "lastName": "zhang"
        }
      },
      {
        "id": 1,
        "text": "task2",
        "completed": false,
        "author": {
          "firstName": "dnt",
          "lastName": "zhang"
        }
      },
      {
        "id": 2,
        "text": "task3",
        "completed": false,
        "author": {
          "firstName": "dnt",
          "lastName": "zhang"
        }
      },
      123,
      [2, 3, 4],
      [{ "aa": 1 }],
      [{ "aa": { bb: 2 } }]
    ],
    "ee": 111
  })

  assert.deepEqual(res.items === list.items, false)
  assert.deepEqual(res.items[0] === list.items[0], false)
  assert.deepEqual(res.items[0].author === list.items[0].author, false)
  assert.deepEqual(res.items[4] === list.items[4], false)
  assert.deepEqual(res.items[5][0] === list.items[5][0], false)
  assert.deepEqual(res.items[6][0].aa === list.items[6][0].aa, false)

})