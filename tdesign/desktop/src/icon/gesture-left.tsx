import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-left')
export default class GestureLeft extends WeElement<IconProps> {
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
          d="M4.5 7.57043C2.84315 7.57043 1.5 8.91357 1.5 10.5704C1.5 12.2273 2.84315 13.5704 4.5 13.5704H8V15.0297C8 15.5609 8.14102 16.0825 8.40866 16.5413L10.8176 20.6709C11.5331 21.8974 13.0105 22.4544 14.3576 22.0053L20.4487 19.975C21.6737 19.5666 22.5 18.4202 22.5 17.1289V9.05523C22.5 8.12382 22.0674 7.24525 21.3291 6.67736L15.0416 1.84082L13.5154 2.85829C12.8282 3.31645 12.4933 4.14996 12.6725 4.95625L13.2534 7.57043L4.5 7.57043ZM3.5 10.5704C3.5 10.0181 3.94772 9.57043 4.5 9.57043L15.7466 9.57043L14.6248 4.52239L14.9584 4.30003L20.1097 8.26261C20.3558 8.4519 20.5 8.74476 20.5 9.05523V17.1289C20.5 17.5593 20.2246 17.9415 19.8162 18.0776L13.7251 20.108C13.2761 20.2576 12.7836 20.072 12.5451 19.6631L10.1362 15.5336C10.047 15.3807 10 15.2068 10 15.0297V11.5704H4.5C3.94772 11.5704 3.5 11.1227 3.5 10.5704Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
