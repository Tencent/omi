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

  updated() {
    if (this.props.show) {
      const rectA = this.base.getBoundingClientRect()
      const rectB = this.props.target.getBoundingClientRect()

      let tempLeft, tempTop


      switch (this.props.direction) {
        case 'left-top':
          tempLeft = rectB.left + 'px'
          tempTop = (rectB.top - rectA.height - 10) + 'px'
          break
        case 'top':
          tempLeft = rectB.left + (rectB.width / 2 - rectA.width / 2) + 'px'
          tempTop = (rectB.top - rectA.height - 10) + 'px'
          break
        case 'right-top':
          tempLeft = rectB.left +rectB.width - rectA.width  + 'px'
          tempTop = (rectB.top - rectA.height - 10) + 'px'
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
      <div class="o-popover" style={{ left: this.left, top: this.top }}>
        <div class={cls}></div>
        <div class="o-inner" >
          {props.children}
        </div>
      </div>

    )
  }
})
