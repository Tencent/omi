# 小程序的 MVVM 架构 mp-mvvm

> 小程序插上 MVVM 的翅膀，和 [Omi MVVM](https://github.com/Tencent/omi/blob/master/tutorial/omi-mvvm.cn.md) 一样强大

<p align="center"><img src="../../assets/mp-mvvm3.jpg" alt="mp-mvvm" width="300"/></p>

## mappingjs 2.0

先隆重介绍下 mappingjs，极小的尺寸，只有 100 多行 js，因为他是 MVVM 的强力核心驱动。mappingjs 2.0 的 API 减少到了只有一个:

> mapping(from, to, [rule])

* from 是需要映射的对象
* to 是映射到的对象
* rule 是可选参数，代表映射规则

<p align="center"><img src="../../assets/mappingjs.png" alt="mappingjs" /></p>

先看一个简单的例子：


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

映射后 `to` 的值是:

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

可以看到， `age` 会保留并且被合并，`fullName` 对原有属性进行了重组。但是这就够了吗？当然不够，path 命中和映射是一定需要支持的，因为属性往往都会嵌套很深，不能限制要求开发者仅仅使用扁平的数据源。

稍微修改一下上面的 mapping 规则:

```js
mapping(from, to, {
  "author.fullName": function () {
    //请注意这里的 this 指向已变成 author，太方便了！
    return this.firstName + this.lastName
  }
})
```

映射后 `to` 的值是:

```js
{
  author: {
    firstName: "dnt",
    lastName: "zhang",
    fullName: 'dntzhang',
    age: 18
  },
  completed: false,
  text: "task"
}
```

这就够了吗？当然不够，支持数组！支持JSON List 数组！支持任意对象数组！

```js
mapping({ arr: [{ name: 'zhangsan' }, { name: ' lisi' }] }, {}, {
  'arr[0]': { name: 'wangwu' },
  'arr[1]': function () {
    //请注意这里的 this 已指向 arr，超方便
    return { name: this[1].name + '2' }
  }
})
```

输出:

```js
{
  arr: [{ name: 'wangwu' }, { name: ' lisi2' }]
}
```

这就够了吗？ 数组有有 1000000 条就要写 1000000 条规则？明显不是, `*` 来帮你。

```js
mapping({ arr: [{ name: 'zhangsan' }, { name: 'lisi' }] }, {}, {
  'arr[*].name2': function () {
    //请注意这里的 this 已指向 item，超方便
    return this.name + '2'
  }
})
```

```js
{
  arr: [{ name: 'zhangsan', name2: 'zhangsan2' }, { name: 'lisi', name2: 'lisi2' }]
}
```

Mappingjs 的强大不再举例，这里是一个复杂的例子来说明他的大部分能力：
[→ 复杂的例子](https://github.com/Tencent/omi/blob/master/packages/mappingjs/test/test.js#L250-L276)


## License
MIT [@dntzhang](https://github.com/dntzhang)
