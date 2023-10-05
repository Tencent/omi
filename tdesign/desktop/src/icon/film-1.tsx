import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-film-1')
export default class Film1 extends WeElement<IconProps> {
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
          d="M2 2L22 2L22 22L2 22L2 2ZM4 4V6H6L6 4L4 4ZM8 4L8 11H16V4L8 4ZM18 4V6L20 6V4H18ZM20 8H18V11L20 11V8ZM20 13L18 13L18 16L20 16L20 13ZM20 18L18 18V20H20V18ZM16 20L16 13H8L8 20L16 20ZM6 20V18H4L4 20H6ZM4 16H6L6 13H4V16ZM4 11H6L6 8L4 8L4 11Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
