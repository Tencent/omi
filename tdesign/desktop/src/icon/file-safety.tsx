import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-file-safety')
export default class FileSafety extends WeElement<IconProps> {
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
          d="M3 1H15.4142L21 6.58579V11.5H19V9H13V3H5V21H11.5V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM13.498 13.5H22.498V19.1336C22.498 20.1466 21.9868 21.0912 21.1388 21.6452L17.998 23.6969L14.8573 21.6452C14.0093 21.0912 13.498 20.1466 13.498 19.1336V13.5ZM15.498 15.5V19.1336C15.498 19.4713 15.6685 19.7861 15.9511 19.9708L17.998 21.308L20.045 19.9708C20.3276 19.7861 20.498 19.4713 20.498 19.1336V15.5H15.498Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
