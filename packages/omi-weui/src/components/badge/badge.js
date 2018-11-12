import { define, WeElement } from 'omi'
import classNames from '../../utils/classnames'

const presetStyles = {
  default: {},
  header: {
    position: 'absolute',
    top: '-.4em',
    right: '-.4em'
  },
  body: {
    marginLeft: '5px'
  },
  footer: {
    marginLeft: '5px',
    marginRight: '5px'
  }
}
/**
 * Small status descriptors for UI elements.
 *
 */

define('ow-badge', class extends WeElement {
  
  static defaultProps = {
    dot: false,
    preset: 'default'
  }

  render() {
    const { children, className, dot, style, preset, ...domProps } = this.props
    let clz = classNames('weui-badge', {
      'weui-badge_dot': dot
    })
    let stylez = Object.assign({}, presetStyles[preset], style)
    return (
      <span className={clz} style={stylez} {...domProps}>
        {children}
      </span>
    )
  }
})
