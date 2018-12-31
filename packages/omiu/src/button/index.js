import { define, WeElement, classNames } from 'omi'
import css from './_index.css'

define('o-button', class extends WeElement {
  static defaultProps = {
    disabled: false,
    type: 'primary',
    size: 'normal'
  }

  css() {
    return css
  }

  render() {
    const {
      component,
      type,
      size,
      plain,
      //className,
      children,
      ...others
    } = this.props

    const className = this.props.class

    const Component = component
      ? component
      : this.props.href || type === 'vcode'
        ? 'a'
        : 'button'
    const cls =
      type === 'vcode'
        ? classNames('weui-vcode-btn', { [className]: className })
        : classNames({
          'weui-btn': true,
          'weui-btn_mini': size === 'small',
          'weui-btn_primary': type === 'primary' && !plain,
          'weui-btn_default': type === 'default' && !plain,
          'weui-btn_warn': type === 'warn',
          'weui-btn_plain-primary': type === 'primary' && plain,
          'weui-btn_plain-default': type === 'default' && plain,
          'weui-btn_disabled': this.props.disabled && !plain,
          'weui-btn_plain-disabled': this.props.disabled && plain,
          [className]: className
        })

    return (
      <Component {...others} className={cls}>
        {children}
      </Component>
    )
  }
})
