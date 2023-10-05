import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-user-talk-1')
export default class UserTalk1 extends WeElement<IconProps> {
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
          d="M8.5 4C6.84315 4 5.5 5.34315 5.5 7C5.5 8.65685 6.84315 10 8.5 10C10.1569 10 11.5 8.65685 11.5 7C11.5 5.34315 10.1569 4 8.5 4ZM3.5 7C3.5 4.23858 5.73858 2 8.5 2C11.2614 2 13.5 4.23858 13.5 7C13.5 9.76142 11.2614 12 8.5 12C5.73858 12 3.5 9.76142 3.5 7ZM20.5725 5.64806L21.0704 6.5153C21.6797 7.57662 22.0001 8.77914 21.9996 10.0029C21.9992 11.2267 21.678 12.429 21.0679 13.4899L20.5694 14.3568L18.8356 13.3598L19.3341 12.4929C19.7699 11.7351 19.9993 10.8764 19.9996 10.0022C20 9.12809 19.7711 8.26915 19.3359 7.51107L18.838 6.64382L20.5725 5.64806ZM17.5375 7.39046L18.0354 8.25771C18.34 8.78837 18.5002 9.38962 18.5 10.0015C18.4998 10.6134 18.3392 11.2146 18.0341 11.745L17.5356 12.6119L15.8019 11.6149L16.3003 10.748C16.4311 10.5207 16.4999 10.2631 16.5 10.0008C16.5001 9.73858 16.4314 9.4809 16.3009 9.25347L15.803 8.38623L17.5375 7.39046ZM0 19C0 16.2386 2.23858 14 5 14H12C14.7614 14 17 16.2386 17 19V21H15V19C15 17.3431 13.6569 16 12 16H5C3.34315 16 2 17.3431 2 19V21H0V19Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
