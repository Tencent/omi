import { define, WeElement, classNames } from 'omi'
import css from './_index.css'
import '../button'
import '../icon'

define('o-popover', class extends WeElement {
  css() {
    return css
  }

  close = () => {
    this.props.onClose && this.props.onClose()
  }

  confirm = () => {
    this.props.onConfirm && this.props.onConfirm()
  }

  left = 0
  top = 0

  bodyClickHandler = () => {
    this.props.onClose && this.props.onClose()
  }

  installed() {
    document.body.addEventListener('mousedown', this.bodyClickHandler)
  }

  uninstall() {
    document.body.removeEventListener('mousedown', this.bodyClickHandler)
  }

  mouseDownHandler = (evt) => {
    evt.stopPropagation()
  }

  updated() {
    if (this.props.show) {
      const rectA = this.base.getBoundingClientRect()
      const rectB = this.props.target.getBoundingClientRect()

      let tempLeft, tempTop


      switch (this.props.direction) {
        case 'top-left':
          tempLeft = rectB.left + 'px'
          tempTop = (rectB.top - rectA.height - 10) + 'px'
          break
        case 'top':
          tempLeft = rectB.left + (rectB.width / 2 - rectA.width / 2) + 'px'
          tempTop = (rectB.top - rectA.height - 10) + 'px'
          break
        case 'top-right':
          tempLeft = rectB.left + rectB.width - rectA.width + 'px'
          tempTop = (rectB.top - rectA.height - 10) + 'px'
          break

        case 'left':
          tempLeft = rectB.left - rectA.width - 10 + 'px'
          tempTop = rectB.top + (rectB.height - rectA.height) / 2 + 'px'
          break
        case 'left-top':
          tempLeft = rectB.left - rectA.width - 10 + 'px'
          tempTop = rectB.top + 'px'
          break

        case 'left-bottom':
          tempLeft = rectB.left - rectA.width - 10 + 'px'
          tempTop = rectB.top + (rectB.height - rectA.height) + 'px'
          break

        case 'bottom-left':
          tempLeft = rectB.left + 'px'
          tempTop = (rectB.top + rectB.height + 10) + 'px'
          break
        case 'bottom':
          tempLeft = rectB.left + (rectB.width / 2 - rectA.width / 2) + 'px'
          tempTop = (rectB.top + rectB.height + 10) + 'px'
          break
        case 'bottom-right':
          tempLeft = rectB.left + rectB.width - rectA.width + 'px'
          tempTop = (rectB.top + rectB.height + 10) + 'px'
          break


        case 'right':
          tempLeft = rectB.left + rectB.width + 10 + 'px'
          tempTop = rectB.top + (rectB.height - rectA.height) / 2 + 'px'
          break
        case 'right-top':
          tempLeft = rectB.left + rectB.width + 10 + 'px'
          tempTop = rectB.top + 'px'
          break

        case 'right-bottom':
          tempLeft = rectB.left + rectB.width + 10 + 'px'
          tempTop = rectB.top + (rectB.height - rectA.height) + 'px'
          break
      }

      if (this.left !== tempLeft || this.top !== tempTop) {
        this.left = tempLeft
        this.top = tempTop
        this.update()
      }

    }
  }

  render(props) {
    if (!props.show) return

    const cls = classNames('_arrow', '_' + props.direction)
    return (
      <div class="o-popover" onMouseDown={this.mouseDownHandler} style={{ left: this.left, top: this.top }}>
        <div class={cls}></div>
        <div class="o-inner" >
          {props.children}
        </div>
      </div>

    )
  }
})
