import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'

const PreviewButton = props => {
  const { className, primary, children, ...others } = props
  const cls = classNames({
    'weui-form-preview__btn': true,
    'weui-form-preview__btn_default': !primary,
    'weui-form-preview__btn_primary': primary,
    [className]: className
  })

  return (
    <a className={cls} {...others}>
      {children}
    </a>
  )
}

PreviewButton.propTypes = {
  /**
   * Primary style of button
   *
   */
  primary: PropTypes.bool
}

PreviewButton.defaultProps = {
  primary: false
}

export default PreviewButton
