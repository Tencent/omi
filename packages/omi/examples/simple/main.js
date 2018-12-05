import { define, render, WeElement } from '../../src/omi'
import './hello-element'

define('my-app', class extends WeElement {
  data = { abc: 'abc', passToChild: 123 }

  install() {
    this.dd = { a: 1 }
  }
  
  onAbc = evt => {
    this.data.abc = ' by ' + evt.detail.name
    this.data.passToChild = 1234
    this.dd.a++
    this.update()
  }

  css() {
    return `
         div{
             color: green;
         }`
  }

  render(props, data) {
    return (
      <div>
        Hello {props.name} {data.abc} {this.dd.a}
        <hello-element
          onAbc={this.onAbc}
          propFromParent={data.passToChild}
          dd={this.dd}
          msg="WeElement"
        />
      </div>
    )
  }
})

render(<my-app name="Omi v4.0" />, 'body')
