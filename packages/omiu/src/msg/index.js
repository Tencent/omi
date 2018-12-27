import { define, WeElement } from 'omi'
import style from './_index.scss'
import '../icon'
import '../button'

define('o-msg', class extends WeElement {
  close() {
    this.props.close()
  }

  confirm() {
    this.props.confirm()
  }

  css() {
    return style
  }

  render(props) {
    const button = props.type === 'warn' ? 'warn' : 'primary'
    return (
      <div className="ow-msg">
        <ow-icon type={props.type} size='big'/>
        <h2 className="title">{props.title}</h2>
        <p>{props.content}</p>
        <ow-button type={button}>Ok</ow-button>
        <ow-button type="secondary">Cancel</ow-button>
      </div>
    )
  }
})
