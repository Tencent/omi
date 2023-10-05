import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-call-1')
export default class Call1 extends WeElement<IconProps> {
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
          d="M16.0524 1.78687L17.0177 2.04804C18.199 2.36767 19.2759 2.99141 20.141 3.85706C21.006 4.72271 21.629 5.80002 21.9478 6.98155L22.2083 7.94702L20.2773 8.46803L20.0168 7.50255C19.7891 6.6586 19.3441 5.8891 18.7262 5.27078C18.1084 4.65246 17.3392 4.20693 16.4954 3.97862L15.5301 3.71745L16.0524 1.78687ZM1 2.00002H9.57995L11.0668 8.69063L9.2078 10.5496C10.2994 12.2508 11.7492 13.7006 13.4504 14.7922L15.3094 12.9333L22 14.4201V23H21C17.0022 23 13.2755 21.826 10.1497 19.8036C7.76894 18.2633 5.73668 16.2311 4.1964 13.8504C2.17402 10.7245 1 6.99783 1 3.00002V2.00002ZM3.02729 4.00002C3.20351 7.22079 4.22584 10.214 5.87561 12.764C7.26238 14.9074 9.09261 16.7376 11.2361 18.1244C13.786 19.7742 16.7792 20.7965 20 20.9727V16.0244L15.9473 15.1238L13.7725 17.2986L13.1102 16.9225C10.5952 15.4943 8.50568 13.4048 7.07755 10.8898L6.70146 10.2275L8.87621 8.05275L7.97561 4.00002H3.02729ZM15.1384 5.16501L16.1037 5.42618C16.6944 5.586 17.2328 5.89787 17.6653 6.33069C18.0979 6.76352 18.4094 7.30217 18.5688 7.89293L18.8293 8.85841L16.8983 9.37942L16.6378 8.41394C16.5695 8.16076 16.436 7.92991 16.2506 7.74441C16.0653 7.55891 15.8345 7.42526 15.5814 7.35676L14.6161 7.09559L15.1384 5.16501Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
