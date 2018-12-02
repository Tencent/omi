import { define, WeElement } from 'omi'
import classNames from '../../utils/classnames'

/**
 * WeUI Label Wrapper
 *
 */

define('ow-label', props => {
  const { className, ...others } = props
  const cls = classNames({
    'weui-label': true,
    [className]: className
  })

  return (
    <div>
      <label className={cls} {...others} />
    </div>
  )
})
