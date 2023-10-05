import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-contrast-1')
export default class Contrast1 extends WeElement<IconProps> {
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
          d="M11 3.05493C6.50005 3.55237 3 7.36745 3 12C3 16.6326 6.50005 20.4476 11 20.9451V3.05493ZM13 3.05493V4.83987L15.1835 3.57924C14.4922 3.31778 13.7604 3.13899 13 3.05493ZM17.255 4.69266L13 7.14927V11.1908L19.693 7.32655C19.0642 6.29365 18.2332 5.39736 17.255 4.69266ZM20.5386 9.14773L13 13.5002V17.5417L20.9503 12.9516C20.9832 12.6389 21 12.3214 21 12C21 11.0031 20.8379 10.044 20.5386 9.14773ZM20.2126 15.6869L13 19.8511V20.9451C16.2239 20.5887 18.9345 18.5295 20.2126 15.6869ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
