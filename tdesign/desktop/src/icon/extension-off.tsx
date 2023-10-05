import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-extension-off')
export default class ExtensionOff extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_7305)">
          <path
            d="M8.0004 3.99C8.00579 2.33775 9.34686 1 11.0004 1C12.6572 1 14.0004 2.34315 14.0004 4H20.0004V10C21.6572 10 23.0004 11.3431 23.0004 13C23.0004 14.6536 21.6625 15.9947 20.0101 16L20.0595 18.5158L18.0006 16.4075L18.0009 14H20.0004C20.5527 14 21.0004 13.5523 21.0004 13C21.0004 12.4477 20.5527 12 20.0004 12H18.0004V6H12.0004V4C12.0004 3.44772 11.5527 3 11.0004 3C10.4481 3 10.0004 3.44772 10.0004 4V6H7.58618L5.52765 3.94152L8.0004 3.99ZM1.00015 1.58579L22.4144 23L21.0002 24.4142L18.5859 22H13.5976L13.4748 21.1416C13.3016 19.931 12.2587 19 11.0002 19C9.74156 19 8.69868 19.931 8.52552 21.1416L8.40273 22H2.00015V15.5974L2.85855 15.4746C4.06915 15.3015 5.00015 14.2586 5.00015 13C5.00015 11.7414 4.06915 10.6985 2.85855 10.5254L2.00015 10.4026V5.41421L-0.414062 3L1.00015 1.58579ZM4.00015 7.41421V8.75633C5.74813 9.37425 7.00015 11.0403 7.00015 13C7.00015 14.9597 5.74813 16.6257 4.00015 17.2437V20H6.75648C7.3744 18.252 9.04042 17 11.0002 17C12.9599 17 14.6259 18.252 15.2438 20H16.5859L4.00015 7.41421Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
