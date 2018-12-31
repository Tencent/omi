import { define, WeElement, classNames } from 'omi'
import css from './_index.css'
import '../icon'

define('o-toast', class extends WeElement {
  static defaultProps = {
    type: 'success',
    show: false
  }

  css() {
    return css
  }

  render() {
    const { className, type, show, children, iconSize, ...others } = this.props
    const cls = classNames('weui-toast', {
      [className]: className
    })

    return (
      <div style={{ display: show ? 'block' : 'none' }}>
        <div className={cls} {...others}>
          {type === 'success' ? (
            <o-icon type={'check'}  color='white' class='icon' scale={4} className="weui-icon_toast" />:
            <o-icon type={'loading'} rotate color='white' class='icon-l' scale={3} className="weui-icon_toast" />}
          )}

          <p className="weui-toast_content">{children}</p>
        </div>
      </div>
    )
  }
})
