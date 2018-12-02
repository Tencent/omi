import { define, WeElement } from 'omi'
import style from './_index.scss'

define('ow-button', class extends WeElement {
  css() {
    return style
  }
  render(props) {
    const disabled = props.disabled ? 'weui-button-disabled' : null
    const size = props.size&&props.size==='small'?'weui-button-small':'weui-button'
    const type = props.type?`weui-button-${props.type}`:'weui-button-primary'
    return (
      <div className="ow-button">
        <button className={`${size} ${type} ${disabled}`}>
          {props.children}
        </button>
      </div>
    )
  }
})
