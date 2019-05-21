import logo from './logo.svg'
import * as css from './_my-app.css'
import { define, WeElement } from 'omi'
import '@omim/core/button'

define('my-app', class extends WeElement {
  static css = css

  render() {
    return <div class="app">
      <m-button>button</m-button>
    </div>
  }
})
