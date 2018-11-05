import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'

/**
 * weui wrapper for form
 *
 */
class Form extends Component {
  static propTypes = {
    /**
     * if this form is use for radios
     *
     */
    radio: PropTypes.bool,
    /**
     * if this form is use for checkbox
     *
     */
    checkbox: PropTypes.bool
  }

  static defaultProps = {
    radio: false,
    checkbox: false
  }

  render() {
    const { children, className, radio, checkbox, ...others } = this.props
    const cls = classNames({
      'weui-cells': true,
      'weui-cells_form': !radio && !checkbox,
      'weui-cells_radio': radio,
      'weui-cells_checkbox': checkbox,
      [className]: className
    })

    return (
      <div className={cls} {...others}>
        {children}
      </div>
    )
  }
}

export default Form
