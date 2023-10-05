import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-undertake-hold-up')
export default class UndertakeHoldUp extends WeElement<IconProps> {
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
          d="M13.9521 5.70926C12.6412 4.39835 10.5158 4.39835 9.20487 5.70926C7.89395 7.02018 7.89395 9.14559 9.20487 10.4565L9.99782 11.25H13.125C13.8875 11.25 14.6188 11.5529 15.1579 12.0921C15.6971 12.6312 16 13.3625 16 14.125C16 14.2179 15.9955 14.3103 15.9866 14.402L17.1107 14.1434L20.7975 10.4578C22.1084 9.14685 22.1084 7.02143 20.7975 5.71052C19.4866 4.3996 17.3612 4.3996 16.0503 5.71052L15.0009 6.75806L13.9521 5.70926ZM20.5571 13.526C20.5983 13.532 20.6394 13.5389 20.6803 13.5468C21.0663 13.6218 21.4298 13.7848 21.7426 14.0231C22.0554 14.2614 22.309 14.5686 22.4837 14.9209C22.6584 15.2731 22.7495 15.6609 22.75 16.0542C22.7502 16.5292 22.618 16.9956 22.3682 17.3996C22.1185 17.8036 21.761 18.13 21.336 18.3422L21.3093 18.3556L17.5695 19.9509L11.3731 21.5H0V14.25H4.08579L6.13787 12.1979C6.44046 11.8964 6.79953 11.6574 7.19454 11.4948C7.25867 11.4684 7.32353 11.4441 7.38903 11.4219C5.70857 9.31876 5.84244 6.24326 7.79065 4.29505C9.76511 2.3206 12.8974 2.20968 15.0019 3.96231C17.1065 2.21099 20.2377 2.32233 22.2117 4.2963C24.3037 6.38827 24.3037 9.78001 22.2117 11.872L20.5571 13.526ZM3.5 16.25H2V19.5H3.5V16.25ZM5.5 19.5H11.1269L16.9306 18.0491L20.4625 16.5424C20.5462 16.4963 20.6167 16.4294 20.667 16.348C20.7212 16.2604 20.7499 16.1595 20.75 16.0565C20.7499 15.9708 20.73 15.8863 20.692 15.8096C20.6539 15.7328 20.5986 15.6659 20.5305 15.6139C20.4623 15.562 20.3831 15.5265 20.299 15.5102C20.2149 15.4938 20.1282 15.4971 20.0455 15.5198L20.0256 15.5252L13.6135 17L13.1251 17C13.1251 17 13.1251 17 13.1251 17H10V15H13.125C13.1561 15 13.1869 14.9984 13.2174 14.9951C13.4155 14.9741 13.6016 14.8859 13.7437 14.7437C13.9078 14.5796 14 14.3571 14 14.125C14 13.8929 13.9078 13.6704 13.7437 13.5063C13.5796 13.3422 13.3571 13.25 13.125 13.25H8.4375L8.43505 13.25C8.27074 13.2496 8.10797 13.2816 7.95605 13.3442C7.80432 13.4066 7.66639 13.4984 7.55011 13.6141C7.54995 13.6143 7.55027 13.614 7.55011 13.6141L5.5 15.6642V19.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
