## Omi 5.0 Released - MVVM comes back bravely

* [→ All the source code](https://github.com/Tencent/omi/tree/master/packages/omi/examples/mvvm)
* [→ Online Demo](https://tencent.github.io/omi/packages/omi/examples/mvvm/)

### Written in front

Omi officially released 5.0, still focusing on View, but more friendly integration of MVVM architecture, a complete separation of view and business logic architecture.

![mvvm](../assets/mvvm.png)

You can quickly experience MVVM through omi-cli:

```bash
$ npm i omi-cli -g        
$ omi init-mvvm my-app    
$ cd my-app         
$ npm start                   
$ npm run build             
```

or:

> `npx omi-cli init-mvvm my-app` (npm v5.2.0+)

Other templates:

| **Template Type**|  **Command**|  **Describe**|
| ------------ |  -----------|  ----------------- |
|Base Template|`omi init my-app`| Basic template for omi project.|
|TypeScript Template(omi-cli v3.0.5+)|`omi init-ts my-app`|Basic template with typescript.|
|[SPA Template](https://tencent.github.io/omi/packages/omi-router/examples/spa/build/)(omi-cli v3.0.10+)|`omi init-spa my-app`|Single page application template with omi-router.|
|omi-mp Template(omi-cli v3.0.13+)|`omi init-mp my-app`  |Developing web with mini program template.|

### MVVM evolution

MVVM is actually evolved from MVC and MVP.

![mvvm](../assets/mvx.png)

The purpose is to separate views and models, but in MVC, views depend on models, and the degree of coupling is too high, which leads to a great reduction in the portability of views. In MVC, views do not depend on models directly, and P(Presenter) is responsible for completing the interaction between Models and Views. MVVM and MVP are similar. ViewModel plays the role of Presenter and provides the data source needed for UI view, instead of directly letting View use the data source of Model. This greatly improves the portability of View and Model, such as using Flash, HTML, WPF rendering for the same model switch, such as using different models for the same View. As long as the Model and ViewModel are mapped well, View can be changed very little or not.

### Mappingjs

Of course, there is a problem with MVVM. Data in Model is mapped to ViewModel to provide the view binding. How to map? Manual mapping? Automatic mapping? In ASP.NET MVC, there are powerful [AutoMapper](https://www.c-sharpcorner.com/UploadFile/tirthacs/using-automapper-in-mvc/) for mapping. For the JS environment, I specially encapsulated [mappingjs](https://github.com/Tencent/omi/tree/master/packages/mappingjs) to map Model to ViewModel.

![](https://github.com/Tencent/omi/raw/master/assets/mappingjs.png)

```js
npm i mappingjs
```

#### Usage

```js
var a = { a: 1 }
var b = { b: 2 }

deepEqual(mapping({
  from: a,
  to: b
}), { a: 1, b: 2 })
```

#### Auto Mapping

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

Auto Mapping with init value：

```js
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

### Omi MVVM Todo 

Define TodoItem Model:

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

Define Todo Model:

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

  initItems(list) {
    list.forEach(item => {
      this.items.push(new TodoItem(item.text))
    })
  }

  add(content) {
    const item = new TodoItem(content)
    this.items.push(item)
    add(item)
  }

  updateContent(id, content) {
    this.items.every(item => {
      if (id === item.id) {
        item.content = content
        return false
      }
    })
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

  clear() {
    this.items.length = 0
  }

  getAll(callback) {
    getAll(list => {
      this.initItems(list)
      callback()
    })
  }
}
```

Define ViewModel:

```js
import mapping from 'mappingjs'
import todo from '../model/todo'

class TodoViewModel {
  constructor() {
    this.data = {
      items: []
    }
  }

  update() {
    //auto mapping here!!!!
    mapping.auto(todo, this.data)
  }

  complete(id) {
    todo.complete(id)
    this.update()
  }

  uncomplete(id) {
    todo.uncomplete(id)
    this.update()
  }

  add(text) {
    todo.add(text)
    this.update()
  }

  getAll() {
    todo.getAll(() => {
      this.update()
    })
  }
}

const vd = new TodoViewModel()

export default vd
```

> VM only focuses on update data, and views are automatically updated



Define View, note that the following inherits from ModelView not WeElement.

```js
import { ModelView, define } from 'omi'
import vm from '../view-model/todo'
import './todo-list'

define('todo-app', class extends ModelView {
  vm = vm

  install() {
    vm.getAll()
  }

  css() {
    return `
    span{
       color: #888;
       font-size: 11px;
     }
    `
  }

  render(props, data) {
    return (
      <div>
        <h3>
          TODO by <span>by {data.author.firstName + data.author.lastName}</span>
        </h3>
        <todo-list items={data.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.text} />
          <button>Add #{data.items.length + 1}</button>
        </form>
        <other-view />
      </div>
    )
  }

  handleChange = e => {
    this.text = e.target.value
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.text !== '') {
      //send action to vm
      vm.add(this.text)
      this.text = ''
    }
  }
})
```

* All data is injected through VM
* So instructions are sent through VM

Define TodoList View:

```js
import { define, WeElement } from 'omi'
import vm from '../view-model/todo'

define('todo-list', class extends WeElement {
  css() {
    return `
    .completed{
      color: #d9d9d9;
      text-decoration: line-through;
    }
   `
  }

  onChange = (evt, id) => {
    if (evt.target.checked) {
      vm.complete(id)
    } else {
      vm.uncomplete(id)
    }
  }

  render(props) {
    return (
      <ul>
        {props.items.map(item => (
          <li class={item.completed && 'completed'}>
            <input
              type="checkbox"
              onChange={evt => {
                this.onChange(evt, item.id)
              }}
            />
            {item.text}
          </li>
        ))}
      </ul>
    )
  }
})
```

Needing to pay attention to is that, when you remove item from an array, you need to clear the array first, then using mapping.atuo:

```js
remove(id) {
  todo.remove(id)
  //empty first
  this.data.items.length = 0
  mapping.auto(todo, this.data)
}
```

[→ All the source code](https://github.com/Tencent/omi/tree/master/packages/omi/examples/mvvm)

### Summary

From a macro perspective, Omi's MVVM architecture also has attributed mesh architecture. At present, mesh architecture has:

* Mobx + React
* Hooks + React
* MVVM (Omi) 

General trend! It's a best practice for front-end engineering! It can also be understood as the best way to describe and abstract the world. Where is the net?

* ViewModel and ViewModel are interdependent or even cyclically dependent mesh structures
* ViewModel is one-to-one, many-to-one, one-to-many, and many-to-many dependent Models to form a network structure
* Models and Models form interdependent and even cyclically dependent meshes
* View relies one-to-one on ViewModel to form a mesh structure

Summarized as follows:

| | Model | ViewModel  | View |
|---|-----|--------|---------|
|Model | many-to-many | many-to-many | unrelated |
|ViewModel | many-to-many | many-to-many | one-to-one |
|View | unrelated |  one-to-one|  many-to-many |

## Star & Fork

* [https://github.com/Tencent/omi](https://github.com/Tencent/omi)
