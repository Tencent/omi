import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-adjustment')
export default class Adjustment extends WeElement<IconProps> {
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
          d="M8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4ZM5.17071 4C5.58254 2.83481 6.69378 2 8 2C9.30622 2 10.4175 2.83481 10.8293 4L22 4V6L10.8293 6C10.4175 7.16519 9.30622 8 8 8C6.69378 8 5.58254 7.16519 5.17071 6L2 6L2 4L5.17071 4ZM13.1707 11C13.5825 9.83481 14.6938 9 16 9C17.3062 9 18.4175 9.83481 18.8293 11H22V13H18.8293C18.4175 14.1652 17.3062 15 16 15C14.6938 15 13.5825 14.1652 13.1707 13L2 13L2 11L13.1707 11ZM16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11ZM8 18C7.44772 18 7 18.4477 7 19C7 19.5523 7.44772 20 8 20C8.55228 20 9 19.5523 9 19C9 18.4477 8.55229 18 8 18ZM5.17071 18C5.58254 16.8348 6.69378 16 8 16C9.30622 16 10.4175 16.8348 10.8293 18L22 18V20L10.8293 20C10.4175 21.1652 9.30622 22 8 22C6.69378 22 5.58254 21.1652 5.17071 20H2V18H5.17071Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
