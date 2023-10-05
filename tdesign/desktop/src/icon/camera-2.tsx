import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-camera-2')
export default class Camera2 extends WeElement<IconProps> {
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
          d="M12 3.5C8.13401 3.5 5 6.63401 5 10.5C5 14.366 8.13401 17.5 12 17.5C15.866 17.5 19 14.366 19 10.5C19 6.63401 15.866 3.5 12 3.5ZM3 10.5C3 5.52944 7.02944 1.5 12 1.5C16.9706 1.5 21 5.52944 21 10.5C21 15.1326 17.5 18.9476 13 19.4451V20.4557C14.7052 20.2865 16.2828 19.6895 17.6262 18.7734L18.4524 18.21L19.5792 19.8624L18.753 20.4258C17.0878 21.5613 15.1212 22.2887 13 22.4638V22.5H12.3483C12.2326 22.5033 12.1165 22.505 12 22.505C11.8835 22.505 11.7674 22.5033 11.6518 22.5H11V22.4638C8.87876 22.2887 6.91225 21.5613 5.24705 20.4258L4.42085 19.8624L5.54761 18.21L6.3738 18.7734C7.71723 19.6895 9.29484 20.2865 11 20.4557V19.4451C6.50005 18.9476 3 15.1326 3 10.5ZM12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5ZM8 10.5C8 8.29086 9.79086 6.5 12 6.5C14.2091 6.5 16 8.29086 16 10.5C16 12.7091 14.2091 14.5 12 14.5C9.79086 14.5 8 12.7091 8 10.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
