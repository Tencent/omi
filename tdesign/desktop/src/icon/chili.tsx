import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chili')
export default class Chili extends WeElement<IconProps> {
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
        <g id="&amp;#232;&amp;#190;&amp;#163;&amp;#230;&amp;#164;&amp;#146;_chili">
          <path
            id="Union"
            d="M19.7011 2.12857L19.2259 4.1012C21.2053 5.19798 22.3778 7.45528 21.9853 9.81546C21.9275 10.1634 21.8679 10.5074 21.8058 10.8471C21.4258 12.9227 20.2006 16.8795 17.7059 19.3741C14.9866 22.0935 11.402 22.6085 8.62982 22.4938C7.23244 22.436 6.00126 22.2176 5.11996 22.0143C4.67818 21.9124 4.32131 21.8136 4.0719 21.7393C3.94712 21.7021 3.84901 21.671 3.78038 21.6485C3.74606 21.6373 3.71908 21.6282 3.69981 21.6217L3.67672 21.6137L3.66958 21.6112L3.66618 21.61L0.475586 20.4816L3.76138 19.6956L3.76247 19.6953L3.7669 19.6942C3.77395 19.6923 3.78765 19.6887 3.80757 19.683C3.84745 19.6716 3.91215 19.6521 3.99831 19.6229C4.17079 19.5645 4.4283 19.4676 4.74436 19.3194C5.37709 19.0226 6.23855 18.523 7.12295 17.7199C8.87075 16.1327 10.7836 13.2931 11.1129 8.27212C11.1162 8.2205 11.1195 8.16866 11.1225 8.1166L11.1231 8.1071C11.3383 4.9474 14.4596 3.06687 17.3216 3.46628L17.7567 1.66016L19.7011 2.12857ZM7.00774 20.3351C7.52948 20.4108 8.10442 20.4704 8.71248 20.4956C11.2218 20.5994 14.1373 20.1144 16.2917 17.9599C18.1891 16.0626 19.2921 12.9815 19.7341 10.9989L18.8724 10.1499L17.2173 11.2533L16.2173 9.75331L14.7173 10.7533L13.5535 9.00763L13.0492 9.1337C12.5536 14.2317 10.5069 17.3484 8.46751 19.2005C7.96807 19.654 7.47317 20.0281 7.00774 20.3351ZM13.557 6.94521L14.4358 6.7255L15.272 7.97981L16.772 6.97981L17.772 8.47981L19.1169 7.58321L20.0347 8.48742C19.8754 7.18311 18.9865 6.05649 17.728 5.61313C17.5386 5.54643 17.3403 5.49497 17.134 5.46065C15.6614 5.21578 14.2499 5.87382 13.557 6.94521Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
