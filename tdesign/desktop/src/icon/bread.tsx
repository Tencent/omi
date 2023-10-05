import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-bread')
export default class Bread extends WeElement<IconProps> {
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
        <g id="&amp;#233;&amp;#157;&amp;#162;&amp;#229;&amp;#140;&amp;#133;_bread">
          <path
            id="Union"
            d="M5.02266 11.2778C4.97159 11.7407 5.08681 12.1378 5.40975 12.4608L9.18575 16.2368L7.77154 17.651L4.14468 14.0241C4.13478 14.0504 4.12467 14.0776 4.11435 14.1058C3.55741 15.6265 4.07882 17.3459 5.29035 18.6333C6.50275 19.9216 8.23278 20.5882 9.82842 20.1833C11.9519 19.6445 14.253 18.1572 16.2567 16.2366C18.1772 14.233 19.6645 11.9319 20.2034 9.8084C20.6083 8.21276 19.9416 6.48273 18.6533 5.27033C17.3659 4.0588 15.6465 3.53739 14.1258 4.09433C14.0976 4.10465 14.0704 4.11476 14.0442 4.12466L17.671 7.75152L16.2568 9.16573L12.4808 5.38973C12.1579 5.06679 11.7608 4.95157 11.2978 5.00264C10.8093 5.05653 10.2681 5.30026 9.80866 5.67991C9.3448 6.0632 9.05145 6.51187 8.95457 6.88901C8.87037 7.21676 8.92375 7.48954 9.18573 7.75151L13.4284 11.9941L12.0142 13.4084L7.77151 9.16572C7.50954 8.90375 7.23676 8.85036 6.90901 8.93456C6.53188 9.03144 6.08321 9.32479 5.69992 9.78865C5.32027 10.2481 5.07655 10.7893 5.02266 11.2778ZM6.92916 6.90916C6.94383 6.73496 6.97369 6.56177 7.01747 6.39137C7.24576 5.5027 7.83702 4.71465 8.5347 4.13815C9.23677 3.55802 10.134 3.1189 11.0785 3.01471C11.3892 2.98042 11.7062 2.98294 12.0203 3.02903C12.1661 2.86248 12.332 2.74363 12.4648 2.66097C12.7324 2.49444 13.0687 2.35157 13.438 2.21632C15.8506 1.3327 18.3417 2.23075 20.0239 3.81386C21.7052 5.39609 22.7673 7.83586 22.1419 10.3003C21.4856 12.8869 19.7466 15.4899 17.6852 17.6365L17.6712 17.6511L17.6566 17.6652C15.5099 19.7265 12.9069 21.4656 10.3203 22.1219C7.85588 22.7473 5.41611 21.6852 3.83388 20.0039C2.25077 18.3217 1.35272 15.8306 2.23634 13.418C2.37159 13.0487 2.51446 12.7124 2.68099 12.4448C2.76365 12.312 2.8825 12.1461 3.04905 12.0003C3.00295 11.6861 3.00044 11.3692 3.03472 11.0585C3.13892 10.114 3.57804 9.21676 4.15817 8.51468C4.73466 7.81701 5.52271 7.22576 6.41138 6.99746C6.58178 6.95368 6.75496 6.92383 6.92916 6.90916Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
