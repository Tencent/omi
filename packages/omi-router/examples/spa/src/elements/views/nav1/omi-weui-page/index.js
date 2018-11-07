import { define, WeElement } from 'omi'
import normalizeStyle from '../../../../assets/_normalize.css'

define('omi-weui-page', class extends WeElement {
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
        <p>WeUI Components build with Omi is coming soon</p>
        <a href="https://github.com/omijs/omi-weui">
          learn more about omi-weui
        </a>
      </div>
    )
  }
})
