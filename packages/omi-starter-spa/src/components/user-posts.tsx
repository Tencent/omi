import { define, Component } from 'omi'
import './site-header'

define(
  'user-posts',
  class extends Component {
    render() {
      return (
        <>
          <h4>User Posts</h4>
          <p>Post 1</p>
          <p>Post 2</p>
          <p>Post 3</p>
        </>
      )
    }
  },
)
