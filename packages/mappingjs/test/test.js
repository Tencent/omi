

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

  const res = mapping(list)

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
      this.dd = 3
      this.obj = { a: 2 }
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

  var cc = { a: 3 }
  var bb = {}
  var dd = { author: {} }
  var res = mapping(list, { items: [bb, dd], dd: 2, obj: cc })
  assert.deepEqual(cc === res.obj, true)
  assert.deepEqual(bb === res.items[0], true)
  assert.deepEqual(dd.author === res.items[1].author, true)
})



QUnit.test("", function (assert) {
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

  const res = mapping(new TodoItem('task'))

  assert.deepEqual(res, {
    author: {
      firstName: "dnt",
      lastName: "zhang"
    },
    completed: false,
    text: "task"
  })
})


QUnit.test("", function (assert) {
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

  const res = mapping(new TodoItem('task'), { author: { a: 1 } })

  assert.deepEqual(res, {
    author: {
      firstName: "dnt",
      lastName: "zhang",
      a: 1
    },
    completed: false,
    text: "task"
  })
})

QUnit.test("", function (assert) {
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

  const res = mapping(new TodoItem('task'), {}, {
    fullName: function () {
      return this.author.firstName + this.author.lastName
    }
  })

  assert.deepEqual(res, {
    author: {
      firstName: "dnt",
      lastName: "zhang"
    },
    fullName: 'dntzhang',
    completed: false,
    text: "task"
  })
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

      this.test = 3

      this.arr = [{ f: 3 }, { f: 5 }, { f: 10 }]
    }
  }

  class TodoList {
    constructor(items) {
      this.items = items || []
      this.ee = 111
      this.dd = 3
      this.obj = { a: 2 }
    }
  }

  const list = new TodoList([
    new TodoItem('task1'),
    new TodoItem('task2')
  ])


  const res = mapping({ a: { b: 2, e: [{ f: 3 }, { f: 5 }, { f: 10 }] }, list: list }, {}, {
    'a.test': 1,
    'a.squareB': function () {
      return this.b * this.b
    },
    'a.e[0].squareF': function () {
      return this.f * this.f
    },
    'a.e[1].squareF': function () {
      return this.f * this.f
    },
    'a.e[2]': function () {
      return 'change array item!'
    },
    'a.e[3]': function () {
      return 'add array item!'
    },
    'list.items[*].fullName': function () {
      return this.author.firstName + this.author.lastName
    },
    'list.items[*].squareTest': function () {
      return this.test * this.test
    },
    'list.items[*].arr[*].squareF': function () {
      return this.f * this.f
    }
  })

  assert.deepEqual(res, {
    "a": {
      "b": 2,
      "e": [
        {
          "f": 3,
          "squareF": 9
        },
        {
          "f": 5,
          "squareF": 25
        },
        "change array item!",
        "add array item!"
      ],
      "squareB": 4,
      "test": 1
    },
    "list": {
      "items": [
        {
          "id": 0,
          "text": "task1",
          "completed": false,
          "author": {
            "firstName": "dnt",
            "lastName": "zhang"
          },
          "fullName": "dntzhang",
          "squareTest": 9,
          "test": 3,
          "arr": [{ f: 3, squareF: 9 }, { f: 5, squareF: 25 }, { f: 10, squareF: 100 }]
        },
        {
          "id": 1,
          "text": "task2",
          "completed": false,
          "author": {
            "firstName": "dnt",
            "lastName": "zhang"
          },
          "fullName": "dntzhang",
          "squareTest": 9,
          "test": 3,
          "arr": [{ f: 3, squareF: 9 }, { f: 5, squareF: 25 }, { f: 10, squareF: 100 }]
        }
      ],
      "ee": 111,
      "dd": 3,
      "obj": {
        "a": 2
      }
    }
  })
})




QUnit.test("", function (assert) {
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

  const res = mapping(new TodoItem('task'), {}, {
    'author.fullName': function () {
      return this.firstName + this.lastName
    }
  })

  assert.deepEqual(res, {
    author: {
      firstName: "dnt",
      lastName: "zhang",
      fullName: 'dntzhang'
    },
    completed: false,
    text: "task"
  })
})




QUnit.test("", function (assert) {
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

  const res = mapping(new TodoItem('task'), { author: { age: 18 } }, {
    'author.fullName': function () {
      return this.firstName + this.lastName
    }
  })

  assert.deepEqual(res, {
    author: {
      firstName: "dnt",
      lastName: "zhang",
      fullName: 'dntzhang',
      age: 18
    },
    completed: false,
    text: "task"
  })
})





QUnit.test("", function (assert) {

  const res = mapping({ arr: [{ name: 'zhangsan' }, { name: ' lisi' }] }, {}, {
    'arr[0]': { name: 'wangwu' },
    'arr[1]': function () {
      //请注意这里的 this 已指向 arr，超方便
      return { name: this[1].name + '2' }
    }
  })

  assert.deepEqual(res, {
    arr: [{ name: 'wangwu' }, { name: ' lisi2' }]
  })
})




QUnit.test("", function (assert) {

  const res = mapping({ arr: [{ name: 'zhangsan' }, { name: 'lisi' }] }, {}, {
    'arr[*].name2': function () {
      //请注意这里的 this 已指向 item，超方便
      return this.name + '2'
    }
  })

  assert.deepEqual(res, {
    arr: [{ name: 'zhangsan', name2: 'zhangsan2' }, { name: 'lisi', name2: 'lisi2' }]
  })
})







// QUnit.test("", function (assert) {
//   var A = { a: 1 }
//   var B = { b: 2 }

//   assert.deepEqual(mapping({
//     from: A,
//     to: B
//   }), { a: 1, b: 2 })
// })

// QUnit.test("", function (assert) {
//   var A = { a: 1 }
//   var B = { b: 2 }

//   assert.deepEqual(mapping({
//     from: A,
//     to: B,
//     rule: {
//       'aa.bb': function () {
//         return this.a
//       }
//     }
//   }), { a: 1, b: 2, aa: { bb: 1 } })
// })

// QUnit.test("", function (assert) {
//   var A = { a: 1 }
//   var B = { b: 2 }

//   assert.deepEqual(mapping({
//     from: A,
//     to: B,
//     rule: {
//       'aa.bb': function () {
//         return this.a
//       },
//       'cc[2].bb': function () {
//         return this.a
//       }
//     }
//   }), { a: 1, b: 2, aa: { bb: 1 }, cc: [undefined, undefined, { bb: 1 }] })
// })


// QUnit.test("", function (assert) {
//   var A = { a: 1 }

//   assert.deepEqual(mapping({
//     from: A
//   }), { a: 1 })
// })


// QUnit.test("", function (assert) {
//   var A = { a: 1 }
//   var B = mapping({
//     from: A
//   })
//   assert.deepEqual(B === A, false)
// })


// QUnit.test("", function (assert) {
//   var A = { a: { b: 2 } }
//   var B = mapping({
//     from: A,
//     rule: {
//       a: function () {
//         return mapping({ from: this.a })
//       }
//     }
//   })

//   assert.deepEqual(B.a, A.a)

//   assert.deepEqual(B.a === A.a, false)
// })

// QUnit.test("", function (assert) {
//   var A = { a: { b: { c: 2 } } }
//   var B = mapping({
//     from: A,
//     rule: {
//       a: function () {
//         return mapping({
//           from: this.a, rule: {
//             b: function () {
//               return mapping({ from: this.b })
//             }
//           }
//         })
//       }
//     }
//   })

//   assert.deepEqual(B.a.b, A.a.b)

//   assert.deepEqual(B.a.b === A.a.b, false)
// })


// QUnit.test("", function (assert) {
//   var A = { a: [{ name: 'abc', age: 18 }, { name: 'efg', age: 20 }], e: 'aaa' }
//   var B = mapping({
//     from: A,
//     to: { d: 'test' },
//     rule: {
//       a: null,
//       c: 13,
//       list: function () {
//         return this.a.map(function (item) {
//           return mapping({ from: item })
//         })
//       }
//     }
//   })

//   assert.deepEqual(B.a, null)
//   assert.deepEqual(B.list[0], A.a[0])
//   assert.deepEqual(B.c, 13)
//   assert.deepEqual(B.d, 'test')
//   assert.deepEqual(B.e, 'aaa')
//   assert.deepEqual(B.list[0] === A.a[0], false)
// })


// QUnit.test("", function (assert) {
//   var A = { a: [{ name: 'abc', age: 18, obj: { f: 'a', l: 'b' } }, { name: 'efg', age: 20, obj: { f: 'a', l: 'b' } }], e: 'aaa' }
//   var B = mapping({
//     from: A,
//     rule: {
//       list: function () {
//         return this.a.map(function (item) {
//           return mapping({
//             from: item, rule: {
//               obj: function () {
//                 return mapping({ from: this.obj })
//               }
//             }
//           })
//         })
//       }
//     }
//   })

//   assert.deepEqual(A.a, B.list)
//   assert.deepEqual(A.a[0].obj, B.list[0].obj)
//   assert.deepEqual(A.a[0].obj === B.list[0].obj, false)
// })
