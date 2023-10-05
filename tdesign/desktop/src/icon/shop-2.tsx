import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-shop-2')
export default class Shop2 extends WeElement<IconProps> {
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
          d="M4.98178 5.10982C6.40894 3.39722 8.68374 2 12 2C15.3163 2 17.5911 3.39722 19.0182 5.10982C20.0773 6.38067 20.6733 7.82942 20.8968 9H22V11H21V20H22V22H2V20H3V11H2V9H3.10317C3.32668 7.82942 3.92274 6.38067 4.98178 5.10982ZM5 11V20H8V16.9997C8 14.7905 9.79098 13 12 13C14.2091 13 16 14.7909 16 17V20H19V11H5ZM18.8461 9C18.6403 8.231 18.2137 7.2685 17.4818 6.39018C16.7708 5.53703 15.7734 4.76496 14.4003 4.34117C14.5815 4.66019 14.7532 4.9995 14.9119 5.35201C15.4055 6.44866 15.799 7.73088 15.9419 9H18.8461ZM13.9261 9C13.7925 8.05122 13.4871 7.05935 13.0881 6.17299C12.8194 5.57591 12.5183 5.04984 12.2202 4.63657C12.144 4.53083 12.0703 4.43589 12 4.3512C11.9297 4.43589 11.856 4.53083 11.7798 4.63657C11.4817 5.04984 11.1806 5.57591 10.9119 6.17299C10.5129 7.05935 10.2075 8.05122 10.0739 9H13.9261ZM8.05806 9C8.20101 7.73088 8.59446 6.44866 9.08813 5.35201C9.24682 4.9995 9.41851 4.66019 9.59969 4.34117C8.22664 4.76496 7.22919 5.53703 6.51822 6.39018C5.78629 7.2685 5.35973 8.231 5.15392 9H8.05806ZM14 20V17C14 15.8954 13.1046 15 12 15C10.8953 15 10 15.8953 10 16.9997V20H14Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
