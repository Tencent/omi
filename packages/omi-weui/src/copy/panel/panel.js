import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'
import deprecationWarning from '../../utils/deprecationWarning'

/**
 * Panel Object, consists of `PanelHeader`, `PanelBody` and `PanelFooter`
 *
 */
export default class Panel extends React.Component {
  static propTypes = {
    /**
     * deprecated property from 0.4.x
     *
     */
    access: PropTypes.bool
  }

  static defaultProps = {
    access: false
  }

  render() {
    const { children, className, access, ...others } = this.props

    if (access) {
      deprecationWarning(
        'panel access',
        'cell access',
        'https://github.com/weui/weui/wiki/%E5%9C%A81.0.0%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E4%B8%8A%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E6%94%B9%E5%8F%98#panel'
      )
    }

    const cls = classNames({
      'weui-panel': true,
      [className]: className
    })

    return (
      <div className={cls} {...others}>
        {children}
      </div>
    )
  }
}
