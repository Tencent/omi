import { tag, WeElement, classNames, h } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import '../theme.ts'

interface Props {
  show: boolean;
  x: number,
  y: number,
  direction: string,
  target: string | HTMLElement 
}

@tag('m-popover')
export default class Popover extends WeElement<Props, {}> {
  static css = css

  static defaultProps = {
    x: 0,
    y: 0
  }

  static propTypes = {
    show: Boolean,
    x: Number,
    y: Number,
    direction: String,
    target: String
  }

  close = () => {
    this.fire('close')
  }

  confirm = () => {
    this.fire('confirm')
  }

  left = 0
  top = 0

  _docClickHandler = () => {
    //omi mode
    if(this['__omiattr_']){
      this.props.show = false
      this['__omiattr_'].show = false
    }
    //html element mode
    this.removeAttribute('show') 

    this.fire('close')
  }
  
  uninstall() {
    document.removeEventListener('mousedown', this._docClickHandler)
  }

  mouseDownHandler = (evt) => {
    evt.stopPropagation()
  }

  updated() {
    this._setPosition()
  }

  installed() {
    document.addEventListener('mousedown', this._docClickHandler)
    this._setPosition()
  }

  getScopeRoot(current) {
    while (true) {
      const p = current.parentNode
      if (p) {
        current = p
      } else {
        return current
      }
    }
  }

  _setPosition() {
    if (this.props.show) {
      const rectA = this.shadowRoot.querySelector('.m-popover').getBoundingClientRect()
      const rectB = (typeof this.props.target === 'string' ? this.getScopeRoot(this).querySelector(this.props.target):this.props.target).getBoundingClientRect()

      let tempLeft, tempTop
      let st = document.documentElement.scrollTop || document.body.scrollTop


      switch (this.props.direction) {
        case 'top-left':
          tempLeft = rectB.left
          tempTop = (rectB.top - rectA.height - 10)
          break
        case 'top':
          tempLeft = rectB.left + (rectB.width / 2 - rectA.width / 2)
          tempTop = (rectB.top - rectA.height - 10)
          break
        case 'top-right':
          tempLeft = rectB.left + rectB.width - rectA.width
          tempTop = (rectB.top - rectA.height - 10)
          break

        case 'left':
          tempLeft = rectB.left - rectA.width - 10
          tempTop = rectB.top + (rectB.height - rectA.height) / 2
          break
        case 'left-top':
          tempLeft = rectB.left - rectA.width - 10
          tempTop = rectB.top
          break

        case 'left-bottom':
          tempLeft = rectB.left - rectA.width - 10
          tempTop = rectB.top + (rectB.height - rectA.height)
          break

        case 'bottom-left':
          tempLeft = rectB.left
          tempTop = (rectB.top + rectB.height + 10)
          break
        case 'bottom':
          tempLeft = rectB.left + (rectB.width / 2 - rectA.width / 2)
          tempTop = (rectB.top + rectB.height + 10)
          break
        case 'bottom-right':
          tempLeft = rectB.left + rectB.width - rectA.width
          tempTop = (rectB.top + rectB.height + 10)
          break


        case 'right':
          tempLeft = rectB.left + rectB.width + 10
          tempTop = rectB.top + (rectB.height - rectA.height) / 2
          break
        case 'right-top':
          tempLeft = rectB.left + rectB.width + 10
          tempTop = rectB.top
          break

        case 'right-bottom':
          tempLeft = rectB.left + rectB.width + 10
          tempTop = rectB.top + (rectB.height - rectA.height)
          break
      }

      tempLeft = tempLeft + this.props.x + 'px'
      tempTop = tempTop + this.props.y + st + 'px'

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
    const { style, ...other } = props
    return (
      <div class="m-popover" onMouseDown={this.mouseDownHandler} style={{ left: this.left, top: this.top, ...style }}  {...other}>
        <div class={cls}></div>
        <div class="m-inner">
          <slot></slot>
        </div>
      </div>
    )
  }
}
