English | [简体中文](https://github.com/Tencent/omi/blob/master/packages/reactive-signal/README.CN.md) 

<p align="center">
<a href="http://omijs.org" target="_blank">
<img src="https://raw.githubusercontent.com/Tencent/omi/master/packages/reactive-signal/icon.svg" width="100" />
</a>
</p>
<h3 align="center">Reactive-Signal</h3>
<p align="center">Reactive Programming in JavaScript(0.6KB) </p>
<p align="center"><a href="https://www.npmjs.org/package/reactive-signal"><img src="https://img.shields.io/npm/v/reactive-signal.svg?style=flat" alt="npm"></a></p>


`Reactive-Signal` is a powerful library for creating reactive data in JavaScript. It provides a set of functions to create signals, computed signals, effects and batch updates. With this library, you can easily build reactive applications where components automatically update when data changes.

## Features

- **Ultra-Lightweight**: The library is incredibly tiny at just 0.6 KB.
- **Easy-to-Use API**: A simple and intuitive API that makes it easy to get started with reactive programming in JavaScript.
- **Reactive Data**: Easily create reactive data signals and computed signals to automatically update components when data changes.
- **Effects**: Define side effects that automatically react to signal changes, making it simple to manage complex application logic.
- **Batch Updates**: Efficiently batch multiple updates into a single update, reducing unnecessary re-renders and improving performance.
- **Component Management**: Built-in functions to set and get active components, making it easy to integrate with your application's component system.
- **Flexible**: Can be used with any JavaScript framework or library, or even in vanilla JavaScript projects.



## Installation

```bash
npm install reactive-signal
```

## Usage

```javascript
import { signal, computed, effect, batch } from 'reactive-signal'

// Create a signal
const count = signal(0)

// Create a computed signal
const doubleCount = computed(() => count.value * 2)

// Create an effect
effect(() => {
  console.log(`Count: ${count.value}, Double Count: ${doubleCount.value}`)
})

// Update the count signal
count.value = 1  // logs: "Count: 1, Double Count: 2"

// Batch multiple updates
batch(() => {
  count.value = 2
  count.value = 3
})  // logs: "Count: 3, Double Count: 6"
```

## API

### `signal(initialValue)`

Creates a signal with an initial value.

```tsx
const count = signal(0)
// Using peek to get the value of the signal without creating a dependency
count.peek() === count.value // true

const todos = signal([])
todos.value.push('Learn Reactive Programming')
// Using update to change the value of the signal and trigger dependency updates
todos.update()
```

### `computed(fn)`

Creates a computed signal based on a function.

### `effect(fn)`

Creates an effect based on a function.

### `batch(fn)`

Batches multiple updates into a single update.

### `setActiveComponent(component, updateFnName)`

Sets the active component.

* component: Component - The component object to set as the active component.
* updateFnName?: string - (Optional) The name of the function in the component to use for updates. If not provided, the default value is `queuedUpdate`.

### `clearActiveComponent()`

Clear the active component.

### `getActiveComponent()`

Returns the active component.



## Inspired by

* [@preact/signals](https://preactjs.com/guide/v10/signals/)

## License

MIT © Tencent


