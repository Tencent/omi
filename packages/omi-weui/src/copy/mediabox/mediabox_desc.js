import React from 'react'
import classNames from '../../utils/classnames'

/**
 * Description of MediaBox
 *
 */
export default class MediaBoxDescription extends React.Component {
  render() {
    const { children, className, ...others } = this.props
    const cls = classNames({
        'weui-media-box__desc': true
      },
      className
    return (
      <p className={cls} {...others}>
        {children}
      </p>
    )
  }
}
