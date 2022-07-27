# Component

In this section, you will learn the definition and use of components.

## Define Counter Component

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

## Use Counter Component

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

## Initial prop value of counter

```tsx
class MyCounter extends WeElement {
  install () {
    this.count = this.props.count
  }
}
```

Then you can use it: 

```tsx
<my-counter count={10}/>
```


## Custom Event

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

Listen it through `onCountChanged`:

```tsx
<my-counter onCountChanged={this.onCountChanged} count={10}/>
```

## View all registered custom elements

```js
console.log(Omi.elements)
```

Congratulations on learning component definition and use!