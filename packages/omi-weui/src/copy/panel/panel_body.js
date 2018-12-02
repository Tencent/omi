import React from 'react'
import classNames from '../../utils/classnames'

/**
 * Content of Panel
 *
 */
export default class PanelBody extends React.Component {
  render() {
    const { className, children, ...others } = this.props
    const cls = classNames({
      'weui-panel__bd': true,
      [className]: className
    })

    return (
      <div className={cls} {...others}>
        {children}
      </div>
    )
  }
}
