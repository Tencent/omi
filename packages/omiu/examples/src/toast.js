import { WeElement, define, render } from 'omi'
import '../../src/progress'

define('my-app', class extends WeElement {
  render() {
    return (
      <o-progress bgColor="#ccc" innerColor="#07C160" value={50} />
    )
  }
})

render(<my-app />, 'body')
