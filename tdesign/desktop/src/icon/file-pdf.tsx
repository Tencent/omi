import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-file-pdf')
export default class FilePdf extends WeElement<IconProps> {
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
          d="M3 1H15.4142L21 6.58579V11H19V9H13V3H5V21H21V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM6 12H9.71428C10.4244 12 11 12.5756 11 13.2857V15.7143C11 16.4244 10.4244 17 9.71428 17H8V20H6V12ZM8 15H9V14H8V15ZM11.5 12H15.2143C15.9244 12 16.5 12.5756 16.5 13.2857V18.7143C16.5 19.4244 15.9244 20 15.2143 20H11.5V12ZM13.5 14V18H14.5V14H13.5ZM17 13.2857C17 12.5756 17.5756 12 18.2857 12H21.6667V14H19V15H21.6667V17H19V20H17V13.2857Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
