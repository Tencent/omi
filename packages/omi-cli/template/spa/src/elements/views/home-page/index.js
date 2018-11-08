import { define, WeElement } from 'omi'
import normalizeStyle from '../../../assets/_normalize.css'

define('home-page', class extends WeElement {
  static observe = true

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
        <p>Hi Welcome to Omi.</p>
        <p>The Next Generation Web Framework in 4kb JavaScript.</p>
        <a href="https://github.com/Tencent/omi">learn more about Omi</a>
      </div>
    )
  }
})
