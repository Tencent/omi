import { define, render, WeElement } from '../../src/omi'

define('hello-element', class extends WeElement {
  installed() {
    setTimeout(() => {
      this.aa = 1
      this.update()
    }, 1000)
  }

  render(props) {
    if (this.aa === 1) {
      return [<div>Hello</div>, <div>Element</div>, <div>Element222</div>]
    }
    return [<div>Hello2</div>, <div>Element</div>]
  }
})

define('my-app',class extends WeElement {

  render(props){
    return (
      <div>
        <hello-element/>
        <div>111111</div>
      </div>
    )
  }
})

render(<my-app />, 'body')
