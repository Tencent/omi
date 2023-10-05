import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chart-scatter')
export default class ChartScatter extends WeElement<IconProps> {
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
          d="M4 2V20H22V22H2V2H4ZM17 6C17 4.89543 17.8954 4 19 4C20.1046 4 21 4.89543 21 6C21 7.10457 20.1046 8 19 8C17.8954 8 17 7.10457 17 6ZM10.998 5H13.002V7.00391H10.998V5ZM5.99805 8H8.00195V10.0039H5.99805V8ZM14.998 10H17.002V12.0039H14.998V10ZM9 13C9 11.8954 9.89543 11 11 11C12.1046 11 13 11.8954 13 13C13 14.1046 12.1046 15 11 15C9.89543 15 9 14.1046 9 13ZM16.998 15H19.002V17.0039H16.998V15ZM5.99805 16H8.00195V18.0039H5.99805V16Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
