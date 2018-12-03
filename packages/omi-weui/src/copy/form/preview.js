//1.0.0 components

import React from 'react'
import classNames from '../../utils/classnames'

/**
 * Preview Wrapper consists of `PreviewHeader`, `PreviewBody`, `PreviewFooter`, `PreviewItem`
 *
 */
const Preview = props => {
  const { className, children, ...others } = props
  const cls = classNames({
    'weui-form-preview': true,
    [className]: className
  })

  return (
    <div className={cls} {...others}>
      {children}
    </div>
  )
}

export default Preview
