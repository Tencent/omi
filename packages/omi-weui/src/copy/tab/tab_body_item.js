import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'

/**
 * Content wrapper for each Tab Item
 */
export default class TabBodyItem extends React.Component {
  static propTypes = {
    /**
     * display this component
     *
     */
    active: PropTypes.bool
  }

  static defaultProps = {
    active: false
  }

  render() {
    const { children, className, active, ...others } = this.props
      const cls = classNames({
      {
        'weui-tab__bd-item': true
      }, className)

        return (
        <div className={cls} style={{display: active ? 'block' : 'none'}} {...others}>
          {children}
      </div>
      );
  }
}
