import { define, WeElement } from 'omi'
import logo from './logo.svg'
import style from './_index.css'
import '../app-intro'
import 'omi-weui/button'

define('my-app', class extends WeElement {
  static get data() {
    return { name: '' }
  }

  clickHandler = () => {
    this.store.rename('Omi V5.0')
  }

  css() {
    return style
  }

  render(props, data, store) {
    return (
      <div class="app">
       <ow-button type="primary">primary</ow-button>
        <header class="app-header">
          <img
            src={logo}
            onClick={this.clickHandler}
            class="app-logo"
            alt="logo"
          />
          <h1 class="app-title">Welcome to {store.data.name}</h1>
        </header>
        <app-intro />
      </div>
    )
  }
})
