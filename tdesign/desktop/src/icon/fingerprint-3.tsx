import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-fingerprint-3')
export default class Fingerprint3 extends WeElement<IconProps> {
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
          d="M2 11C2 5.47715 6.47715 1 12 1C13.4836 1 14.8943 1.32372 16.163 1.90532L17.072 2.32203L16.2386 4.14011L15.3296 3.72339C14.317 3.25924 13.1902 3 12 3C7.58172 3 4 6.58172 4 11V14H2V11ZM18.9565 3.74724L19.606 4.50755C21.0981 6.25405 22 8.52297 22 11V14C22 16.6404 21.4309 19.1505 20.4076 21.4122L19.9954 22.3233L18.1732 21.4989L18.5854 20.5878C19.4938 18.58 20 16.3505 20 14V11C20 9.01697 19.2798 7.2047 18.0854 5.80666L17.4358 5.04635L18.9565 3.74724ZM11 5.5H12C15.0376 5.5 17.5 7.96243 17.5 11V12H15.5V11C15.5 9.067 13.933 7.5 12 7.5H11V5.5ZM9.82921 8.07892L9.22062 8.8724C8.76833 9.46211 8.5 10.1983 8.5 11V13H6.5V11C6.5 9.74299 6.9229 8.58192 7.63365 7.65523L8.24223 6.86174L9.82921 8.07892ZM13 10V14C13 17.3899 11.1254 20.3405 8.36118 21.8744L7.48678 22.3596L6.51637 20.6108L7.39077 20.1256C9.54534 18.93 11 16.6342 11 14V10H13ZM17.5364 14.082L17.4575 15.0789C17.2683 17.4683 16.4568 19.6835 15.1857 21.5607L14.625 22.3887L12.9689 21.2673L13.5296 20.4393C14.6123 18.8405 15.3027 16.9557 15.4637 14.9211L15.5426 13.9242L17.5364 14.082ZM8.37263 15.4634L7.85652 16.3199C7.07066 17.6241 5.63811 18.5 4 18.5H2V16.5H4C4.90822 16.5 5.70444 16.0163 6.14347 15.2877L6.65958 14.4312L8.37263 15.4634Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
