import { define, WeElement } from 'omi'
import style from './_index.scss'
import '../mask'

define('ow-msg', class extends WeElement {
  close() {
    this.props.close()
  }

  confirm(){
    this.props.confirm()
  }

  css() {
    return style
  }

  render(props) {
    return (
      <div className="ow-msg">

      </div>
    )
  }
})


