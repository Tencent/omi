import { define, WeElement } from 'omi'
import normalizeStyle from '../../../../assets/_normalize.css'

define('nav1-module2-page1', class extends WeElement {
  static observe = true
  install() {
    setTimeout(() => {
      this.fire('pageloaded')
    }, 3000)
  }
  css() {
    return normalizeStyle
  }
  render() {
    return <p>page one is here</p>
  }
})
