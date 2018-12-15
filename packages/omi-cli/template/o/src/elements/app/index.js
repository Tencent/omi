import { define, WeElement } from 'omi'
import logo from './logo.svg'
import style from './_index.css'
import '../app-intro'

define('my-app', class extends WeElement {
  static observe = true

  data = { name :'Omio'}

  clickHandler = () => {
    this.data.name = 'Omio by Tencent'
  }

  css() {
    return style
  }

  render(props, data) {
    return (
      <div class="app">
        <header class="app-header">
          <img
            src={logo}
            onClick={this.clickHandler}
            class="app-logo"
            alt="logo"
          />
          <h1 class="app-title">Welcome to {data.name}</h1>
        </header>
        <app-intro />
      </div>
    )
  }
})
