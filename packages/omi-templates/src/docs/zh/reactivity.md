# 响应式

## 深入响应式信号

在本教程中，我们将学习如何使用上面的代码构建一个简单的响应式系统。我们将介绍 signal, computed 和 effect 的概念以及如何使用它们来构建响应式应用程序。

## 了解 signal

signal 是一个包装了值的对象，signal 是一个具有 .value 属性的对象，该属性保存了一个值通过 `.value` 访问。这有一个重要的特性：信号的值可以改变，但信号本身始终保持不变。它允许你观察和修改这个值。当值发生变化时，它会通知所有依赖于这个值的函数。我们可以使用 `signal` 函数来创建一个 signal 对象。

```tsx
const counter = signal(0)
```

上面的代码创建了一个 signal 对象，其初始值为 0。我们可以使用 `value` 属性来访问和修改 signal 的值。

```tsx
console.log(counter.value) // 输出 0
```

## 使用 computed 创建计算属性

computed 是一个根据其他 signal 值计算出的 Signal。当依赖的 signal 值发生变化时，computed signal 的值将自动更新。

我们可以使用 `computed` 函数来创建一个 computed Signal。

```tsx
const counter = signal(0)
const doubledCounter = computed(() => counter.value * 2)

console.log(doubledCounter.value) // 输出 0

counter.value = 1
console.log(doubledCounter.value) // 输出 2
```

上面的代码创建了一个名为 doubledCounter 的 computed Signal，它的值始终是 counter 值的两倍。

## 使用 peek 偷看 signal 值

```tsx
const name = signal('Dnt')
const surname = signal('Zhang')
const fullName = computed(() => name.peek() + ' ' + surname.value)

let effectTimes = 0
effect(() => {
  // 访问 fullName.value 会触发依赖
  fullName.value
  effectTimes++
})

name.value = 'John'
// 因为 peek 不会触发依赖，所以 effectTimes 仍然是 1
expect(effectTimes).toBe(1)
```

## 使用 effect 跟踪依赖关系

effect 是一个允许我们在函数中跟踪 signal 值变化的功能。当我们在 effect 函数中访问一个 signal 的值时，该函数将自动跟踪这个值的变化。当 signal 值发生变化时，Effect 函数将重新运行。

我们可以使用 `effect` 函数来创建一个 Effect。

```tsx
const counter = signal(0)

const dispose = effect(() => {
  console.log(`Counter: ${counter.value}`)
})

// 停止跟踪依赖关系
dispose()
```

上面的代码将在 counter 值发生变化时输出新的值。例如，当我们将 counter 值更改为 1 时，Effect 函数将输出 "Counter: 1"。

## 使用 update 触发 effect

```tsx
const testSignal = signal([1, 2, 3])
let effectTimes = 0
effect(() => {
  console.log(testSignal.value)
  effectTimes++
})
testSignal.value.push(4)
// 和 testSignal.value = testSignal.value 一样会触发 effect
testSignal.update()
expect(effectTimes).toBe(2)
```

## 总结

在本教程中，我们学习了如何使用 signal, computed 和 effect 构建响应式系统。我们了解了如何创建 signal 对象，如何使用 effect 函数跟踪依赖关系，如何使用 computed 创建计算属性，以及如何使用 batch 进行批处理更新。

现在，您已经了解了如何使用这些基本概念来构建响应式应用程序。尝试使用这些知识创建您自己的响应式系统，并不断学习和实践以提高您的技能。
