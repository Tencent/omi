import { define, render, WeElement } from '../../src/omi'

define('my-component', class extends WeElement {
  static propTypes = {
    first: String,
    last: String
  }

  render(props) {
    return (
      <div>Hello, World! I'm {`${props.first}, ${props.last}`}</div>
    )
  }
})

render(<my-component first="dnt" last='zhang'/>, 'body')

