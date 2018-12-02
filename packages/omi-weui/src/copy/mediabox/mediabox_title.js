import React from 'react'
import classNames from '../../utils/classnames'

/**
 * Title for MediaBox
 *
 */
export default class MediaBoxTitle extends React.Component {
  render() {
    const { children, className, ...others } = this.props
    const cls = classNames({
        'weui-media-box__title': true
      },
      className
    return (
      <h4 className={cls} {...others}>
        {children}
      </h4>
    )
  }
}
