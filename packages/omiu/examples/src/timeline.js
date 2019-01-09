import { WeElement, define, render } from 'omi'
import '../../src/button'
import '../../src/row'

define('my-app', class extends WeElement {

  css(){
    return `.col{
      background:red;
    }`
  }
  render() {
    return (
      <div>
        <o-row>
          <col class='col' span={12}>col span 12</col>
          <col class='col' span={12}>col span 12</col>
        </o-row>
      </div>


    )
  }
})

render(<my-app />, 'body')
