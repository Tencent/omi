import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'
import Mask from '../mask/index'

/**
 * Modals provide feedback to user
 *
 */
class Dialog extends Component {
  static propTypes = {
    /**
     * Object Arrays of buttons, `label` property is require
     *
     */
    buttons: PropTypes.array,
    /**
     * to display the dialog
     *
     */
    show: PropTypes.bool,
    /**
     * Title of dialog
     *
     */
    title: PropTypes.string,
    /**
     * Specify display style: ios/android, default is ios when autoDetect not on
     *
     */
    type: PropTypes.string
  }

  static defaultProps = {
    buttons: [],
    show: false,
    title: '',
    type: ''
  }

  constructor(props) {
    super(props)

    this.state = {
      isAndroid: ''
    }
  }

  renderButtons() {
    return this.props.buttons.map((action, idx) => {
      const { type, label, ...others } = action
      const className = classNames({
        'weui-dialog__btn': true,
        'weui-dialog__btn_default': type === 'default',
        'weui-dialog__btn_primary': type === 'primary'
      })

      return (
        <a key={idx} href="javascript:;" {...others} className={className}>
          {label}
        </a>
      )
    })
  }

  render() {
    const {
      title,
      show,
      className,
      children,
      buttons,
      type,
      autoDectect,
      ...others
    } = this.props
    const styleType = type ? type : 'ios'
    const cls = classNames('weui-dialog', {
      'weui-skin_android': styleType === 'android',
      [className]: className
    })

    return (
      <div style={{ display: show ? 'block' : 'none' }}>
        <Mask />
        <div className={cls} {...others}>
          {title ? (
            <div className="weui-dialog__hd">
              <strong className="weui-dialog__title">{title}</strong>
            </div>
          ) : (
            false
          )}
          <div className="weui-dialog__bd">{children}</div>
          <div className="weui-dialog__ft">{this.renderButtons()}</div>
        </div>
      </div>
    )
  }
}

export default Dialog
