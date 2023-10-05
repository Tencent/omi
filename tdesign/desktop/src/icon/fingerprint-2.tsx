import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-fingerprint-2')
export default class Fingerprint2 extends WeElement<IconProps> {
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
          d="M22 11C22 5.47715 17.5228 1 12 1C6.47715 1 2 5.47715 2 11V14C2 16.6404 2.56914 19.1505 3.59239 21.4122L4.00459 22.3233L5.82677 21.4989L5.41457 20.5878C4.5062 18.58 4 16.3505 4 14V11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11V14H22V11ZM17.5 11C17.5 7.96243 15.0376 5.5 12 5.5C8.96243 5.5 6.5 7.96243 6.5 11V14C6.5 16.7998 7.35337 19.4032 8.81431 21.5607L9.37501 22.3887L11.0311 21.2673L10.4704 20.4393C9.22649 18.6024 8.5 16.3876 8.5 14V11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11V14C15.5 16.4853 17.5147 18.5 20 18.5H22V16.5H20C18.6193 16.5 17.5 15.3807 17.5 14V11ZM11 10V14C11 17.3899 12.8746 20.3405 15.6388 21.8744L16.5132 22.3596L17.4836 20.6108L16.6092 20.1256C14.4547 18.93 13 16.6342 13 14V10H11Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
