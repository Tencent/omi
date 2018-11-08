import { define, WeElement } from 'omi'
import '../style/global/index.css'
import icon from '../style/global/_icon.scss'
import style from '../style/_button.scss'

define('el-button', class extends WeElement {
  static pure = true

  css() {
    return icon + style
  }

  render(props, data) {
    let classStr = 'el-button'
    if (props.type) {
      classStr += ` el-button--${props.type}`
    }
    if (props.plain) {
      classStr += ' is-plain'
    }
    if (props.round) {
      classStr += ' is-round'
    }
    if (props.circle) {
      classStr += ' is-circle'
    }
    if (props.disabled) {
      classStr += ' is-disabled'
    }

    if (typeof data.position === 'string') {
      classStr += ' ' + data.position
    }

    if (props.size) {
      classStr += ' el-button--' + props.size
    }
    if (props.iconRight) {
      return (
        <button style={props.style} onClick={this.onClick} class={classStr}>
          <slot />
          {props.icon && <i class={props.icon} />}
        </button>
      )
    }

    return (
      <button style={props.style} onClick={this.onClick} class={classStr}>
        {props.icon && <i class={props.icon} />}
        <slot />
      </button>
    )
  }

  onClick = evt => {
    if (this.props.disabled) {
      evt.stopPropagation()
    }
  }

  install() {
    if (this.parentNode.nodeName === 'EL-BUTTON-GROUP') {
      for (let i = 0, len = this.parentNode.childNodes.length; i < len; i++) {
        if (this.parentNode.childNodes[i] === this) {
          if (i === 0) {
            this.data.position = 'first'
          } else if (i === len - 1) {
            this.data.position = 'last'
          } else {
            this.data.position = 'between'
          }

          break
        }
      }
    }
  }
})
