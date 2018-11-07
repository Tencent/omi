import { define, WeElement } from 'omi'
import logo from './logo.png'
import style from './_index.css'
import normalizeStyle from '../../../assets/_normalize.css'

define('app-frame', class extends WeElement {
  static get data() {
    return { name: '' }
  }

  static observe = true

  data = {
    name: 'Omi SPA'
  }

  css() {
    return normalizeStyle + style
  }

  install() {}

  getRenderedNav(props, data) {
    let mainNav = []
    for (let nav of props.routeList) {
      if (nav.path !== '*') {
        mainNav.push(
          <li class={nav.selected ? 'selected' : ''}>
            <a href={'#' + nav.path}>{nav.label}</a>
          </li>
        )
      }
    }
    return mainNav
  }

  render(props, data) {
    let mainNav = this.getRenderedNav(props, data)
    return (
      <div class="app">
        <header class="app-header">
          <h1 class="app-title">
            <a href="#/">
              <img src={logo} class="app-logo" alt="logo" />
              {this.data.name}
            </a>
          </h1>
          <nav class="main-nav">
            <ul>{mainNav}</ul>
          </nav>
          <div class="user-info">
            <a href="#/not-found">
              <p class="username">
                username
                <img src={logo} class="avatar" />
              </p>
            </a>
          </div>
        </header>
        <div class="page-container">
          <div class="page-content">
            <slot name="page-content" />
          </div>
        </div>
        <footer>
          <p>Omi router sample SPA</p>
        </footer>
      </div>
    )
  }
})
