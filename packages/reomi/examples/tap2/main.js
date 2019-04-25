import { define, render, WeElement } from '../../src/omi'
import './hello-element'

define('my-app', class extends WeElement {
  data = { abc: 'abc', passToChild: 123 }

  onAbc = evt => {
    this.data.abc = ' by ' + evt.detail.name
    this.data.passToChild = 1234
    this.aa = !this.aa
    this.update()
  }

  css() {
    return `
         div{
             color: green;
         }`
  }
  onTap = evt => {
    console.log('tap', evt)
    this.update()
  }

  render(props, data) {
    return (
      <div>
        {this.aa ? (
          <div onTap={this.onTap}>
            Hello {props.name} {data.abc}
          </div>
        ) : (
          <div>
            Hello {props.name} {data.abc}
            22
          </div>
        )}
        <hello-element
          onAbc={this.onAbc}
          propFromParent={data.passToChild}
          msg="WeElement"
        />
      </div>
    )
  }
})

render(<my-app name="Omi v4.0" />, 'body')
