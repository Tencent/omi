import { define, WeElement } from 'omi'
import style from './_index.scss'

define('ow-toptip', class extends WeElement {
  css() {
    return style
  }
  hide(){
    this.props.hide()
  }
  render(props) {
    let display = props.show ? 'block' : 'none'
    let top = props.show ? '0' : '-40px'
    setTimeout(() => {
      this.hide()
    }, 4000)
    const type = props.type
      ? `weui-toptip-${props.type}`
      : 'weui-toptip-primary'
    return (
      <div className={`ow-toptip ${type}`} style={{top}}>
        {props.msg}
      </div>
    )
  }
})
