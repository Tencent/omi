import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-file-image')
export default class FileImage extends WeElement<IconProps> {
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
          d="M3 1H15.4142L21 6.58579V23H3V1ZM5 3V21H19V9H13V3H5ZM15 3.41421V7H18.5858L15 3.41421ZM8 11H10.0039V13.0039H8V11ZM12.7279 12.9376L16.7903 17L15.3761 18.4142L12.7283 15.7665L11.1163 17.3794L10.4645 16.5951L9.76475 17.2717L8.62222 18.4142L7.20801 17L8.36237 15.8456L10.6243 13.6583L11.2524 14.414L12.7279 12.9376Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
