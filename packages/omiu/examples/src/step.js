import { WeElement, define, render } from 'omi'
import '../../src/step'


define('my-app', class extends WeElement {


  render() {
    return (
      <o-step
        
      />
    )
  }
})

render(<my-app />, 'body')
