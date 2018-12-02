//1.0.0 components

import React from 'react'
import classNames from '../../utils/classnames'

/**
 * Content of Preview
 *
 */
const PreviewBody = props => {
  const { className, children, ...others } = props
  const cls = classNames({
    'weui-form-preview__bd': true,
    [className]: className
  })

  return (
    <div className={cls} {...others}>
      {children}
    </div>
  )
}

export default PreviewBody
