import { define, WeElement } from 'omi'
import css from './_index.css'
import '../button'
import '../icon'

define('o-popup', class extends WeElement {
  css() {
    return css
  }

  close = () => {
    this.props.onClose && this.props.onClose()
  }

  confirm = () => {
    this.props.onConfirm && this.props.onConfirm()
  }

  render(props) {
    if (!props.show) return
    return (
      <div class="o-popup">
        <div class="content" style={`width:${props.width}px;margin-left:${props.width/-2}px`}>
          <div class="header">
            <span class="title">{props.title}</span>
            <o-icon class="close" scale={1} type="close" onClick={this.close} />
          </div>
          <div class="main">
            {props.children}
            <div class="footer">
              <o-button size="small" type="default" onClick={this.close}>
                {props.cancelText}
              </o-button>
              <o-button
                size="small"
                class="okBtn"
                onClick={this.confirm}
                type="primary"
              >
                {props.confirmText}
              </o-button>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
