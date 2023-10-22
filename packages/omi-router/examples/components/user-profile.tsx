import { define, Component, SignalValue } from 'omi'
import { Router } from '../../src/router'

define('user-profile', class extends Component {
  userProfile: SignalValue<{name: string, age: number}> | null = null
  router: Router | undefined

  render() {
    return (
      <>
        <h3>User Profile</h3>
        <p>Name: {this.userProfile?.value?.name} , Age: {this.userProfile?.value?.age}</p>
        <p>Query: {JSON.stringify(this.router?.query)}</p>
        <p>Params: {JSON.stringify(this.router?.params)}</p>
        <p>Hash: {JSON.stringify(this.router?.hash)}</p>
      </>
    )
  }
})