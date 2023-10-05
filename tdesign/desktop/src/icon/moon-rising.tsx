import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-moon-rising')
export default class MoonRising extends WeElement<IconProps> {
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
          d="M1 20.0001H9.30278L12 18.2019L14.6972 20.0001H23V18.0001H15.3028L12 15.7982L8.69722 18.0001H1V20.0001ZM20.4472 16.3417L20.8944 15.4473C21.4388 14.3586 21.7509 13.3323 21.8135 12.2988L21.917 10.5877L20.3765 11.3398C19.9781 11.5344 19.5545 11.694 19.1085 11.8135C15.3742 12.8141 11.5359 10.598 10.5353 6.86378C10.1958 5.59695 10.1658 4.37554 10.4657 3.25967L10.9158 1.58545L9.24118 2.03415C3.90652 3.46357 0.74069 8.94694 2.17011 14.2816C2.22029 14.4689 2.33366 14.7676 2.41062 14.9662C2.45367 15.0772 2.49435 15.1797 2.5242 15.2542L2.56014 15.3435L2.57026 15.3684L2.95196 16.3038L4.8037 15.5481L4.42302 14.6153L4.41404 14.5931L4.3808 14.5105C4.35282 14.4407 4.31501 14.3454 4.2754 14.2433C4.18705 14.0153 4.11843 13.8254 4.10196 13.764C3.09915 10.0214 4.92342 6.18738 8.2657 4.52924C8.22897 5.47658 8.35 6.43563 8.60342 7.38142C9.87362 12.1219 14.7007 14.9595 19.4439 13.7922C19.3505 14.0346 19.2383 14.2874 19.1056 14.5529L18.6584 15.4473L20.4472 16.3417Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
