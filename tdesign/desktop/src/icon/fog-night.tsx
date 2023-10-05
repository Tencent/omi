import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-fog-night')
export default class FogNight extends WeElement<IconProps> {
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
          d="M10.916 0.585449L10.466 2.25967C10.166 3.37554 10.1961 4.59695 10.5355 5.86378C11.5361 9.59804 15.3745 11.8141 19.1087 10.8135C19.5548 10.694 19.9783 10.5344 20.3768 10.3398L21.9173 9.58766L21.8137 11.2988C21.7512 12.3323 21.439 13.3586 20.8947 14.4473L20.4475 15.3417L18.6586 14.4473L19.1058 13.5529C19.2386 13.2874 19.3507 13.0346 19.4441 12.7922C14.7009 13.9595 9.87389 11.1219 8.60368 6.38142C8.35026 5.43563 8.22923 4.47658 8.26596 3.52925C4.92368 5.18739 3.09941 9.02142 4.10222 12.764C4.11869 12.8254 4.18731 13.0153 4.27567 13.2433C4.31527 13.3454 4.35308 13.4407 4.38107 13.5105L4.4143 13.5931L4.42329 13.6153L4.42604 13.622L4.80397 14.5481L2.95222 15.3038L2.57439 14.3779L2.57052 14.3684L2.5604 14.3435L2.52446 14.2542C2.49462 14.1797 2.45393 14.0772 2.41088 13.9662C2.33392 13.7676 2.22056 13.4689 2.17037 13.2816C0.740954 7.94694 3.90678 2.46357 9.24144 1.03415L10.916 0.585449ZM2.00122 17.0001H8.00122V19.0001H2.00122V17.0001ZM10.0012 17.0001H22.0012V19.0001H10.0012V17.0001ZM17.0012 21.0001H22.0012V23.0001H17.0012V21.0001ZM2.00122 21.0001H15.0012V23.0001H2.00122V21.0001Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
