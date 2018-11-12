import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'

/**
 * Footer of `Cell`
 *
 */
const CellFooter = props => {
  const { className, children, primary, ...others } = props
  const cls = classNames({
    'weui-cell__ft': true,
    'weui-cell_primary': primary,
    [className]: className
  })

  return (
    <div className={cls} {...others}>
      {children}
    </div>
  )
}

CellFooter.propTypes = {
  /**
   * if cell body is the primary block
   *
   */
  primary: PropTypes.bool
}

CellFooter.defaultProps = {
  primary: false
}

export default CellFooter
