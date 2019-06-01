import { define, render, WeElement } from '../../src/omi'

define('my-element', class extends WeElement {

  render(props) {
    if (props.aa === 1) {
			console.log(333)
      return [<div>Hello</div>, <div>Element</div>, <div>Element2</div>]
		}
		console.log(222)
    return  <div>Element5</div>
  }
})


define('my-app', class extends WeElement {
	aa = 1
  installed() {
    setTimeout(() => {
      this.aa = 2
      this.update()
    }, 1000)
  }

  render(props) {
    return <my-element aa={this.aa}></my-element>
  }
})


render(<my-app />, 'body')
