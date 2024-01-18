[English](https://github.com/Tencent/omi/tree/master/packages/reactive-signal)  | 简体中文

<p align="center">
<a href="http://omijs.org" target="_blank">
<img src="./icon.svg" width="100" />
</a>
</p>
<h3 align="center">Reactive-Signal</h3>
<p align="center">JavaScript 中的响应式编程</p>
<p align="center"><a href="https://www.npmjs.org/package/reactive-signal"><img src="https://img.shields.io/npm/v/reactive-signal.svg?style=flat" alt="npm"></a></p>

`Reactive-Signal` 是一个用于在 JavaScript 中创建响应式数据的强大库。它提供了一组函数，用于创建信号、计算信号、效果和批量更新。使用这个库，您可以轻松构建响应式应用程序，当数据发生变化时，组件会自动更新。

## 特点

- **超轻量级**：该库非常小，仅为 0.6 KB。
- **易于使用的 API**：简单直观的 API，使您可以轻松地开始在 JavaScript 中进行响应式编程。
- **响应式数据**：轻松创建响应式数据信号和计算信号，以便在数据发生变化时自动更新组件。
- **效果**：定义根据信号变化自动响应的副作用，简化复杂应用程序逻辑的管理。
- **批量更新**：将多个更新高效地批量处理为单个更新，减少不必要的重新渲染并提高性能。
- **组件管理**：内置函数用于设置和获取活动组件，便于与您的应用程序的组件系统集成。
- **灵活**：可以与任何 JavaScript 框架或库一起使用，甚至可以在纯 JavaScript 项目中使用。

## 安装

```bash
npm install reactive-signal
```

## 使用

```javascript
import { signal, computed, effect, batch } from 'reactive-signal'

// 创建一个信号
const count = signal(0)

// 创建一个计算信号
const doubleCount = computed(() => count.value * 2)

// 创建一个效果
effect(() => {
  console.log(`Count: ${count.value}, Double Count: ${doubleCount.value}`)
})

// 更新计数信号
count.value = 1  // 输出: "Count: 1, Double Count: 2"

// 批量多个更新
batch(() => {
  count.value = 2
  count.value = 3
})  // 输出: "Count: 3, Double Count: 6"
```

## API

### `signal(initialValue)`

创建一个具有初始值的信号。

```tsx
const count = signal(0)
// 使用 peek 获取信号的值，但不会产生依赖
count.peek() === count.value // true

const todos = signal([])
todos.value.push('Learn Reactive Programming')
// 使用 update 更新信号的值，并触发依赖更新
todos.update()
```

### `computed(fn)`

根据一个函数创建一个计算信号。

### `effect(fn)`

根据一个函数创建一个效果。

### `batch(fn)`

将多个更新批量处理为单个更新。

### `setActiveComponent(component, updateFnName)`

设置活动组件。

* component: Component - 要设置为活动组件的组件对象。
* updateFnName?: string - (可选) 组件中用于更新的函数的名称。如果未提供，则默认值为 `queuedUpdate`。

### `clearActiveComponent()`

清除活动组件。

### `getActiveComponent()`

返回活动组件。

## 受启发于

* [@preact/signals](https://preactjs.com/guide/v10/signals/)

## 许可证

MIT © 腾讯