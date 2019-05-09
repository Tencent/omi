import { define, WeElement } from 'omi'
import css from './_index.css'
import '../button'
import '../icon'

define('o-popup', class extends WeElement {
  static css = css

  close = () => {
    this.props.onClose && this.props.onClose()
  }

  confirm = () => {
    this.props.onConfirm && this.props.onConfirm()
  }

  installed() {
    this.computeTop()
  }

  computeTop() {
    if (this.ctt) {
      this.ctt.style.top = (window.innerHeight - parseInt(getComputedStyle(this.ctt).height)) / 2 + 'px'
    }
  }

  afterUpdate() {
    this.computeTop()
  }

  render(props) {
    if (!props.show) return
    return (
      <div class="o-popup">
        <div class="_content" ref={(e) => { this.ctt = e }} style={`width:${props.width}px;margin-left:${props.width / -2}px`}>
          <div class="_header">
            <span class="_title">{props.title}</span>
            <o-icon class="_close" scale={1} type="close" onClick={this.close} />
          </div>
          <div class="_main">
            {props.children}
            <div class="_footer">
              <o-button size="small" type="default" onClick={this.close}>
                {props.cancelText}
              </o-button>
              <o-button
                size="small"
                class="_okBtn"
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
