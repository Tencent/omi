import { WeElement, define, render } from 'omi'
import '../../src/input-label'
import '../../src/input-button'

define('my-app', class extends WeElement {

  onClick = (e, value) => {
    console.log(value)
  }

  render() {
    return (
      <div>
        <o-input-label label='UserName' />
        <br />
        <o-input-button buttonText='提交' onClick={this.onClick} />
        
      </div>
    )
  }
})

render(<my-app />, 'body')
