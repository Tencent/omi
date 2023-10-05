import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-system-search')
export default class SystemSearch extends WeElement<IconProps> {
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
          d="M1 1H23V12H21V3H3V16H12V18H1V1ZM18.25 15C19.7688 15 21 16.2312 21 17.75C21 18.5084 20.693 19.1951 20.1965 19.6926C20.1936 19.6955 20.1907 19.6984 20.1878 19.7013C19.6907 20.195 19.006 20.5 18.25 20.5C16.7312 20.5 15.5 19.2688 15.5 17.75C15.5 16.2312 16.7312 15 18.25 15ZM22.2419 20.3254C22.7216 19.5834 23 18.6992 23 17.75C23 15.1266 20.8734 13 18.25 13C15.6266 13 13.5 15.1266 13.5 17.75C13.5 20.3734 15.6266 22.5 18.25 22.5C19.2004 22.5 20.0857 22.2209 20.8282 21.7401L22.4983 23.4142L23.9142 22.0017L22.2419 20.3254ZM2.25 21H12V23H2.25V21Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
