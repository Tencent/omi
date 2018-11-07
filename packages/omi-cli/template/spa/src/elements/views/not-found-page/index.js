import { define, WeElement } from 'omi'
import normalizeStyle from '../../../assets/_normalize.css'

define('not-found-page', class extends WeElement {
  static observe = true

  css() {
    return (
      normalizeStyle +
      '.not-found { text-align: center; padding-top: 100px; font-size: 20px; }'
    )
  }
  render() {
    return <p class="not-found">404 Not Found</p>
  }
})
