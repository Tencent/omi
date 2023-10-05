import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-hourglass')
export default class Hourglass extends WeElement<IconProps> {
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
          d="M4 2H20V5C20 8.01203 18.3354 10.6353 15.876 12C18.3354 13.3647 20 15.988 20 19V22H4V19C4 15.988 5.66458 13.3647 8.12399 12C5.66458 10.6353 4 8.01203 4 5V2ZM12 13C8.68629 13 6 15.6863 6 19V20H18V19C18 15.6863 15.3137 13 12 13ZM6 4V5C6 8.31371 8.68629 11 12 11C15.3137 11 18 8.31371 18 5V4H6Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
