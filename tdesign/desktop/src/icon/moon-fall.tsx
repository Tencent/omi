import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-moon-fall')
export default class MoonFall extends WeElement<IconProps> {
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
          d="M10.9158 1.58545L10.4657 3.25967C10.1658 4.37554 10.1958 5.59695 10.5353 6.86378C11.5359 10.598 15.3742 12.8141 19.1085 11.8135C19.5545 11.694 19.9781 11.5344 20.3765 11.3398L21.917 10.5877L21.8135 12.2988C21.7509 13.3323 21.4388 14.3586 20.8944 15.4473L20.4472 16.3417L18.6584 15.4473L19.1056 14.5529C19.2383 14.2874 19.3505 14.0346 19.4439 13.7922C14.7007 14.9595 9.87363 12.1219 8.60343 7.38142C8.35 6.43563 8.22897 5.47658 8.2657 4.52925C4.92342 6.18739 3.09915 10.0214 4.10197 13.764C4.11844 13.8254 4.18705 14.0153 4.27541 14.2433C4.31502 14.3454 4.35282 14.4407 4.38081 14.5105L4.41405 14.5931L4.42303 14.6153L4.42578 14.622L4.80371 15.5481L2.95196 16.3038L2.57413 15.3779L2.57026 15.3684L2.56014 15.3435L2.5242 15.2542C2.49436 15.1797 2.45367 15.0772 2.41062 14.9662C2.33366 14.7676 2.2203 14.4689 2.17011 14.2816C0.740695 8.94694 3.90652 3.46357 9.24118 2.03415L10.9158 1.58545ZM1 18.0001H9.30278L12 19.7983L14.6972 18.0001H23V20.0001H15.3028L12 22.202L8.69722 20.0001H1V18.0001Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
