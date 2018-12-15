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

```js
const res = mapping({ a: { b: 2, e: [{ f: 3 }, { f: 5 }, { f: 10 }] }, list: list }, {}, {
  'a.test': 1, //支持非函数类型的直接赋值
  'a.squareB': function () { //支持 path
    return this.b * this.b
  },
  'a.e[0].squareF': function () {//支持带有数组 index 的 path
    return this.f * this.f
  },
  'a.e[1].squareF': function () {//支持带有数组 index 的 path
    return this.f * this.f
  },
  'a.e[2]': function () {//支持带有数组 index 的 path
    return 'change array item!'
  },
  'a.e[3]': function () {//支持带有数组 index 的 path
    return 'add array item!'
  },
  'list.items[*].fullName': function () {//支持 * 来映射所有数组项
    return this.author.firstName + this.author.lastName
  },
  'list.items[*].squareTest': function () {//支持 * 来映射所有数组项
    return this.test * this.test
  },
  'list.items[*].arr[*].squareF': function () {//支持任意复杂的 path
    return this.f * this.f
  }
})
```

### 小程序 MVVM Todo 实战

定义 TodoItem Model:

```js
let id = 0

export default class TodoItem {
  constructor(text, completed) {
    this.id = id++
    this.text = text
    this.completed = completed || false
  }
}
```

定义 Todo Model:

```js
import TodoItem from './todo-item'
import { getAll, add } from './todo-server'

export default class Todo {
  constructor() {
    this.items = []

    this.author = {
      firstName: 'dnt',
      lastName: 'zhang'
    }
  }

  add(content) {
    const item = new TodoItem(content)
    this.items.push(item)
    add(item)
  }

  complete(id) {
    this.items.every(item => {
      if (id === item.id) {
        item.completed = true
        return false
      }
      return true
    })
  }

  uncomplete(id) {
    this.items.every(item => {
      if (id === item.id) {
        item.completed = false
        return false
      }
      return true
    })
  }

  remove(id) {
    this.items.every((item, index) => {
      if (id === item.id) {
        this.items.splice(index, 1)
        return false
      }
    })
  }
}
```

定义 ViewModel:

```js
import mapping from '../utils/mapping'
import todo from '../model/todo/index'

class TodoViewModel {
  constructor() {
    this.data = {
      items: []
    }
  }

  update() {
    //一行代码，自动映射！！
    mapping(todo, this.data)
  }

  toogleComplete(id) {
    todo.toogleComplete(id)
    this.update()
  }

  add(text) {
    todo.add(text)
    this.update()
  }

  remove(id) {
    todo.remove(id)
    this.update()
  }
}

const vm = new TodoViewModel()

export default vm
```

说完 mappingjs，来看下 mp-mvvm。你会发现，mp-mvvm 和 omi-mvvm 的 web 模板有很多代码是一模一样的！

* Model 一模一样
* ViewModel 一模一样
* View 不一样，mp-mvvm 使用小程序渲染，omi-mvvm 使用了 web 渲染

这也体现了 MVVM 的优势和特点：

> 领域模型复用不变，View 可以移植成任意技术进行渲染

下面来看下小程序的 View：

todo-list:

```html
<view>
  <label class="checkbox {{item.completed&&'completed'}}" wx:for="{{items}}">
    <view bindtap="checkboxChange" data-id="{{item.id}}">
      <checkbox checked="{{item.completed}}" />
      {{item.text}}
    </view>
    <image bindtap="remove" data-id="{{item.id}}" src="./remove.png" />
  </label>
</view>
```

```js
import vm from '../../view-model/todo'

Component({
  properties: {
    items: {
      type: Array,
      value: []
    }
  },

  ready: function() {},

  methods: {
    checkboxChange: function(e) {
      vm.toogleComplete(e.currentTarget.dataset.id)
    },
    remove:function(e){
      vm.remove(e.currentTarget.dataset.id)
    }
  }
})
```

这里把 todo-list 抽象成了一个自定义组件，因为需要有用户输入，所以把 vm 依赖进来，通过 vm 向 model 发指令并且更新视图。在看 todo page:

```html
<view class="container">
  <view class="title">Hello MVVM</view>
  <view>
    <todo-list items="{{items}}" />
    <view class="form">
      <input class="input" bindinput="inputHandler" type="text" placeholder="Input your task" value="{{text}}" />
      <button class="button" bindtap="tapHandler">Add{{items.length+1}}</button>
    </view>
  </view>

  <other-view />
</view>
```

```js
import vm from '../../view-model/todo'
import create from '../../utils/create'

create.Page(vm, {
  onLoad: function() {
    vm.getAll()
  },
  inputHandler: function(e) {
    this.text = e.detail.value
  },
  tapHandler: function() {
    vm.add(this.text)
    this.setData({
      text: ''
    })
  }
})
```

需要注意的是，这是使用的是 `create.Page`，并传入了 `vm`，而非以前的 Page。这里需要介绍下两个新的 API：

* create.Page(vm, options)
* create.Component(vm, options)

那么什么使用使用 create.Page 或者 create.Component，什么时候不需要使用 create，直接使用 Page 和 Component？

* 如果只需要使用 vm 来发送指令，就不需要 create
* 如果你的 vm.data 需要作为视图的 data，请使用 create



## License
MIT [@dntzhang](https://github.com/dntzhang)
