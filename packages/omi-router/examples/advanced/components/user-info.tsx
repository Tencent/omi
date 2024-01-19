import { define, Component } from 'omi'

define(
  'user-info',
  class extends Component {
    render() {
      return (
        <>
          <h2>User Info</h2>
          <slot />
        </>
      )
    }
  },
)
