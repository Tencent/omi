import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-dividers')
export default class Dividers extends WeElement<IconProps> {
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
          d="M13.0004 1V2.23201C14.9312 2.68154 16.3754 4.40425 16.3754 6.47059C16.3754 7.3274 16.1259 8.12713 15.6965 8.80043L18.9664 15H22.0004V17H20.0213L22.3515 21.418L20.5825 22.351L17.7601 17L13.0004 17V19H11.0004V17H6.24077L3.41843 22.351L1.64941 21.418L3.97963 17H2.00045L2.00045 15H5.0345L8.30439 8.80043C7.87499 8.12713 7.62545 7.3274 7.62545 6.47059C7.62545 4.40425 9.06968 2.68154 11.0004 2.23201V1H13.0004ZM9.80743 10.2378L7.29564 15L11.0004 15V13H13.0004V15L16.7053 15L14.1935 10.2378C13.5485 10.6101 12.799 10.8235 12.0004 10.8235C11.2019 10.8235 10.4524 10.6101 9.80743 10.2378ZM12.0004 4.11765C10.6826 4.11765 9.62545 5.17727 9.62545 6.47059C9.62545 7.0719 9.85186 7.61927 10.2278 8.03654C10.6633 8.52001 11.2948 8.82353 12.0004 8.82353C12.7061 8.82353 13.3375 8.52001 13.7731 8.03654C14.149 7.61927 14.3754 7.0719 14.3754 6.47059C14.3754 5.17727 13.3183 4.11765 12.0004 4.11765Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
