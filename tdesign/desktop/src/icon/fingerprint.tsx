import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-fingerprint')
export default class Fingerprint extends WeElement<IconProps> {
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
          d="M2 11C2 5.47715 6.47715 1 12 1C17.5228 1 22 5.47715 22 11V14C22 16.6404 21.4309 19.1505 20.4076 21.4122L19.9954 22.3233L18.1732 21.4989L18.5854 20.5878C19.4938 18.58 20 16.3505 20 14V11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11V14H2V11ZM6.5 11C6.5 7.96243 8.96243 5.5 12 5.5C15.0376 5.5 17.5 7.96243 17.5 11V14C17.5 16.7998 16.6466 19.4032 15.1857 21.5607L14.625 22.3887L12.9689 21.2673L13.5296 20.4393C14.7735 18.6024 15.5 16.3876 15.5 14V11C15.5 9.067 13.933 7.5 12 7.5C10.067 7.5 8.5 9.067 8.5 11V14C8.5 16.4853 6.48528 18.5 4 18.5H2V16.5H4C5.38071 16.5 6.5 15.3807 6.5 14V11ZM13 10V14C13 17.3899 11.1254 20.3405 8.36118 21.8744L7.48678 22.3596L6.51637 20.6108L7.39077 20.1256C9.54534 18.93 11 16.6342 11 14V10H13Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
