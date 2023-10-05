import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chart-line-data-1')
export default class ChartLineData1 extends WeElement<IconProps> {
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
          d="M4 2V20H22V22H2V2H4ZM20.3071 7.27082L22.089 8.17911L21.6348 9.07004L20.7439 8.61589C21.6348 9.07004 21.635 9.06981 21.6348 9.07004L21.6336 9.0725L21.6313 9.07692L21.6238 9.09151L21.597 9.14279C21.5739 9.18644 21.5407 9.24862 21.498 9.32648C21.4127 9.48206 21.2893 9.70107 21.1335 9.96054C20.8235 10.4766 20.3778 11.1661 19.843 11.8386C19.3156 12.5018 18.6628 13.1981 17.929 13.6828C17.1995 14.1647 16.2484 14.5254 15.2261 14.2229C13.5223 13.7187 12.9781 12.3765 12.6113 11.4719C12.6006 11.4454 12.59 11.4193 12.5795 11.3936C12.1883 10.4323 11.9529 9.95994 11.2044 9.74776C10.9684 9.68086 10.6324 9.72405 10.1445 10.0466C9.66023 10.3668 9.15917 10.8797 8.68977 11.4704C8.22755 12.0521 7.8328 12.6621 7.55153 13.1319C7.41174 13.3654 7.30194 13.561 7.22784 13.6967C7.19083 13.7645 7.16284 13.8171 7.14458 13.8519L7.12461 13.8902L7.12029 13.8986L7.11968 13.8998L6.66746 14.7913L4.88381 13.8866L5.33619 12.9947L6.22802 13.4471C5.33619 12.9947 5.33608 12.995 5.33619 12.9947L5.33745 12.9923L5.33972 12.9878L5.34722 12.9732L5.37394 12.9219C5.39686 12.8783 5.42993 12.8161 5.47241 12.7383C5.55731 12.5828 5.68027 12.3639 5.83556 12.1045C6.14444 11.5886 6.58912 10.8992 7.12394 10.2262C7.65157 9.56218 8.30518 8.86507 9.04153 8.37824C9.77429 7.8938 10.7249 7.53303 11.7499 7.82358C13.4881 8.31631 14.0379 9.66956 14.4096 10.5847C14.4171 10.6032 14.4246 10.6216 14.432 10.6397C14.8278 11.6124 15.0579 12.0874 15.7936 12.3051C16.0159 12.3708 16.3414 12.3346 16.8266 12.0141C17.3077 11.6963 17.8078 11.1846 18.2777 10.5937C18.7403 10.0121 19.1363 9.40144 19.4188 8.93094C19.5592 8.69711 19.6697 8.50119 19.7442 8.36517C19.7814 8.29724 19.8096 8.24445 19.828 8.20958L19.8482 8.17112L19.8525 8.16267L19.853 8.16175L20.3071 7.27082Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
