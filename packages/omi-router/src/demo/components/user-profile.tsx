import { define, Component } from 'omi'

define('user-profile', class extends Component {

  render() {
    return (
      <>
        <h3>User Profile</h3>
        <p>Id: {this.router.params.id}, Age: 18</p>
        <p>Query: {JSON.stringify(this.router.query)}</p>
      </>
    )
  }
})