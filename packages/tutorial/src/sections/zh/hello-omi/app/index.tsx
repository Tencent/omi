import { tag, WeElement, h, render } from 'omi'

@tag('hello-omi')
class HelloOmi extends WeElement {
  render(props) {
    return (
      <div id="app">
        <h1>Hello {props.msg}!</h1>
      </div>
    )
  }
}

render(<hello-omi msg='Omi' />, 'body')