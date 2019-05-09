import { define, WeElement } from 'omi'
import style from './_index.css'

define('o-toptip', class extends WeElement {
  static css = css

  hide() {
    clearTimeout(this.timer)
    this.props.hide && this.props.hide()
  }

  render(props) {
    let top = props.show ? '0' : '-42px'
    this.timer = setTimeout(() => {
      this.hide()
    }, 4000)
    const type = props.type
      ? `weui-toptip-${props.type}`
      : 'weui-toptip-primary'
    return (
      <div className={`ow-toptip ${type}`} style={{ top }}>
        {props.msg}
      </div>
    )
  }
})
