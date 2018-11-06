import { tag, render, WeElement } from '../../src/omi'

@tag('hello-element')
class HelloElement extends WeElement {
  render(props) {
    const { count } = props
    return [<div>Hello</div>, <div>Element</div>,<div>{count}</div>]
  }
}

@tag('my-app')
class MyApp extends WeElement {
  data = {
    count: 1
  }
  render() {
    return [<hello-element />, <hello-element />, <div>abc</div>]
  }

  installed() {
    setInterval(() => {
      this.data.count++
      this.update()
    })
  }
}

render(<my-app />, 'body')
