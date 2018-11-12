import React from 'react'
import classNames from '../../utils/classnames'

/**
 * Header of Panel
 *
 */
export default class PanelHeader extends React.Component {
  render() {
    const { className, children, ...others } = this.props
    const cls = classNames({
      'weui-panel__hd': true,
      [className]: className
    })

    return (
      <div className={cls} {...others}>
        {children}
      </div>
    )
  }
}
