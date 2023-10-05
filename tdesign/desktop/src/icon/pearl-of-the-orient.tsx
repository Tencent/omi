import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-pearl-of-the-orient')
export default class PearlOfTheOrient extends WeElement<IconProps> {
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
          d="M12.9974 0.999023L12.9992 3.17032C14.1648 3.58196 14.9999 4.69339 14.9999 5.99987C14.9999 7.30608 14.1651 8.41732 12.9999 8.82916V13.1259C14.7252 13.5699 15.9999 15.136 15.9999 16.9999C15.9999 17.9861 15.6417 18.8913 15.0495 19.5884C14.9886 19.6601 14.9252 19.7296 14.8595 19.7968L16.7525 22.9999H14.4276L13.1479 20.8324C12.7838 20.9414 12.3983 20.9999 11.9999 20.9999C11.601 20.9999 11.2149 20.9412 10.8503 20.8319L9.57276 22.9999H7.24902L9.13917 19.7956C9.09347 19.7488 9.04891 19.701 9.00554 19.652C8.34559 18.9073 7.99992 18.0088 7.99992 16.9999C7.99992 15.136 9.2747 13.5699 10.9999 13.1259V8.82916C9.83473 8.41732 8.99992 7.30608 8.99992 5.99987C8.99992 4.69391 9.8344 3.58285 10.9992 3.17082L10.9974 1.00071L12.9974 0.999023ZM11.9999 4.99987C11.4476 4.99987 10.9999 5.44758 10.9999 5.99987C10.9999 6.55215 11.4476 6.99987 11.9999 6.99987C12.5522 6.99987 12.9999 6.55215 12.9999 5.99987C12.9999 5.44758 12.5522 4.99987 11.9999 4.99987ZM11.9999 14.9999C10.8954 14.9999 9.99992 15.8953 9.99992 16.9999C9.99992 17.517 10.1646 17.9444 10.5024 18.3255C10.6347 18.4749 10.7888 18.6042 10.9595 18.7084C11.2619 18.8932 11.6169 18.9999 11.9999 18.9999C12.3824 18.9999 12.7369 18.8935 13.0391 18.7092C13.2223 18.5975 13.3865 18.4569 13.5252 18.2936C13.8219 17.9444 13.9999 17.4942 13.9999 16.9999C13.9999 15.8953 13.1045 14.9999 11.9999 14.9999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
