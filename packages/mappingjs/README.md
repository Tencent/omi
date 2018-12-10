<p align="center"><img src="../../assets/mappingjs.png" alt="mappingjs" /></p>

## Mappingjs

> Tiny size objects mapping lib for javascript. [Omi MVVM](https://github.com/Tencent/omi/blob/master/tutorial/omi-mvvm.md)'s best partner.

## Install

```js
npm i mappingjs
```

## API

> mapping(from, to, [rule])

* `from` the object to be mapped
* `to` the object mapped to
* `rule` an optional parameter, mapping rules

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

const from = new TodoItem('task')
const to = { author: { age: 18 } }

mapping(from, to, {
  fullName: function () {
    return this.author.firstName + this.author.lastName
  }
})
```

So the value of `to` is:

```js
{
  author: {
    firstName: "dnt",
    lastName: "zhang",
    age: 18
  },
  fullName: 'dntzhang',
  completed: false,
  text: "task"
}
```


[→ Here's a more complex example](https://github.com/Tencent/omi/blob/master/packages/mappingjs/test/test.js#L250-L276)

```js
const res = mapping({ a: { b: 2, e: [{ f: 3 }, { f: 5 }, { f: 10 }] }, list: list }, {}, {
  'a.test': 1, //supports non function type
  'a.squareB': function () { //supports path
    return this.b * this.b
  },
  'a.e[0].squareF': function () {//supports path with arr index
    return this.f * this.f
  },
  'a.e[1].squareF': function () {//supports path with arr index
    return this.f * this.f
  },
  'a.e[2]': function () {//supports path with arr index
    return 'change array item!'
  },
  'a.e[3]': function () {//supports path with arr index
    return 'add array item!'
  },
  'list.items[*].fullName': function () {//supports * mapping all item of array
    return this.author.firstName + this.author.lastName
  },
  'list.items[*].squareTest': function () {//supports * mapping all item of array
    return this.test * this.test
  },
  'list.items[*].arr[*].squareF': function () {//supports * mapping all item of array
    return this.f * this.f
  }
})
```

## License

MIT © [dntzhang](https://github.com/dntzhang)