import {define, WeElement} from 'omi'
import '../style/global/index.css'
import style from '../style/_badge.scss'

define('el-badge', class extends WeElement {

  static pure = true

  css() {
    return style
  }

  render(props, data) {
    const {value, max, isDot, isHidden} = props;

    let classStr = 'el-badge__content'
    if (this.childNodes.length != 0) {
      classStr += ` is-fixed`
    }
    if (!!isDot) {
      classStr += ` is-dot`
    }

    let content
    if (isDot) {
      content = null
    } else {
      if (typeof value === 'number' && typeof max === 'number') {
        content = max < value
          ? `${max}+`
          : value
      } else {
        content = value
      }
    }

    const supDOM = !isHidden && (content || isDot)
      ? (
        <sup class={classStr}>{content}</sup>
      )
      : null;

    return (
      <div class="el-badge">
        <slot></slot>
        {supDOM}
      </div>
    )
  }
})
