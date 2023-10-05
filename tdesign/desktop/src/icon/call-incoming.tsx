import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-call-incoming')
export default class CallIncoming extends WeElement<IconProps> {
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
          d="M22.0316 3.37784L18.7384 6.67106L20.8571 6.71662L20.8141 8.71615L15.3956 8.59966L15.279 3.18108L17.2786 3.13809L17.3241 5.25686L20.6174 1.96362L22.0316 3.37784ZM1 2.00006H9.57995L11.0668 8.69067L9.2078 10.5496C10.2994 12.2508 11.7492 13.7007 13.4504 14.7923L15.3094 12.9333L22 14.4201V23.0001H21C17.0022 23.0001 13.2755 21.826 10.1497 19.8037C7.76894 18.2634 5.73668 16.2311 4.1964 13.8504C2.17402 10.7245 1 6.99787 1 3.00006V2.00006ZM3.02729 4.00006C3.20351 7.22083 4.22584 10.2141 5.87561 12.764C7.26238 14.9075 9.09261 16.7377 11.2361 18.1245C13.786 19.7742 16.7792 20.7966 20 20.9728V16.0245L15.9473 15.1239L13.7725 17.2986L13.1102 16.9225C10.5952 15.4944 8.50568 13.4049 7.07755 10.8899L6.70146 10.2275L8.87621 8.05279L7.97561 4.00006H3.02729Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
