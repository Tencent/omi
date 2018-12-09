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
```

Here's a more complex example:

```js
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
```

Output:

```json
{
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
}
```

## License

MIT © [dntzhang](https://github.com/dntzhang)