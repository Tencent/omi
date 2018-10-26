import { tag, render, WeElement } from "../../src/omi"

@tag("hello-element")
class HelloElement extends WeElement {
  render() {
    return (
      <div onClick={this.onClick}>
        <p>
          <slot name="my-text">My default text</slot>
        </p>
      </div>
    )
  }
}

@tag("my-app")
class MyApp extends WeElement {
  render() {
    return (
      <div>
        <hello-element>
          <span slot="my-text">Let's have some different text!</span>
        </hello-element>
      </div>
    )
  }
}

render(<my-app />, "body")
