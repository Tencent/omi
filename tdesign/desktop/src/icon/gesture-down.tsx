import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-down')
export default class GestureDown extends WeElement<IconProps> {
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
          d="M7.57043 19.5C7.57043 21.1569 8.91357 22.5 10.5704 22.5C12.2273 22.5 13.5704 21.1569 13.5704 19.5V16H15.0297C15.5609 16 16.0825 15.859 16.5413 15.5913L20.6709 13.1824C21.8974 12.4669 22.4544 10.9895 22.0053 9.64242L19.975 3.55132C19.5666 2.32629 18.4202 1.5 17.1289 1.5H9.05523C8.12382 1.5 7.24525 1.93261 6.67736 2.67087L1.84082 8.95837L2.85829 10.4846C3.31645 11.1718 4.14996 11.5067 4.95625 11.3275L7.57043 10.7466V19.5ZM10.5704 20.5C10.0181 20.5 9.57043 20.0523 9.57043 19.5V8.25338L4.52239 9.37517L4.30003 9.04163L8.26261 3.89029C8.4519 3.6442 8.74476 3.5 9.05523 3.5H17.1289C17.5593 3.5 17.9415 3.77543 18.0776 4.18377L20.108 10.2749C20.2576 10.7239 20.072 11.2164 19.6631 11.4549L15.5336 13.8638C15.3807 13.953 15.2068 14 15.0297 14H11.5704V19.5C11.5704 20.0523 11.1227 20.5 10.5704 20.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
