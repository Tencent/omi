import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-collection')
export default class MapCollection extends WeElement<IconProps> {
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
          d="M9 1.84229L15.0744 5.38567L22 2.49999V10.5H20V5.49999L16 7.16666V9.49999H14V7.07436L10 4.74103V16.9256L11.8677 18.0151L10.8599 19.7426L8.92563 18.6143L2 21.5V5.92562L9 1.84229ZM8 16.8333V4.74103L4 7.07436V18.5L8 16.8333ZM18 10.7311L20.2109 13.957L23.9621 15.0628L21.5773 18.1623L21.6848 22.0716L18 20.7613L14.3152 22.0716L14.4227 18.1623L12.0379 15.0628L15.7891 13.957L18 10.7311ZM18 14.2689L17.0368 15.6743L15.4026 16.156L16.4415 17.5064L16.3947 19.2095L18 18.6386L19.6053 19.2095L19.5585 17.5064L20.5974 16.156L18.9632 15.6743L18 14.2689Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
