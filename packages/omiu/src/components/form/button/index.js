import { define, WeElement } from 'omi'
import css from './_index.css'

define('o-button', class extends WeElement {
  css() {
    return css
  }

  render(props, data) {
    return <a href="javascript:;" class={`o-btn ${props.type||'default'}`}>{props.children[0]}</a>
  }
})
