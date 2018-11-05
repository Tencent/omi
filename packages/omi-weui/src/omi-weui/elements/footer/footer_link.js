import React from 'react'
import classNames from '../../utils/classnames'

/**
 * foot link wrapper for link
 *
 */
const FooterLink = props => {
  const { className, children, ...others } = props
  const cls = classNames({
    'weui-footer__link': true,
    [className]: className
  })

  return (
    <a className={cls} {...others}>
      {children}
    </a>
  )
}

export default FooterLink
