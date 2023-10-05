import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-traffic-events')
export default class TrafficEvents extends WeElement<IconProps> {
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
          d="M12 1.91406L15.6428 10.6007L16.0488 11.4997L16.0244 11.5107L19.165 18.9999H21V20.9999H3V18.9999H4.83498L7.97562 11.5107L7.95124 11.4997L8.35724 10.6006L12 1.91406ZM10.1489 11.4999L9.00373 14.2306H14.9963L13.8511 11.4999H10.1489ZM13.0124 9.49987L12 7.08567L10.9876 9.49987H13.0124ZM15.835 16.2306H8.16502L7.00373 18.9999H16.9963L15.835 16.2306Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
