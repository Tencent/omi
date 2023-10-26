import { define, Component } from 'omi'
import './site-header'
import { Router } from 'omi-router'
import { userState } from '../store'

define(
  'user-profile',
  class extends Component {
    router: Router | undefined

    render() {
      return (
        <>
          <h4>User Profile</h4>
          <p>Name: {userState.value.name}</p>
          <p>Name: {userState.value.age}</p>
          <p>Params: {JSON.stringify(this.router?.params)}</p>
          <p>Query: {JSON.stringify(this.router?.query)}</p>
        </>
      )
    }
  }
)
