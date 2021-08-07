## H / H.F / JSX

JSX is the best UI expression with the least grammatical noise, the strongest expressive ability and Turing complete. The template engine is not complete, the template string is Turing complete, but the grammatical noise is too big. 

```jsx
import { WeElement, h } from 'omi'

class Test extends WeElement {

  render() {
    return (
      //<h.f></h.f> or <></>  are supported
      <h.f>
        <h1>Test</h1>
        <p>Test</p>
      </h.f>
    )
  }
}
```

## Hello JSX

With JSX, closed XML tags can be written in JS to express DOM structures, such as:

```jsx
const element = <h1>Hello, world!</h1>
```

## Data binding

Variables or expressions, or JS statement blocks, are wrapped in single parentheses according to the binding:

```jsx
<h1>{user.name}</h1>
```

Try it in Omi's render method:

```jsx
define('my-element', class extends WeElement {
  render(props) {
    return <h1>{props.name}</h1>
  }
})
```

Using element:

```jsx
<my-element name='dntzhang' />
```

You can also write expressions:

```jsx
<h1>{user.age > 18 ? 'Adult' : 'Minor'}<h1>
```

JSX can also be embedded in expressions:

```jsx
<h1>{ user.age > 18 ? <div>Adult</div> : <div>Minor</div> }<h1>
```

The above three elements are actually if else. If only if, you can:

```jsx
<h1>{ user.age > 18 && <div>成年</div> }<h1>
```

Powerful!

## List rendering

Datasource:

```js
const arr = [{
  message: 'foo',
}, {
  message: 'bar'
}]
```

JSX rendering:

```jsx
<ul>
  {arr.map(item =>
    <li>{item.message}</li>
  )}
</ul>
```

Equate to:

```jsx
<ul>
  {
    arr.map(item => {
      return <li>{item.message}</li>
    })
  }
</ul>
```

If it's a `{}'package, you need `return'. If you need an index:

```jsx
<ul>
  {arr.map((item, index) =>
    <li>{index}: {item.message}</li>
  )}
</ul>
```

## Comprehensive example

Here is a ninety-nine multiplication table:

```jsx
import { define, render, WeElement } from 'omi'

define('my-app', class extends WeElement {

  static css = `span{
    display: inline-block;
    width: 68px;
  }`

  render(props) {
    return (
      <div>
        {props.numbers.map((a, indexA) =>
          <div>
            {
              props.numbers.map((b, indexB) => {
                return indexA <= indexB && <span>{a}*{b}={a * b} </span>
              })
            }
          </div>
        )}
      </div>
    )
  }
})

render(<my-app numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />, 'body')
```

Result display:

![](https://github.com/Tencent/omi/raw/master/assets/99.jpg)

[→ Online Demo](https://tencent.github.io/omi/packages/omi/examples/99/)
