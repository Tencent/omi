import React from 'react'
import classNames from '../../utils/classnames'

/**
 * paragraph wrapper for footer
 *
 */
const FooterText = props => {
  const { className, children, ...others } = props
  const cls = classNames({
    'weui-footer__text': true,
    [className]: className
  })

  return (
    <p className={cls} {...others}>
      {children}
    </p>
  )
}

export default FooterText
