import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-install')
export default class Install extends WeElement<IconProps> {
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
          d="M13 2V9.10923L15.5081 6.62966L16.9142 8.05193L12 12.9103L7.08581 8.05194L8.49191 6.62966L11 9.10924V2H13ZM2 2.00008H9V4.00008H4V14.0001H20V4.00008H15V2.00008H22V22.0001H2V2.00008ZM20 16.0001H4V20.0001H20V16.0001ZM5.99805 16.9981H8.00195V19.002H5.99805V16.9981ZM8.99805 16.9981H11.002V19.002H8.99805V16.9981Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
