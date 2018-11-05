import { define, WeElement } from 'omi'

import style from "../style/_dropdown.scss"

define('el-dropdown-menu', class extends WeElement {

  css() {
    return style
  }


  render(props, data) {
    return (
      <slot></slot>
    )
  }



})
