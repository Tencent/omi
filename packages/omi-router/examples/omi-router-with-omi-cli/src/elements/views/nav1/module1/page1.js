import { define, WeElement } from 'omi'
import normalizeStyle from '../../../../assets/_normalize.css'

define('nav1-module1-page1', class extends WeElement {
  static observe = true
  install() {
    this.fire('pageloaded')
  }
  css() {
    return normalizeStyle
  }
  render() {
    return <p>page one is here</p>
  }
})
