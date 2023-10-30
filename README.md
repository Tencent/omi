English | [简体中文](./README.CN.md) 

<p align="center"><img src="https://omijs.github.io/home/assets/logo.svg" alt="omi" width="100"/></p>
<h2 align="center">Omi - Web Components Framework</h2>

- 📶 **Signal**-driven reactive programming
- 🎉 [Tailwind Element Omi UI KIT](https://omi.cdn-go.cn/elements/latest/)
- ⚡ **Tiny** size, **Fast** performance
- 🌐 Everything you need: **Web Components**, **JSX**, Router, Suspense, Tailwindcss...
- 💯 Both **object** oriented programming(OOP) and **data** oriented programming(DOP) are supported
- 💒 Harness **Constructable Stylesheets** to easily manage and share styles

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

## Install 

```bash
npm i omi
```

To quickly create an Omi + Vite + TS/JS project:

```bash
$ npx omi-cli init my-app    # or create js project by: npx omi-cli init-js my-app
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
```

To quickly create an Omi + **Router** + **Signal** + **Suspense** + **Tailwindcss** + Vite + TS project:

```bash
$ npx omi-cli init-spa my-app  
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
```

### Packages

- Core packages
  - [`omi`](https://github.com/Tencent/omi/tree/master/packages/omi) - Implementation of omi framework.
  - [`omi-elements`](https://github.com/Tencent/omi/tree/master/packages/omi-elements) - Tailwind Element Omi UI KIT.
  - [`omi-router`](https://github.com/Tencent/omi/tree/master/packages/omi-router) - Create SPA of omi framework.
  - [`omi-cli`](https://github.com/omijs/cli) - To quickly create an Omi + Vite + TS/JS project.
- Starter kits (not published to npm)
  - [`omi-starter-spa`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-spa) - A starter repo for building single page app using Omi + OmiRouter + Tailwindcss + TypeScript + Vite.
  - [`omi-starter-ts`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-ts) - A starter repo for building web app or reusable components using Omi in TypeScript base on Vite.
  - [`omi-starter-tailwind`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-tailwind) - A starter repo for building web app or reusable components using Omi + Tailwindcss + TypeScript + Vite.
  - [`omi-starter-js`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-js) - A starter repo for building web app or reusable components using Omi in JavaScript base on Vite.
- Components
  - [`omi-transition`](https://github.com/Tencent/omi/tree/master/packages/omi-transition) - Applying animations when an component is entering and leaving the DOM.
  - [`omi-suspense`](https://github.com/Tencent/omi/tree/master/packages/omi-suspense) - Handling asynchronous dependencies.
  - [`omi-ripple`](https://github.com/Tencent/omi/tree/master/packages/omi-ripple) - A lightweight component for adding ripple effects to user interface elements.
  - [`tdesign-icons-omi`](https://github.com/omijs/tdesign-icons) - Cross framework icon collection based on tdesign.
- Examples (not published to npm)
  - [`snake-game-2tier`](https://github.com/Tencent/omi/tree/master/packages/snake-game-2tier) - SNake Game with `Signal` class
  - [`snake-game-3tier`](https://github.com/Tencent/omi/tree/master/packages/snake-game-3tier) - SNake Game with reactivity functions


## Usage

### TodoApp with reactivity functions

> Data oriented programming 

In data-oriented programming, the focus is on the data itself and the operations on the data, rather than the objects or data structures that hold the data. This programming paradigm emphasizes the change and flow of data, and how to respond to these changes. The TodoApp with reactivity functions is a good example of this, using the concepts of reactive programming, where the UI automatically updates to reflect changes in the data (i.e., the to-do list).


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
  // api a
  todos.value.push({ text: newItem.value, completed: false })
  todos.update() // Trigger UI auto update
  
  // api b, same as api a
  // todos.value = [...todos.value, { text: newItem.value, completed: false }]

  newItem.value = '' // Changing the value type can automatically update the UI
}

function removeTodo(index: number) {
  todos.value.splice(index, 1)
  todos.update() // Trigger UI auto update
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
                      todos.update() // Trigger UI auto update
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


### TodoApp with Signal Class

> Object oriented programming

In object-oriented programming, the focus is on the objects, which contain both data and methods to operate on the data. This programming paradigm emphasizes the interaction and cooperation between objects, and how to organize and manage code through object encapsulation, inheritance, and polymorphism. The TodoApp with reactivity functions can also be implemented in an object-oriented way, for example, by creating a TodoList class that contains the data of the to-do list and methods to operate on this data, as well as a `update` method to update the UI.

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

We won't discuss which method is good or bad here. You can choose either method using omi.

## Auto Import h

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

You can inject code during construction, so you don't have to manually export `h`.

<!-- ## With Twind

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


## Contributors

<a href="https://github.com/Tencent/omi/graphs/contributors">
  <img src="https://omi.cdn-go.cn/contributors.png" />
</a>

## License

MIT © Tencent


  <!-- - [`tdesign-omi`](https://github.com/omijs/tdesign) - `[in progress...]`Cross framework components based on tdesign. [Preview](https://omijs.github.io/tdesign/) -->