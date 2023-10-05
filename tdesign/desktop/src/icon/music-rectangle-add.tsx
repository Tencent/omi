import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-music-rectangle-add')
export default class MusicRectangleAdd extends WeElement<IconProps> {
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
          d="M2 2H22V13H20V4H4V20H13V22H2V2ZM12 7H16V9H14V14C14 15.6569 12.6569 17 11 17C9.34315 17 8 15.6569 8 14C8 12.3431 9.34315 11 11 11C11.3506 11 11.6872 11.0602 12 11.1707V7ZM12 14C12 13.4477 11.5523 13 11 13C10.4477 13 10 13.4477 10 14C10 14.5523 10.4477 15 11 15C11.5523 15 12 14.5523 12 14ZM20 15V18H23V20H20V23H18V20H15V18H18V15H20Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
