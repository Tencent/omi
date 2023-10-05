import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chat-off')
export default class ChatOff extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_7519)">
          <path
            d="M23.4144 22.001L2.00015 0.586792L0.585938 2.00101L1.50015 2.91522L1.50015 22.7048L6.87589 18.001H16.5859L22.0002 23.4152L23.4144 22.001ZM14.5859 16.001L6.12441 16.001L3.50015 18.2972L3.50015 4.91522L14.5859 16.001ZM22.5035 17.9996L22.5001 1.99975L9.65461 2.00102L6.23697 1.9976L8.2404 4.00102L20.5001 4.00031L20.5001 15.9963L22.5035 17.9996Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
