import { WeElement, define, render } from 'omi'
import '../../src/input-label'
import '../../src/input-button'

define('my-app', class extends WeElement {

  valueA = 0
  valueB = 2
  valueC = 3.5

  onSelect = (value) => {
    this.valueA = value
    this.update()
  }

  render() {
    return (
      <div>
        <o-input-label label='UserName' />
        <br />
        <o-input-button buttonText='提交' />
        
      </div>
    )
  }
})

render(<my-app />, 'body')
