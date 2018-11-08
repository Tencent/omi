import { define, WeElement } from 'omi'
import classNames from '../../utils/classnames'
import deprecationWarning from '../../utils/deprecationWarning'


const deprecateValue = {
  safe_success: 'safe-success',
  safe_warn: 'safe-warn',
  success_circle: 'success-circle',
  success_no_circle: 'success-no-circle',
  waiting_circle: 'waiting-circle',
  info_circle: 'info-circle'
}

/**
 * WeUI Icons
 *
 */

define('ow-icon', class extends WeElement {
  static defaultProps = {
    value: 'success',
    size: 'small'
  }

  render() {
    const { value, size, className, primary, ...others } = this.props

    if (Object.keys(deprecateValue).indexOf(value) !== -1) {
      deprecationWarning(`Icon ${value}`, `Icon ${deprecateValue[value]}`)
    }

    const cls = classNames({
      ['weui-icon-' + value]: value !== 'loading',
      'weui-icon_msg': size === 'large' && !primary,
      'weui-icon_msg-primary': size === 'large' && primary,
      'weui-loading': value === 'loading',
      [className]: className
    })

    return <i {...others} className={cls} />
  }
})
