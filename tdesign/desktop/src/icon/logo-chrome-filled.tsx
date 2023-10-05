import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-logo-chrome-filled')
export default class LogoChromeFilled extends WeElement<IconProps> {
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
          d="M12 23C18.0751 23 23 18.0751 23 12C23 10.8686 22.8292 9.77711 22.512 8.74989H15.4641C16.2616 9.59954 16.75 10.7427 16.75 11.9999C16.75 12.8639 16.5186 13.6762 16.114 14.3757L11.1532 22.9679C11.4327 22.9892 11.7151 23 12 23Z"
          fill="currentColor"
        />
        <path
          d="M9.5595 22.7283L13.0827 16.6259C12.735 16.707 12.3725 16.7499 12 16.7499C10.2411 16.7499 8.70639 15.7934 7.88617 14.3758L2.92465 5.78222C1.71049 7.55098 1 9.69252 1 12C1 17.2364 4.65888 21.6182 9.5595 22.7283Z"
          fill="currentColor"
        />
        <path
          d="M3.93051 4.52442C5.9396 2.35673 8.81136 1 12 1C16.3739 1 20.1516 3.55287 21.9243 7.24989H12C9.85501 7.24989 8.04208 8.67169 7.45226 10.6243L3.93051 4.52442Z"
          fill="currentColor"
        />
        <path
          d="M9.18451 13.6246L9.18134 13.6191C8.90712 13.143 8.75002 12.5909 8.75002 11.9999C8.75002 10.205 10.2051 8.74989 12 8.74989C13.7949 8.74989 15.25 10.205 15.25 11.9999C15.25 12.5932 15.0917 13.1473 14.8155 13.6246C14.2524 14.5978 13.2019 15.2499 12 15.2499C10.7982 15.2499 9.74765 14.5977 9.18451 13.6246Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
