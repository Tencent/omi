import { define, WeElement } from 'omi'
import classNames from '../../utils/classnames'
import Mask from '../mask/index'
import Icon from '../icon/index'

/**
 *  pop out indicator to inform users
 *
 */
define('ow-toast', class extends WeElement {
  static defaultProps = {
    icon: 'toast',
    show: false
  }

  render() {
    const { className, icon, show, children, iconSize, ...others } = this.props
    const cls = classNames('weui-toast', {
      [className]: className
    })
    return (
      <div style={{ display: show ? 'block' : 'none' }}>
        <Mask transparent={true} />
        <div className={cls} {...others}>
          <Icon value={icon} size={iconSize} className="weui-icon_toast" />
          <p className="weui-toast_content">{children}</p>
        </div>
      </div>
    )
  }
})
