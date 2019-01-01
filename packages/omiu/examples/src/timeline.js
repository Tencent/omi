import { WeElement, define, render } from 'omi'
import '../../src/checkbox'
define('my-app', class extends WeElement {
  render() {
    return (
      <div>
         <o-checkbox checked label='label' />
         <o-checkbox label='试试中文' />
      </div>
       
  
    )
  }
})

render(<my-app />, 'body')
