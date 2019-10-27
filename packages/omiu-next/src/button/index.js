import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-button', class extends WeElement {
  static defaultProps = {
    disabled: false,
    type: 'primary',
    size: 'normal'
  }

  static css = css

  render(props) {
    //fix omi render
    if(this instanceof HTMLElement){
      delete props['onClick']
      delete props['onclick']
    }
    let cls = extractClass(props) || {}
    const {
      component,
      type,
      size,
      plain,
      children,
      ...others
    } = this.props


    const Component = component
      ? component
      : this.props.href || type === 'vcode'
        ? 'a'
        : 'button'
    cls =
      type === 'vcode'
        ? extractClass(cls, 'weui-vcode-btn')
        : extractClass(cls, {
          'weui-btn': true,
          'weui-btn_mini': size === 'small',
          'weui-btn_primary': type === 'primary' && !plain,
          'weui-btn_default': type === 'default' && !plain,
          'weui-btn_warn': type === 'warn',
          'weui-btn_plain-primary': type === 'primary' && plain,
          'weui-btn_plain-default': type === 'default' && plain,
          'weui-btn_disabled': this.props.disabled && !plain,
          'weui-btn_plain-disabled': this.props.disabled && plain
        })

    return (
      <Component {...others} {...cls}>
        {children}
      </Component>
    )
  }
})
