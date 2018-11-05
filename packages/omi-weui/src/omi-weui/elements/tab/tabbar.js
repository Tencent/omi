import React from 'react'
import classNames from '../../utils/classnames'

/**
 *  Bottom bar for tabs
 *
 */
export default class TabBar extends React.Component {
  render() {
    const { children, className, ...others } = this.props
    const cls = classNames(
      {
        'weui-tabbar': true
      },
      className
    return (
      <div className={cls} {...others}>
        {children}
      </div>
    )
  }
}
