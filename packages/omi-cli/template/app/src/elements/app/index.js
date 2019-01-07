import { define, WeElement } from 'omi'
import logo from './logo.svg'
import style from './_index.css'
import '../app-intro'
import 'omiu/button'

define('my-app', class extends WeElement {
  name = 'Omi'

  clickHandler = () => {
    this.name = 'Omio'
    this.update()
  }

  css() {
    return style
  }

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
          <h1 class="app-title">Welcome to {this.name}</h1>
        </header>
        <app-intro />
        <o-button style='width:200px;'>I am omiu button.</o-button>
      </div>
    )
  }
})
