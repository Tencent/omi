import { define, render, WeElement } from '../../src/omi'

define('hello-element', class extends WeElement {
  installed() {
    setTimeout(() => {
      this.aa = 1
      this.update()
      setTimeout(() => {
        this.aa = 2
        this.update()        
      }, 3000);
    }, 1000)
  }

  render(props) {
    if (this.aa === 1) {
      return [<div>Hello</div>, <div>Element</div>, <div>Element222</div>]
    }
    if(this.aa === 2) {
      return [<div>last</div>]
    }
    return [<div>Hello2</div>, <div>Element</div>]
  }
})

define('my-app',class extends WeElement {

  render(props){
    return [
        <hello-element/>,
        <div>111111</div>
    ]
  }
})

render(<my-app />, 'body')
