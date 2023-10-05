import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-sensors-2')
export default class Sensors2 extends WeElement<IconProps> {
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
          d="M6.34315 4.92886L5.63604 5.63597C4.00626 7.26574 3 9.51437 3 11.9999C3 14.4855 4.00631 16.7342 5.63614 18.364L6.34326 19.0711L4.92906 20.4853L4.22195 19.7782C2.23236 17.7887 1 15.0373 1 11.9999C1 8.96264 2.23231 6.21127 4.22183 4.22176L4.92893 3.51465L6.34315 4.92886ZM19.0711 3.51465L19.7782 4.22176C21.7677 6.21127 23 8.96264 23 11.9999C23 15.0373 21.7676 17.7887 19.7781 19.7782L19.0709 20.4853L17.6567 19.0711L18.3639 18.364C19.9937 16.7342 21 14.4855 21 11.9999C21 9.51437 19.9937 7.26574 18.364 5.63597L17.6569 4.92886L19.0711 3.51465ZM9.17157 7.75729L8.46446 8.46439C7.55855 9.37031 7 10.6189 7 11.9999C7 13.381 7.55859 14.6296 8.46456 15.5356L9.17168 16.2426L7.75751 17.6569L7.05038 16.9498C5.78465 15.6841 5 13.9327 5 11.9999C5 10.0672 5.78459 8.31584 7.05025 7.05018L7.75736 6.34307L9.17157 7.75729ZM16.2426 6.34308L16.9497 7.05018C18.2154 8.31584 19 10.0672 19 11.9999C19 13.9327 18.2153 15.6841 16.9496 16.9498L16.2425 17.6569L14.8283 16.2426L15.5354 15.5356C16.4414 14.6296 17 13.381 17 11.9999C17 10.6189 16.4415 9.37031 15.5355 8.4644L14.8284 7.75729L16.2426 6.34308ZM13 9.00015V15.0002H11V9.00015H13Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
