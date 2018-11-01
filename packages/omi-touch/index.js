import { WeElement, define, getHost } from 'omi'
import Transform from 'css3transform'
import AlloyTouch from 'alloytouch'

class OmiTouch extends WeElement {
  install() {
    this.css = getHost(this).css
  }

  installed() {
    var target = this.host.firstChild

    Transform(target)

    new AlloyTouch({
      touch: this.host,
      vertical: this.props.vertical === false ? false : true,
      target: target,
      property: this.props.property || 'translateY',
      min: this.props.min,
      max: this.props.max,
      sensitivity: this.props.sensitivity,
      factor: this.props.factor,
      step: this.props.step,
      bindSelf: this.props.bindSelf,
      preventDefault: this.props.preventDefault === false ? false : true,
      change: this.props.change,
      touchStart: this.props.touchStart,
      touchMove: this.props.touchMove,
      touchEnd: this.props.touchEnd,
      tap: this.props.tap,
      pressMove: this.props.pressMove,
      animationEnd: this.props.animationEnd
    })
  }

  render() {
    return this.props.children[0]
  }
}

define('omi-touch', OmiTouch)
