import * as css from './index.scss'
import { tag, WeElement, h } from 'omi'
import * as PhyScroll from 'phy-scroll'

interface Props {
  vertical: boolean
  min: number
  max: number
  sensitivity: number
  factor: number
  step: number
  bindSelf: boolean
  preventDefault: boolean
  onChange: () => void
  onTouchStart: () => void
  onTouchMove: () => void
  onTouchEnd: () => void
  onTap: () => void
  onPressMove: () => void
  onAnimationEnd: () => void
}


@tag('m-scroll')
export default class Scroll extends WeElement<Props> {
  static css = css

  static propTypes = {
    vertical: Boolean
  }

  installed() {
    new PhyScroll({
      touch: this.childNodes[0],
      vertical: this.props.vertical === false ? false : true,
      scroll: this.childNodes[0].firstChild,
      min: this.props.min,
      max: this.props.max,
      sensitivity: this.props.sensitivity,
      factor: this.props.factor,
      step: this.props.step,
      bindSelf: this.props.bindSelf,
      preventDefault: this.props.preventDefault === false ? false : true,
      change: this.props.onChange,
      touchStart: this.props.onTouchStart,
      touchMove: this.props.onTouchMove,
      touchEnd: this.props.onTouchEnd,
      tap: this.props.onTap,
      pressMove: this.props.onPressMove,
      animationEnd: this.props.onAnimationEnd
    })
  }

  render() {
    return <slot></slot>
  }
}