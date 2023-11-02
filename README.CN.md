[English](./README.md) | 简体中文 

<p align="center"><img src="https://omijs.github.io/home/assets/logo.svg" alt="omi" width="100"/></p>
<h2 align="center">Omi - Web Components 框架</h2>

- 📶 信号 **Signal** 驱动的响应式编程
- ⚡ **微小的**尺寸，**极速的**性能
- 🎉 [官方推出 Tailwind Omi 套件](https://omi.cdn-go.cn/elements/latest/)
- 🌐 你要的一切都有: **Web Components**, **JSX**, Router, Suspense, Tailwindcss...
- 💯 面向对象编程(OOP) 和 数据驱动编程(DOP) 两种范式都支持
- 💒 使用 **Constructable Stylesheets** 轻松管理和共享样式

```tsx
import { render, signal, tag, Component, h } from 'omi'

const count = signal(0)

function add() {
  count.value++
}

function sub() {
  count.value--
}

@tag('counter-demo')
class CounterDemo extends Component {
  static css = 'span { color: red; }'

  render() {
    return (
      <>
        <button onClick={sub}>-</button>
        <span>{count.value}</span>
        <button onClick={add}>+</button>
      </>
    )
  }
}

render(<counter-demo />, document.body)
```


## 安装

```bash
npm i omi
```

快速创建 Omi + Vite + TS/JS 项目：

```bash
$ npx omi-cli init my-app    # 或者创建js项目: npx omi-cli init-js my-app
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
```

快速创建 Omi + **Router** + **Signal** + **Suspense** + **Tailwindcss** + Vite + TS 项目：

```bash
$ npx omi-cli init-spa my-app  
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
```

### 包

- 核心包
  - [`omi`](https://github.com/Tencent/omi/tree/master/packages/omi) - Omi 框架的实现代码。
  - [`omi-elements`](https://github.com/Tencent/omi/tree/master/packages/omi-elements) - 官方推出 Tailwind Omi 套件。
  - [`omi-router`](https://github.com/Tencent/omi/tree/master/packages/omi-router) - 创建单页应用。
  - [`omi-cli`](https://github.com/omijs/cli) - 快速创建 Omi + Vite + TS/JS 项目。
- 入门套件 (未发布到 npm)
  - [`omi-starter-spa`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-spa) - 快速创建单页应用(SPA)，内置了 Omi + OmiRouter + Tailwindcss + TypeScript + Vite。
  - [`omi-starter-ts`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-ts) - 基于 Vite + Omi + TypeScript 的模板。
  - [`omi-starter-tailwind`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-tailwind) - 基于 Vite + Omi + TypeScript + Tailwindcss 的模板。
  - [`omi-starter-js`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-js) - 基于 Vite + Omi + JavaScript 的模板。
- 组件
  - [`omi-auto-animate`](https://github.com/Tencent/omi/tree/master/packages/omi-auto-animate) - Omi 版本的 @formkit/auto-animate。
  - [`omi-transition`](https://github.com/Tencent/omi/tree/master/packages/omi-transition) - 提供进入和离开动画。
  - [`omi-suspense`](https://github.com/Tencent/omi/tree/master/packages/omi-suspense) - 处理异步依赖。
  - [`omi-ripple`](https://github.com/Tencent/omi/tree/master/packages/omi-ripple) - 用于为用户界面元素添加涟漪（ripple）效果。当用户与元素交互（例如点击按钮）时，涟漪效果会从交互点开始扩散开来。
  - [`tdesign-icons-omi`](https://github.com/omijs/tdesign-icons) - 基于 TDesign 和 Omi 的跨框架 icon 集合。
- 综合性例子 (未发布到 npm)
  - [`snake-game-2tier`](https://github.com/Tencent/omi/tree/master/packages/snake-game-2tier) - 基于 Omi `Signal` class 两层架构的贪吃蛇游戏。
  - [`snake-game-3tier`](https://github.com/Tencent/omi/tree/master/packages/snake-game-3tier) - 基于 Omi 响应是函数三层架构的贪吃蛇游戏。

## 使用

### TodoApp 使用响应式函数

> 数据驱动编程

在数据驱动编程中，我们将重点放在数据本身和对数据的操作上，而不是数据所在的对象或数据结构。这种编程范式强调的是数据的变化和流动，以及如何响应这些变化。基于响应式函数的 TodoApp 就是一个很好的例子，它使用了响应式编程的概念，当数据（即待办事项列表）发生变化时，UI 会自动更新以反映这些变化。


```tsx
import { render, signal, computed, tag, Component, h } from 'omi'

const todos = signal([
  { text: 'Learn OMI', completed: true },
  { text: 'Learn Web Components', completed: false },
  { text: 'Learn JSX', completed: false },
  { text: 'Learn Signal', completed: false }
])

const completedCount = computed(() => {
  return todos.value.filter(todo => todo.completed).length
})

const newItem = signal('')

function addTodo() {
  // api a，不会重新创建数组
  todos.value.push({ text: newItem.value, completed: false })
  todos.update() // 非值类型的数据更新需要手动调用 update 方法

  // api b, 和上面的 api a 效果一样，但是会创建新的数组
  // todos.value = [...todos.value, { text: newItem.value, completed: false }]

  newItem.value = '' // 值类型的数据更新需会自动 update
}

function removeTodo(index: number) {
  todos.value.splice(index, 1)
  todos.update() // 非值类型的数据更新需要手动调用 update 方法
}

@tag('todo-list')
class TodoList extends Component {
  onInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    newItem.value = target.value
  }

  render() {
    return (
      <>
        <input type="text" value={newItem.value} onInput={this.onInput} />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.value.map((todo, index) => {
            return (
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onInput={() => {
                      todo.completed = !todo.completed
                      todos.update()
                    }}
                  />
                  {todo.completed ? <s>{todo.text}</s> : todo.text}
                </label>
                {' '}
                <button onClick={() => removeTodo(index)}>❌</button>
              </li>
            )
          })}
        </ul>
        <p>Completed count: {completedCount.value}</p>
      </>
    )
  }
}

render(<todo-list />, document.body)
```


### TodoApp 使用信号类 Signal

> 面向对象编程

在面向对象编程中，我们将重点放在对象上，对象包含了数据和操作数据的方法。这种编程范式强调的是对象之间的交互和协作，以及如何通过对象的封装、继承和多态性来组织和管理代码。基于响应式函数的 TodoApp 也可以使用面向对象的方式来实现，例如，我们可以创建一个 TodoList 类，这个类包含了待办事项列表的数据和操作这些数据的方法，以及一个 `update` 方法来更新 UI。



```tsx
import { render, Signal, tag, Component, h, computed } from 'omi'

type Todo = { text: string, completed: boolean }

class TodoApp extends Signal<{ todos: Todo[], filter: string, newItem: string }> {
  completedCount: ReturnType<typeof computed>

  constructor(todos: Todo[] = []) {
    super({ todos, filter: 'all', newItem: '' })
    this.completedCount = computed(() => this.value.todos.filter(todo => todo.completed).length)
  }

  addTodo = () => {
    // api a
    this.value.todos.push({ text: this.value.newItem, completed: false })
    this.value.newItem = ''
    this.update()

    // api b, same as api a
    // this.update((value) => {
    //   value.todos.push({ text: value.newItem, completed: false })
    //   value.newItem = ''
    // })
  }

  toggleTodo = (index: number) => {
    const todo = this.value.todos[index]
    todo.completed = !todo.completed
    this.update()
  }

  removeTodo = (index: number) => {
    this.value.todos.splice(index, 1)
    this.update()
  }
}

const todoApp = new TodoApp([
  { text: 'Learn OMI', completed: true },
  { text: 'Learn Web Components', completed: false },
  { text: 'Learn JSX', completed: false },
  { text: 'Learn Signal', completed: false }
])

@tag('todo-list')
class TodoList extends Component {
  onInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    todoApp.value.newItem = target.value
  }

  render() {
    const { todos } = todoApp.value
    const { completedCount, toggleTodo, addTodo, removeTodo } = todoApp
    return (
      <>
        <input type="text" value={todoApp.value.newItem} onInput={this.onInput} />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onInput={() => toggleTodo(index)}
                  />
                  {todo.completed ? <s>{todo.text}</s> : todo.text}
                </label>
                {' '}
                <button onClick={() => removeTodo(index)}>❌</button>
              </li>
            )
          })}
        </ul>
        <p>Completed count: {completedCount.value}</p>
      </>
    )
  }
}

render(<todo-list />, document.body)
```

这里不讨论哪种方式(DOP,OOP)的好坏，使用 omi 两种方式都可以任意选择。

## 自动导入 h

vite.config.js:

```tsx
import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxInject: "import { h } from 'omi'",
    jsxFactory: "h",
    jsxFragment: "h.f"
  }
})
```

你可以在构建时候注入代码，这样就不用手动导出 `h`。

<!-- ## 集成 Twind

```tsx
import { Component, define, h } from 'omi'

import install from '@twind/with-web-components'
import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'
const withTwind = install(defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
}))

define('my-app', class extends withTwind(Component) {
  render() {
    return <h1 class="text-3xl font-bold underline">Hello world!</h1>
  }
})
``` -->

## 贡献者

<a href="https://github.com/Tencent/omi/graphs/contributors">
  <img src="https://omi.cdn-go.cn/contributors.png" />
</a>

## 微信群

<img src="./wechat.png" alt="omi" width="300"/></p>

## License

MIT © Tencent



  <!-- - [`tdesign-omi`](https://github.com/omijs/tdesign) - `[进行中...]`基于 TDesign 和 Omi 的跨框架 组件 集合。 [点击这里预览一下](https://omijs.github.io/tdesign/) -->
