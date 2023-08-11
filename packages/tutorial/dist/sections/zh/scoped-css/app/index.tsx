import { tag, WeElement, render, h } from 'omi'

@tag('hello-omi')
class HelloOmi extends WeElement {
  static css = `span { color: #07c160 } `

  render(props) {
    return (
      <p>Hello, <span>{props.msg}</span>!</p>
    )
  }
}

render(<hello-omi msg='Omi' />, 'body')