import { WeElement, define, render } from 'omi'
import '../../src/radio'
define('my-app', class extends WeElement {
  render() {
    return (
      <div>
         <o-radio checked label='label' name='abc' />
         <o-radio label='试试中文'  name='abc'  />
      </div>
       
  
    )
  }
})

render(<my-app />, 'body')
