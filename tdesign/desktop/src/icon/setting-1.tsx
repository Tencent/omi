import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-setting-1')
export default class Setting1 extends WeElement<IconProps> {
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
          d="M9.17986 1H14.8195L15.4669 4.23728C16.0059 4.47836 16.515 4.77378 16.9872 5.11643L20.116 4.05799L22.9358 8.94203L20.4548 11.1224C20.4845 11.4112 20.4997 11.704 20.4997 12C20.4997 12.2961 20.4845 12.5888 20.4548 12.8776L22.9358 15.058L20.116 19.942L16.9872 18.8836C16.515 19.2262 16.0059 19.5216 15.4669 19.7627L14.8195 23H9.17986L8.5324 19.7627C7.99338 19.5216 7.48432 19.2262 7.01213 18.8836L3.88328 19.942L1.06348 15.058L3.54449 12.8776C3.51483 12.5888 3.49966 12.2961 3.49966 12C3.49966 11.704 3.51483 11.4112 3.54449 11.1224L1.06348 8.94203L3.88328 4.05799L7.01211 5.11643C7.4843 4.77378 7.99338 4.47836 8.5324 4.23728L9.17986 1ZM10.8195 3L10.2785 5.70491L9.75327 5.89834C9.05162 6.15676 8.40614 6.53319 7.84109 7.00413L7.41089 7.36268L4.79553 6.47793L3.61533 8.52209L5.68752 10.3432L5.59319 10.8941C5.53177 11.2529 5.49966 11.6223 5.49966 12C5.49966 12.3777 5.53177 12.7471 5.59319 13.1059L5.68752 13.6568L3.61533 15.4779L4.79553 17.5221L7.41091 16.6373L7.8411 16.9959C8.40615 17.4668 9.05162 17.8432 9.75327 18.1017L10.2785 18.2951L10.8195 21H13.1799L13.7208 18.2951L14.246 18.1017C14.9477 17.8432 15.5932 17.4668 16.1582 16.9959L16.5884 16.6373L19.2038 17.5221L20.384 15.4779L18.3118 13.6568L18.4061 13.1059C18.4675 12.7471 18.4997 12.3777 18.4997 12C18.4997 11.6223 18.4675 11.2529 18.4061 10.8941L18.3118 10.3432L20.384 8.52209L19.2038 6.47793L16.5884 7.36267L16.1582 7.00413C15.5932 6.53319 14.9477 6.15676 14.246 5.89834L13.7208 5.70491L13.1799 3H10.8195ZM11.9996 9C10.3427 9 8.99956 10.3431 8.99956 12C8.99956 13.6569 10.3427 15 11.9996 15C13.6564 15 14.9996 13.6569 14.9996 12C14.9996 10.3431 13.6564 9 11.9996 9ZM6.99956 12C6.99956 9.23858 9.23814 7 11.9996 7C14.761 7 16.9996 9.23858 16.9996 12C16.9996 14.7614 14.761 17 11.9996 17C9.23814 17 6.99956 14.7614 6.99956 12Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
