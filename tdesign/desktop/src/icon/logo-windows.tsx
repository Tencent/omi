import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-logo-windows')
export default class LogoWindows extends WeElement<IconProps> {
  static css = css as string

  static defaultProps = {
    size: '1em',
    style: { fill: '#000' },
  }

  static propTypes = {
    size: [String, Number],
    onClick: Function,
    style: Object,
    class: String,
  }

  render(props: OmiProps<IconProps>) {
    const classPrefix = 't'
    const iconClassName = classNames(TdClassNamePrefix('icon'), props.class, {
      [`${TdClassNamePrefix('size-s')}`]: props.size === 'small',
      [`${TdClassNamePrefix('size-m')}`]: props.size === 'medium',
      [`${TdClassNamePrefix('size-l')}`]: props.size === 'large',
    })
    const flag = props.size === 'small' || props.size === 'medium' || props.size === 'large'
    const iconStyle = {
      ...props.style,
      fontSize: props.size,
    }
    return (
      <svg
        class={iconClassName}
        width={flag ? '24' : props.size}
        height={flag ? '24' : props.size}
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 1.84717V12.0002H12V3.27574L22 1.84717ZM14 5.01033V10.0002H20V4.15319L14 5.01033ZM11 3.82224V12.0002H2V5.30275L11 3.82224ZM4 7.00063V10.0002H9V6.17812L4 7.00063ZM2 13.0002H11V21.0999L2 20.2428V13.0002ZM4 15.0002V18.4242L9 18.9004V15.0002H4ZM12 13.0002H22V22.1566L12 20.6983V13.0002ZM14 15.0002V18.9688L20 19.8438V15.0002H14Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
