import React from 'react'
import classNames from '../../utils/classnames'

/**
 * weui wrapper for checkbox
 *
 */
const Checkbox = props => {
  const { className, ...others } = props
  const cls = classNames({
    'weui-check': true,
    [className]: className
  })

  return (
    <div>
      <input className={cls} type="checkbox" {...others} />
      <span className="weui-icon-checked" />
    </div>
  )
}

export default Checkbox
