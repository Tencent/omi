import { tag, render, WeElement } from '../../src/omi'

@tag('hello-element')
class HelloElement extends WeElement {
  render() {
    return [<div>Hello</div>, <div>Element</div>]
  }
}

@tag('my-app')
class MyApp extends WeElement {
  render() {
    return [<hello-element />, <hello-element />, <div>abc</div>]
  }
}

render(<my-app />, 'body')
