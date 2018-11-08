import { define, WeElement } from 'omi'
import classNames from '../../utils/classnames'
import './toptips.less'

/**
 *  Drop down message from top
 *
 */

const defaultProps = {
  show: false,
  type: 'default'
}

define('ow-toptips', props => {
  if (!props) props = defaultProps

  const { className, type, children, show, ...others } = props
  const cls = classNames({
    'weui-toptips': true,
    [`weui-toptips_${type}`]: true,
    [className]: className
  })

  return (
    <div
      className={cls}
      {...others}
      style={{ display: show ? 'block' : 'none' }}
    >
      {children}
    </div>
  )
})
