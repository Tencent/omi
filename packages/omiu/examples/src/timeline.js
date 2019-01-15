import { WeElement, define, render } from 'omi'
import '../../src/rate'

define('my-app', class extends WeElement {
  render() {
    return (
      <div>
        <o-rate />
      </div>
    )
  }
})

render(<my-app />, 'body')
