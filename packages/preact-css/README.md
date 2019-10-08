## preact-css

> Scoped css with pure css string for [preact](https://github.com/preactjs/preact), inspired by [omi](https://github.com/Tencent/omi).

Install it now:

```bash
npm i preact-css
```

## Usage

```jsx
import * as Preact from 'preact'
import 'preact-css'

function Comp() {
  return (
    <>
      <h1>Hello Preact X</h1>
      <div>Hello Preact CSS</div>
    </>
  )
}

Comp.css = `
h1{
  color: red;
}
`

Preact.render(<Comp />, document.querySelector('#root'))
```

Work with class component:

```jsx
class Comp extends Preact.Component {
  static css = `
h1{
  color: green;
}
`

  render() {
    return (
      <>
        <h1>I'm green</h1>
        <div>I'm black</div>
      </>
    )
  }
}

Preact.render(<Comp />, document.querySelector('#root'))
```

## How to use rpx unit like omi ?

Super easy:

```jsx
function rpx(css) {
  return css.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, (a, b) => {
    return (window.innerWidth * Number(b)) / 750 + 'px'
  })
}

Comp.css = rpx(`
h1{
  font-size: 10rpx;
}
`)
```

## How to import css string from css file?

If you don't want to write CSS in JS, you can use [to-string-loader](https://www.npmjs.com/package/to-string-loader) of webpack,
For example, the following configuration:

```js
{
  test: /[\\|\/]_[\S]*\.css$/,
  use: [
    'to-string-loader',
    'css-loader'
  ]
}
```

If your CSS file starts with "`_`", CSS will use `to-string-loader`, such as:

```jsx
class Comp extends Preact.Component {
  static css = require('./_index.css')

  //or using rpx in runtime
  //static css = rpx(require('./_index.css'))

  render() {
    return (
      <>
        <h1>I'm green</h1>
        <div>I'm black</div>
      </>
    )
  }
}

Preact.render(<Comp />, document.querySelector('#root'))
```

## Related links

* [Preact issue - Scoped css with pure css string](https://github.com/preactjs/preact/issues/1898)

## License

MIT © Tencent