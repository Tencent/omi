import { define, WeElement } from 'omi'
import normalizeStyle from '../../../assets/_normalize.css'

define('home-page', class extends WeElement {
  static observe = true

  css() {
    return (
      normalizeStyle +
      'p { text-align: center; padding-top: 100px; font-size: 20px; }'
    )
  }
  render() {
    return <p>Home</p>
  }
})
