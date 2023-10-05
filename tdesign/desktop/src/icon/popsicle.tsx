import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-popsicle')
export default class Popsicle extends WeElement<IconProps> {
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
        <g id="&amp;#229;&amp;#134;&amp;#176;&amp;#230;&amp;#163;&amp;#141;_popsicle">
          <path
            id="Union"
            d="M11.1511 2.95015C13.8848 0.216485 18.317 0.216485 21.0506 2.95015C23.7843 5.68382 23.7843 10.116 21.0506 12.8496L12.2118 21.6885L9.38338 18.8601L6.2014 22.042C5.02983 23.2136 3.13033 23.2136 1.95876 22.042C0.787185 20.8705 0.787185 18.971 1.95876 17.7994L5.14074 14.6174L2.31231 11.789L11.1511 2.95015ZM12.2118 18.8601L19.2535 11.8183C19.1761 11.5497 19.0433 11.1933 18.8215 10.8209C18.3707 10.064 17.5348 9.20233 15.9072 8.88096C13.6457 8.43445 12.3603 7.17485 11.662 6.00232C11.5652 5.8398 11.4801 5.67972 11.4052 5.52457L5.14074 11.789L12.2118 18.8601ZM12.957 4.01145C13.0356 4.27634 13.1667 4.62018 13.3803 4.97894C13.8311 5.73576 14.667 6.59748 16.2946 6.91884C18.556 7.36535 19.8415 8.62495 20.5398 9.79749C20.5772 9.86034 20.6129 9.92284 20.647 9.98482C21.4931 8.13914 21.1563 5.88424 19.6364 4.36437C17.8095 2.53748 14.9207 2.41984 12.957 4.01145ZM6.55495 16.0316L3.37297 19.2136C2.98245 19.6041 2.98245 20.2373 3.37297 20.6278C3.7635 21.0184 4.39666 21.0184 4.78718 20.6278L7.96917 17.4458L6.55495 16.0316Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
