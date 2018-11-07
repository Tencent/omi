import { define, WeElement } from 'omi'
import normalizeStyle from '../../../../assets/_normalize.css'

define('omi-router-page', class extends WeElement {
  static observe = true
  install() {}
  css() {
    return (
      normalizeStyle +
      'div { text-align: center; padding-top: 100px; font-size: 20px; }' +
      'a { color: #1890FF; font-size: 14px;}'
    )
  }
  render() {
    return (
      <div>
        <p>
          omi-router is the Omi official router plugin of Omi.
          <br />
          it's lightweight, easy and powerful to build Omi's SPA(Single Page
          Application)
        </p>
        <a href="https://github.com/Tencent/omi/tree/master/packages/omi-router">
          learn more about omi-router
        </a>
      </div>
    )
  }
})
