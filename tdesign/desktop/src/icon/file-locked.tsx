import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-file-locked')
export default class FileLocked extends WeElement<IconProps> {
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
          d="M3 1H15.4142L21 6.58579V11H19V9H13V3H5V21H11.5V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM18 14.5C18.6904 14.5 19.25 15.0596 19.25 15.75V16.5H16.75V15.75C16.75 15.0596 17.3096 14.5 18 14.5ZM21.25 16.5V15.75C21.25 13.9551 19.7949 12.5 18 12.5C16.2051 12.5 14.75 13.9551 14.75 15.75V16.5H13.499V23H22.499V16.5H21.25ZM20.499 18.5V21H15.499V18.5H20.499Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
