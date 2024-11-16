<p align="center"><img src="https://omijs.github.io/home/assets/logo.svg" alt="omi" width="100"/></p>
<h2 align="center">Omi - Web Components Framework</h2>

- 📶 **Signal**-driven reactive programming by [reactive-signal](https://github.com/Tencent/omi/tree/master/packages/reactive-signal)
- 🧱 [TDesign Web Components](https://github.com/TDesignOteam/tdesign-web-components) 
- 💗 [100+ OMI Templates](https://omi.cdn-go.cn/templates/latest/) & [OMI Templates Source Code](https://github.com/Tencent/omi/tree/master/packages/omi-templates)
- 🐲 [OMI Form](https://omi.cdn-go.cn/form/latest/docs/) & [OMI Form Playground](https://omi.cdn-go.cn/form/latest/play/) & [Lucide Omi Icons](https://github.com/omijs/lucide-omi)
- ⚡ **Tiny** size, **Fast** performance
- 🌐 Everything you need: **Web Components**, **JSX**, Function Components, Router, Suspense, Directive, Tailwindcss...
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
export class CounterDemo extends Component {
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
```

Use this component:

```tsx
import { h } from 'omi'
import './counter-demo'

render(<counter-demo />, document.body)

// or 
import { CounterDemo, Other } from './counter-demo'
// Prevent tree Shaking when importing other things
render(<CounterDemo />, document.body)

// or
document.body.appendChild(document.createElement('counter-demo'))
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
  - [`omi-form`](https://github.com/Tencent/omi/tree/master/packages/omi-form) - Powerful, simple and cross frameworks form solution.
  - [`lucide-omi`](https://github.com/omijs/lucide-omi) - Lucide icon collection for omi.
  - [`omiu`](https://github.com/Tencent/omi/tree/master/packages/omiu) - Hope to create the best web components. For example, the powerful [vchart](https://visactor.io/vchart) and [vtable](https://visactor.io/vtable)
  - [`omi-router`](https://github.com/Tencent/omi/tree/master/packages/omi-router) - Create SPA of omi framework.
  - [`omi-cli`](https://github.com/omijs/cli) - To quickly create an Omi + Vite + TS/JS project.
- Starter kits (not published to npm)
  - [`omi-elements`](https://github.com/Tencent/omi/tree/master/packages/omi-elements) - Tailwind Element Omi UI KIT.
  - [`omi-starter-spa`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-spa) - A starter repo for building single page app using Omi + OmiRouter + Tailwindcss + TypeScript + Vite + Prettier.
  - [`omi-starter-ts`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-ts) - A starter repo for building web app or reusable components using Omi in TypeScript base on Vite.
  - [`omi-starter-tailwind`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-tailwind) - A starter repo for building web app or reusable components using Omi + Tailwindcss + TypeScript + Vite.
  - [`omi-starter-js`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-js) - A starter repo for building web app or reusable components using Omi in JavaScript base on Vite.
  - [`omi-vue`](https://github.com/Tencent/omi/tree/master/packages/omi-vue) - Vue SFC + Vite + OMI + OMI-WeUI.
- Components
  - [`omi-weui`](https://github.com/Tencent/omi/tree/master/packages/omi-weui) - WeUI Components of omi.
  - [`omi-auto-animate`](https://github.com/Tencent/omi/tree/master/packages/omi-auto-animate) - Omi version of @formkit/auto-animate.
  - [`omi-suspense`](https://github.com/Tencent/omi/tree/master/packages/omi-suspense) - Handling asynchronous dependencies.
- Directives  
  - [`omi-transition`](https://github.com/Tencent/omi/tree/master/packages/omi-transition) - Applying animations when an component is entering and leaving the DOM.
  - [`omi-ripple`](https://github.com/Tencent/omi/tree/master/packages/omi-ripple) - A lightweight component for adding ripple effects to user interface elements.
- Examples (not published to npm)
  - [`snake-game-2tier`](https://github.com/Tencent/omi/tree/master/packages/snake-game-2tier) - SNake Game with `Signal` class
  - [`snake-game-3tier`](https://github.com/Tencent/omi/tree/master/packages/snake-game-3tier) - SNake Game with reactivity functions
  - [`omi-tutorial`](https://github.com/omijs/tutorial) - Source code of omi tutorial.


**If you want to help the project grow, start by simply sharing it with your peers!**

- [Share via Dev.to](<https://dev.to/new?prefill=---%0Atitle%3A%20Omi%20-%20Web%20Components%20Framework%0A---- %20Home%3A%20%5Bomijs.org%5D(http%3A%2F%2Fomijs.org%2F)%20Github%3A%5Bhttps%3A%2F%2Fgithub.com%2FTencent%2Fomi%5D(https%3A%2F%2Fgithub.com%2FTencent%2Fomi)%0A-%20%F0%9F%93%B6%20**Signal**-driven%20reactive%20programming%0A-%20%F0%9F%8E%89%20%5BTailwind%20Element%20Omi%20UI%20KIT%5D(https%3A%2F%2Fomi.cdn-go.cn%2Felements%2Flatest%2F)%0A-%20%E2%9A%A1%20**Tiny**%20size%2C%20**Fast**%20performance%0A-%20%F0%9F%8C%90%20Everything%20you%20need%3A%20**Web%20Components**%2C%20**JSX**%2C%20Router%2C%20Suspense%2C%20Directive%2C%20Tailwindcss...%0A-%20%F0%9F%92%AF%20Both%20**object**%20oriented%20programming(OOP)%20and%20**data**%20oriented%20programming(DOP)%20are%20supported%0A-%20%F0%9F%92%92%20Harness%20**Constructable%20Stylesheets**%20to%20easily%20manage%20and%20share%20styles>)
- [Share via Twitter](https://twitter.com/intent/tweet?text=Web%20Components%20Framework%20%F0%9F%8E%89http%3A%2F%2Fomijs.org%2F%0A%0A%20Everything%20you%20need%3A%20Web%20Components%2C%20JSX%2C%20Router%2C%20Suspense%2C%20Directive%2C%20Tailwindcss...%20%0A%0A%20Tailwind%20Element%20Omi%20UI%20KIT%3E%20%F0%9F%92%AFhttps%3A%2F%2Fomi.cdn-go.cn%2Felements%2Flatest%2F)
- [Share via Facebook](https://www.facebook.com/sharer/sharer.php?u=http%3A//omijs.org)
- [Share via LinkedIn](http://www.linkedin.com/shareArticle?url=http%3A%2F%2Fomijs.org%2F)
- [Share via Pinterest](https://www.pinterest.com/pin/create/button?url=http://omijs.org/&media=https://repository-images.githubusercontent.com/36606437/66abfcfb-096b-4c9d-a290-77165213e605&description=Omi-Web%20Componnets%20Framework)
- [Share via Reddit](https://reddit.com/submit?url=http://omijs.org/&title=web%20components%20framework)
- [Share via StumbleUpon](https://www.stumbleupon.com/submit?url=http://omijs.org/&title=web%20components%20framework)
- [Share via Vkontakte](https://vk.com/share.php?url=http://omijs.org/)
- [Share via Weibo](https://service.weibo.com/share/share.php?url=https://omijs.org/&title=web%20components%20framework)
- [Share via Hackernews](https://news.ycombinator.com/submitlink?u=http://omijs.org/&t=web%20components%20framework)

Thank you!


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

## Define Cross Framework Component

The case of using Omi component in Vue is as follows:

![](./assets/omi-vue.gif)

my-counter.tsx:

```tsx
import { tag, Component, h, bind } from 'omi'

@tag('my-counter')
class MyCounter extends Component {
  static props = {
    count: {
      type: Number,
      default: 0,
      changed(newValue, oldValue) {
        this.state.count = newValue
        this.update()
      }
    }
  }

  state = {
    count: null
  }

  install() {
    this.state.count = this.props.count
  }

  @bind
  sub() {
    this.state.count--
    this.update()
    this.fire('change', this.state.count)
  }

  @bind
  add() {
    this.state.count++
    this.update()
    this.fire('change', this.state.count)
  }

  render() {
    return (
      <>
        <button onClick={this.sub}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.add}>+</button>
      </>
    )
  }
}
```

### Using in Vue3

```vue
<script setup>
import { ref } from 'vue'
// import omi component
import './my-counter'

defineProps({
  msg: String,
})

const count = ref(0)

const change = (e) => {
  count.value = e.detail
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <my-counter @change="change" :count="count" />
  <p>
    【Omi】 
  </p>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
     【Vue】 
    </p>
  </div>

</template>
```

If you `fire` the `count-change` in an Omi component:

```ts
this.fire('count-change', this.state.count)
```

To use the component and listen for events in Vue:

```html
<my-counter @count-change="change" :count="count" />
```

### Using in React

```tsx
import { useState, useRef, useEffect } from 'react'
import useEventListener from '@use-it/event-listener'
import './my-counter'

function App() {
  const [count, setCount] = useState(100)
  const myCounterRef = useRef(null)

  useEffect(() => {
    const counter = myCounterRef.current
    if (counter) {
      const handleChange = (evt) => {
        setCount(evt.detail)
      }
      counter.addEventListener('change', handleChange)
      return () => {
        counter.removeEventListener('change', handleChange)
      }
    }
  }, [])

  return (
    <>
      <h1>Omi + React</h1>
      <my-counter count={count} ref={myCounterRef}></my-counter>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
```

## Contributors

<a href="https://github.com/Tencent/omi/graphs/contributors">
  <img src="https://raw.githubusercontent.com/Tencent/omi/master/assets/contributors.png" />
</a>

## License

MIT © Tencent


  <!-- - [`tdesign-omi`](https://github.com/omijs/tdesign) - `[in progress...]`Cross framework components based on tdesign. [Preview](https://omijs.github.io/tdesign/) -->