import { define, WeElement } from 'omi'
import style from './_index.css'
import '../mask'

define('o-confirm', class extends WeElement {
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
    const display = props.show ? 'block' : 'none'
    return (
      <div className="wrap" style={{ display }}>
        <div className="ow-dialog">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          {props.type === 'confirm' ? (
            <div>
              <a className="close" onClick={this.close}>
                取消
              </a>
              <a className="ok" onClick={this.confirm}>确定</a>
            </div>
          ) : (
            <a className="ok" onClick={this.confirm}>确定</a>
          )}
        </div>
        <ow-mask show={props.show} />
      </div>
    )
  }
})
