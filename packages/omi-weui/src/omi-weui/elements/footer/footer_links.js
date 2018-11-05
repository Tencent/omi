import React from 'react'
import classNames from '../../utils/classnames'

/**
 * consists of `footer_link`
 *
 */
const FooterLinks = props => {
  const { className, children, ...others } = props
  const cls = classNames({
    'weui-footer__links': true,
    [className]: className
  })

  return (
    <p className={cls} {...others}>
      {children}
    </p>
  )
}

export default FooterLinks
