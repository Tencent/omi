import { define, WeElement } from 'omi'
import logo from './omi.png'
import css from './_index.css'
import '../app-intro'

define('my-app', class extends WeElement {

  use = ['name']

  clickHandler = () => {
    this.store.rename('Omio by Tencent')
  }

  static css = css

  render() {
    return (
      <div class="app">
        <header class="app-header">
          <img
            src={logo}
            onClick={this.clickHandler}
            class="app-logo"
            alt="logo"
          />
          <h1 class="app-title">Welcome to {this.store.data.name}</h1>
        </header>
        <app-intro />
      </div>
    )
  }
})
