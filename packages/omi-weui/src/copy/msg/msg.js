import { define, WeElement } from 'omi'
import classNames from '../../utils/classnames'
import { Button, ButtonArea } from '../button/index'
import { Footer, FooterLinks, FooterLink } from '../footer'
import Icon from '../icon/index'
import deprecationWarning from '../../utils/deprecationWarning'

/**
 * A full notification page to indicate results
 *
 */
define('ow-msg', class extends WeElement {
  
  static defaultProps = {
    type: 'success',
    buttons: []
  }

  _renderButtons() {
    return this.props.buttons.map((button, idx) => {
      const { type, label, ...others } = button
      return (
        <Button key={idx} {...others} type={type}>
          {label}
        </Button>
      )
    })
  }

  render() {
    const {
      children,
      className,
      type,
      title,
      description,
      extraHref,
      extraText,
      footer,
      buttons,
      ...others
    } = this.props
    const cls = classNames('weui-msg', {
      [className]: className
    })

    let elFooter = footer ? footer : () => false

    if (!elFooter() && (extraHref || extraText)) {
      deprecationWarning('Msg extraHref/extraText', 'Msg footer')

      elFooter = () => (
        <Footer>
          <FooterLinks>
            <FooterLink href={extraHref}>{extraText}</FooterLink>
          </FooterLinks>
        </Footer>
      )
    }

    return (
      <div className={cls} {...others}>
        <div className="weui-msg__icon-area">
          <Icon value={type} size="large" />
        </div>
        <div className="weui-msg__text-area">
          {title ? <h2 className="weui-msg__title">{title}</h2> : false}
          {description ? (
            <p className="weui-msg__desc">{description}</p>
          ) : (
            false
          )}
          {children}
        </div>
        <div className="weui-msg__opr-area">
          <ButtonArea>{this._renderButtons()}</ButtonArea>
        </div>
        <div className="weui-msg__extra-area">{elFooter()}</div>
      </div>
    )
  }
})
