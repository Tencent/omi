import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-education')
export default class Education extends WeElement<IconProps> {
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
          d="M11.9999 0.807129L23.8348 8.49981L21.9999 9.6925V15.9998H19.9999V10.9925L18.9999 11.6425V17.4998C18.9999 18.9696 17.986 20.1154 16.7465 20.8385C15.4824 21.5758 13.802 21.9998 11.9999 21.9998C10.1979 21.9998 8.51748 21.5758 7.25343 20.8385C6.01393 20.1154 4.99994 18.9696 4.99994 17.4998V11.6425L0.165039 8.49981L11.9999 0.807129ZM6.99994 12.9425V17.4998C6.99994 17.963 7.3291 18.5672 8.26117 19.1109C9.16869 19.6403 10.4883 19.9998 11.9999 19.9998C13.5116 19.9998 14.8312 19.6403 15.7387 19.1109C16.6708 18.5672 16.9999 17.963 16.9999 17.4998V12.9425L11.9999 16.1925L6.99994 12.9425ZM20.165 8.49981L11.9999 3.1925L3.83484 8.49981L11.9999 13.8071L20.165 8.49981Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
