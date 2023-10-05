import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-assignment-code')
export default class AssignmentCode extends WeElement<IconProps> {
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
          d="M2.5 2L9.12759 2C9.75935 1.09427 10.8095 0.5 12 0.5C13.1905 0.5 14.2406 1.09427 14.8724 2L21.5 2V22H2.5L2.5 2ZM4.5 20H19.5V4L13.6376 4L13.3756 3.40037C13.1432 2.86851 12.6135 2.5 12 2.5C11.3865 2.5 10.8568 2.86851 10.6244 3.40037L10.3624 4L4.5 4V20ZM5.58579 12L9.5 8.08579L10.9142 9.5L8.41422 12L10.9142 14.5L9.5 15.9142L5.58579 12ZM14.5 8.08579L18.4142 12L14.5 15.9142L13.0858 14.5L15.5858 12L13.0858 9.5L14.5 8.08579Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
