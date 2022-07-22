import { tag, render, h, WeElement } from 'omi'

@tag('hello-world')
class HelloWorld extends WeElement {
  render() {
    return (
      <div id="app">
        <h1>Hello World!</h1>
      </div>
    )
  }
}

render(<hello-world></hello-world>, 'body')