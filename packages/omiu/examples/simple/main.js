import { define, render, WeElement } from 'omi'
import '../../src/pagination'

define('my-app', class extends WeElement {
  data = { abc: 'abc', passToChild: 123 }

  onAbc = evt => {
    this.data.abc = ' by ' + evt.detail.name
    this.data.passToChild = 1234
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
        <o-pagination></o-pagination>
      </div>
    )
  }
})

render(<my-app name="Omi v4.0" />, 'body')
