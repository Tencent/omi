import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-image-1')
export default class Image1 extends WeElement<IconProps> {
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
          d="M17.0001 4C15.8956 4 15.0001 4.89543 15.0001 6C15.0001 7.10457 15.8956 8 17.0001 8C18.1047 8 19.0001 7.10457 19.0001 6C19.0001 4.89543 18.1047 4 17.0001 4ZM13.0001 6C13.0001 3.79086 14.791 2 17.0001 2C19.2093 2 21.0001 3.79086 21.0001 6C21.0001 8.20914 19.2093 10 17.0001 10C14.791 10 13.0001 8.20914 13.0001 6ZM9.92833 8.12361L14.3467 15.1388L16.9283 11.1641L23.9664 22H1.18848L9.92833 8.12361ZM9.92833 11.8764L4.81179 20H20.2825L16.9283 14.8359L14.3208 18.8504L9.92833 11.8764Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
