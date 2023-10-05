import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-file-unknown')
export default class FileUnknown extends WeElement<IconProps> {
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
          d="M3 1H15.4142L21 6.58579V11.5H19V9H13V3H5V21H14.5V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM18 15C17.0694 15 16.5 15.6561 16.5 16.2489V17.2489H14.5V16.2489C14.5 14.3576 16.1692 13 18 13C19.8308 13 21.5 14.3576 21.5 16.2489C21.5 17.1643 21.0934 17.9745 20.4734 18.5489L19 19.9388V20.6223H17V19.0759L19.1123 17.0834C19.3677 16.8476 19.5 16.5523 19.5 16.2489C19.5 15.6561 18.9306 15 18 15ZM16.9991 21.9961H19.003V24H16.9991V21.9961Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
