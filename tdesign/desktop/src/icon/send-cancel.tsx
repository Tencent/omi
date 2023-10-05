import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-send-cancel')
export default class SendCancel extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_7234)">
          <path
            d="M0.291992 1.66455L24.0029 12.0001L18.5457 14.3788L17.7465 12.5455L18.9977 12.0001L3.70856 5.33557L5.70779 11.0001H11.0003V13.0001H5.70779L3.70856 18.6646L12.2674 14.9338L13.0666 16.7672L0.291992 22.3356L3.93982 12.0001L0.291992 1.66455ZM23.0819 15.9954L20.25 18.8462L23.0713 21.6675L21.6571 23.0817L18.8381 20.2628L16.0203 23.0806L14.6061 21.6664L17.4239 18.8485L14.5861 16.0107L16.0003 14.5965L18.8358 17.432L21.663 14.5859L23.0819 15.9954Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
