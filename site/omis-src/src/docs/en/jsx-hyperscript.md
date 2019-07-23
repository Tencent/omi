## JSX and Hyperscript

JSX and Hyperscript is the best UI expression with the least grammatical noise, the strongest expressive ability and Turing complete. The template engine is not complete, the template string is Turing complete, but the grammatical noise is too big. 

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

Hyperscript version:

```js
h('h1', {}, user.name)
```

Try it in Omis:

```jsx
const Comp = props => <h1>{props.name}</h1>
```

Using Comp:

```jsx
<Comp name='omis' />
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
<h1>{ user.age > 18 && <div>Adult</div> }<h1>
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
import { render, h } from 'omis'

const MultiplicationTable = props =>
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


MultiplicationTable.css = `
span{
  display: inline-block;
  width: 68px;
}
`

render(<MultiplicationTable numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />, 'body')
```

Result display:

![](https://github.com/Tencent/omi/raw/master/assets/99.jpg)

[→ Online Demo](https://codepen.io/dntzhang-the-typescripter/pen/qebEOq)

It can also be implemented directly with hyperscript:

```js
const MultiplicationTable = props =>
  h('div', {}, props.numbers.map((a, indexA) =>
    h('div', {}, props.numbers.map((b, indexB) =>
      indexA <= indexB && h('span', {}, `${a}*${b}=${a * b}`)
    ))
  ))
```