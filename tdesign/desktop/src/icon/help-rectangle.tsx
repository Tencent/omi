import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-help-rectangle')
export default class HelpRectangle extends WeElement<IconProps> {
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
          d="M2 2H22V22H2V2ZM4 4V20H20V4H4ZM12.0002 7.25C11.1309 7.25 10.3888 7.8051 10.1137 8.58325L9.78049 9.52609L7.89481 8.85959L8.22806 7.91675C8.7767 6.36451 10.257 5.25 12.0002 5.25C14.2093 5.25 16.0002 7.04086 16.0002 9.25C16.0002 10.5259 15.4017 11.6625 14.4742 12.3933C14.0426 12.7334 13.6572 13.0588 13.3783 13.4019C13.1037 13.7396 13.0002 14.012 13.0002 14.25V15.5H11.0002V14.25C11.0002 13.3834 11.3904 12.6765 11.8265 12.1402C12.2582 11.6092 12.8004 11.1659 13.2364 10.8223C13.7034 10.4545 14.0002 9.88718 14.0002 9.25C14.0002 8.14543 13.1048 7.25 12.0002 7.25ZM11 16.5H13.0039V18.5039H11V16.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
