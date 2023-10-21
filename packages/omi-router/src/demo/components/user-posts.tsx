import { define, Component } from 'omi'

define('user-posts', class extends Component {
  render() {
    return (
      <>
        <h3>User Posts</h3>
        <p>Post 1</p>
        <p>Post 2</p>
        <p>Post 3</p>
      </>
    )
  }
})