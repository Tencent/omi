import { h, tag, classNames, WeElement, createRef } from 'omi'
import circleAdapter from '../_common/js/loading/circle-adapter'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'
@tag('t-loading-gradient')
export default class GradientLoading extends WeElement {
  static css = css
  conicRef = createRef()
  static isLightDOM = true
  // ref={this.conicRef} not used
  useCircleAdapter = () => {
    const el = this.conicRef.current as HTMLElement
    circleAdapter(el)
  }

  installed() {
    this.useCircleAdapter()
  }
  render() {
    const gradientClass = TdClassNamePrefix('loading__gradient')
    return (
      <svg
        className={classNames(gradientClass, TdClassNamePrefix('icon-loading'))}
        viewBox="0 0 12 12"
        version="1.1"
        width="1em"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="0" y="0" width="12" height="12">
          <div class={TdClassNamePrefix(`loading__gradient-conic`)} ref={this.conicRef} />
        </foreignObject>
      </svg>
    )
  }
}
