# 组件定义和使用

这一节来学习组件定义和使用。

## 定义 Counter 组件

```tsx
import { tag, WeElement, h } from 'omi'

@tag('my-counter')
class MyCounter extends WeElement {
  static css = `
    span{
        color: red;
    }`

  count = 1

  sub = () => {
    this.count--
    this.update()
  }

  add = () => {
    this.count++
    this.update()
  }

  render() {
    return (
      <>
        <button onClick={this.sub}>-</button>
        <span>{this.count}</span>
        <button onClick={this.add}>+</button>
      </>
    )
  }
}
```

## 使用 Counter 组件

```tsx
import { render, h } from 'omi'
import './my-counter.tsx'

render((
  <div>
    <div>Component Demo</div>
    <my-counter />
  </div>
), 'body')
```

## 给 Counter 属性初始值

```tsx
class MyCounter extends WeElement {
  install () {
    this.count = this.props.count
  }
}
```

然后就可以使用了: 

```tsx
<my-counter count={10}/>
```


## 自定义事件

```tsx
  sub = () => {
    this.count--
    this.update()
    this.fire('count-changed', this.count)
  }

  add = () => {
    this.count++
    this.update()
    this.fire('count-changed', this.count)
  }
```

通过 `onCountChanged` 监听:

```tsx
<my-counter onCountChanged={this.onCountChanged} count={10}/>
```

## 查看所有注册的自定义元素

```js
console.log(Omi.elements)
```

恭喜你学习组件定义和使用了！