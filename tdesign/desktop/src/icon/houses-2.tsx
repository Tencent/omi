import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-houses-2')
export default class Houses2 extends WeElement<IconProps> {
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
          d="M8.99959 1.99951V3.99951H18.5658L22.7658 10.9995H20.9996V21.9999H2.99959V10.9995H1.2334L5.4334 3.99951H6.99959V1.99951H8.99959ZM4.99959 10.9995V19.9999H8.99959V14.9999H14.9996V19.9999H18.9996V10.9995H4.99959ZM19.2334 8.99951L17.4334 5.99951H6.56578L4.76578 8.99951H19.2334ZM12.9996 19.9999V16.9999H10.9996V19.9999H12.9996Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
