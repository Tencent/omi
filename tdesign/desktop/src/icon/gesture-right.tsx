import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-right')
export default class GestureRight extends WeElement<IconProps> {
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
          d="M19.5 7.57043C21.1569 7.57043 22.5 8.91357 22.5 10.5704C22.5 12.2273 21.1569 13.5704 19.5 13.5704H16V15.0297C16 15.5609 15.859 16.0825 15.5913 16.5413L13.1824 20.6709C12.4669 21.8974 10.9895 22.4544 9.64242 22.0053L3.55132 19.975C2.32629 19.5666 1.5 18.4202 1.5 17.1289L1.5 9.05523C1.5 8.12382 1.93261 7.24525 2.67087 6.67736L8.95837 1.84082L10.4846 2.85829C11.1718 3.31645 11.5067 4.14996 11.3275 4.95625L10.7466 7.57043L19.5 7.57043ZM20.5 10.5704C20.5 10.0181 20.0523 9.57043 19.5 9.57043L8.25338 9.57043L9.37517 4.52239L9.04163 4.30003L3.89029 8.26261C3.6442 8.4519 3.5 8.74476 3.5 9.05523L3.5 17.1289C3.5 17.5593 3.77543 17.9415 4.18377 18.0776L10.2749 20.108C10.7239 20.2576 11.2164 20.072 11.4549 19.6631L13.8638 15.5336C13.953 15.3807 14 15.2068 14 15.0297V11.5704H19.5C20.0523 11.5704 20.5 11.1227 20.5 10.5704Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
