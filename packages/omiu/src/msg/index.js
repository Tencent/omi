import { define, WeElement } from 'omi'
import style from './_index.css'
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
        <o-icon type={props.type} scale={4} isFill color={ props.type === 'warn'?'#F95050':'#07C160'}/>
        <h2 className="title">{props.title}</h2>
        <p>{props.content}</p>
        <o-button type={button}>Ok</o-button>
        <o-button type="default">Cancel</o-button>
      </div>
    )
  }
})
