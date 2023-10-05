import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-tower-1')
export default class Tower1 extends WeElement<IconProps> {
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
          d="M13 1V2H16V8H15.0614C15.2612 9.7854 15.9348 12.1988 16.8796 14.5814C17.9352 17.2434 19.2498 19.6653 20.4322 21H22V23H14.1527L14.0144 22.1689L14.0121 22.157C14.0097 22.1443 14.0052 22.1221 13.9983 22.0915C13.9844 22.0303 13.9613 21.9373 13.9265 21.8233C13.8558 21.5918 13.7427 21.2933 13.5739 21.0038C13.2377 20.4274 12.7631 20 12 20C11.2369 20 10.7623 20.4274 10.4261 21.0038C10.2573 21.2933 10.1442 21.5918 10.0735 21.8233C10.0387 21.9373 10.0156 22.0303 10.0017 22.0915C9.99484 22.1221 9.99033 22.1443 9.98787 22.157L9.98579 22.168L9.84729 23H2V21H3.56781C4.75023 19.6653 6.0648 17.2434 7.12042 14.5814C8.06522 12.1988 8.73883 9.7854 8.93861 8H8V2H11V1H13ZM10.9489 8C10.7483 10.1007 9.977 12.8034 8.97958 15.3186C8.16311 17.3775 7.14961 19.4261 6.08129 21H8.23905C8.34209 20.7056 8.49 20.3536 8.69847 19.9962C9.23712 19.0726 10.2625 18 12 18C13.7375 18 14.7629 19.0726 15.3015 19.9962C15.51 20.3536 15.6579 20.7056 15.7609 21H17.9187C16.8504 19.4261 15.8369 17.3775 15.0204 15.3186C14.023 12.8034 13.2517 10.1007 13.0511 8H10.9489ZM10 6H14V4H10V6Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
