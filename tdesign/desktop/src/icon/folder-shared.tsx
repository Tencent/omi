import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-folder-shared')
export default class FolderShared extends WeElement<IconProps> {
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
          d="M1 2.5H9.48063L11.4806 5H23V21H1V2.5ZM3 4.5V19H21V7H10.5194L8.51937 4.5H3ZM12 10.5C12.5523 10.5 13 10.9477 13 11.5C13 12.0523 12.5523 12.5 12 12.5C11.4477 12.5 11 12.0523 11 11.5C11 10.9477 11.4477 10.5 12 10.5ZM14.4003 13.2999C14.7769 12.7985 15 12.1753 15 11.5C15 9.84315 13.6569 8.5 12 8.5C10.3431 8.5 9 9.84315 9 11.5C9 12.1753 9.22314 12.7985 9.59972 13.2999C8.62832 14.0297 8 15.1915 8 16.5V17.5H10V16.5C10 15.3954 10.8954 14.5 12 14.5C13.1046 14.5 14 15.3954 14 16.5V17.5H16V16.5C16 15.1915 15.3717 14.0297 14.4003 13.2999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
