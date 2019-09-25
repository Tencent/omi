import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import { domReady } from '../util/dom-ready'
//@ts-ignore
import '../theme.ts'

interface Props {
  to: string
  direction: string
  x: number
  y: number
  gutter: number
  //transition: string
}

@tag('m-locate')
export default class Locate extends WeElement<Props>{
  static css = css

  static defaultProps = {
    x: 0,
    y: 0,
    gutter: 4
  }

  static propTypes = {
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

  install() {
    domReady(() => {
      this._setPosition()
    })
  }

  _setPosition() {
    const root = this.getScopeRoot(this)
    const ele = root.querySelector(this.props.to)
    const rectA = this.shadowRoot.querySelector('.root').getBoundingClientRect()
    const rectB = ele.getBoundingClientRect()

    let tempLeft, tempTop
    let st = document.documentElement.scrollTop || document.body.scrollTop
    let sl = document.documentElement.scrollLeft || document.body.scrollLeft

    const gutter = this.props.gutter
    switch (this.props.direction) {
      case 'top-left':
        tempLeft = rectB.left
        tempTop = (rectB.top - rectA.height - gutter)
        break
      case 'top':
        console.log(11)
        tempLeft = rectB.left + (rectB.width / 2 - rectA.width / 2)
        tempTop = (rectB.top - rectA.height - gutter)
        break
      case 'top-right':
        tempLeft = rectB.left + rectB.width - rectA.width
        tempTop = (rectB.top - rectA.height - gutter)
        break

      case 'left':
        tempLeft = rectB.left - rectA.width - gutter
        tempTop = rectB.top + (rectB.height - rectA.height) / 2
        break
      case 'left-top':
        tempLeft = rectB.left - rectA.width - gutter
        tempTop = rectB.top
        break

      case 'left-bottom':
        tempLeft = rectB.left - rectA.width - gutter
        tempTop = rectB.top + (rectB.height - rectA.height)
        break

      case 'bottom-left':
        tempLeft = rectB.left
        tempTop = (rectB.top + rectB.height + gutter)
        break
      case 'bottom':
        tempLeft = rectB.left + (rectB.width / 2 - rectA.width / 2)
        tempTop = (rectB.top + rectB.height + gutter)
        break
      case 'bottom-right':
        tempLeft = rectB.left + rectB.width - rectA.width
        tempTop = (rectB.top + rectB.height + gutter)
        break


      case 'right':
        tempLeft = rectB.left + rectB.width + gutter
        tempTop = rectB.top + (rectB.height - rectA.height) / 2
        break
      case 'right-top':
        tempLeft = rectB.left + rectB.width + gutter
        tempTop = rectB.top
        break

      case 'right-bottom':
        tempLeft = rectB.left + rectB.width + gutter
        tempTop = rectB.top + (rectB.height - rectA.height)
        break
    }

    tempLeft = tempLeft + this.props.x + sl + 'px'
    tempTop = tempTop + this.props.y + st + 'px'

    this.style.left = tempLeft
    this.style.top = tempTop

  }

  updated(){
    this._setPosition()
  }

  render(props) {
    return (
      <div class='root' style={{ display: props.show ? 'block' : 'none' }}>
        <slot></slot>
      </div>
    )
  }
}
