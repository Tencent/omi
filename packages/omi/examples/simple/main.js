import { define } from '../../src/omi'

define('my-component', _ =>
  <div>
    Hello, World! I'm {_.props.first}, {_.props.last}
  </div>, {
    propTypes: {
      first: String,
      last: String
    }
  }
)


