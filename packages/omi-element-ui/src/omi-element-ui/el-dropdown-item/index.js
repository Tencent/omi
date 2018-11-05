import { define, WeElement } from "omi";
import style from "../style/_dropdown.scss"

define('el-dropdown-item', class extends WeElement {
  css() {
    return style
  }

  install() {

  }

  render(props, data) {
    return (
      <li class="el-dropdown-menu__item">
        <slot></slot>
      </li>
    )
  }

})
