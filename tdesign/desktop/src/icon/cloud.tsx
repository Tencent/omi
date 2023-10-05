import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-cloud')
export default class Cloud extends WeElement<IconProps> {
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
          d="M11 5C8.23858 5 6 7.23858 6 10C6 10.3148 6.02896 10.6218 6.0841 10.919L6.25897 11.8615L5.32474 12.0761C3.99272 12.382 3 13.5763 3 15C3 16.6569 4.34315 18 6 18H17C19.2091 18 21 16.2091 21 14C21 11.7909 19.2091 10 17 10C16.9778 10 16.9556 10.0002 16.9334 10.0005L16.0732 10.0145L15.9309 9.16602C15.5345 6.80174 13.4767 5 11 5ZM4 10C4 6.13401 7.13401 3 11 3C14.1873 3 16.8756 5.12935 17.7225 8.04306C20.6955 8.39988 23 10.9308 23 14C23 17.3137 20.3137 20 17 20H6C3.23858 20 1 17.7614 1 15C1 12.9443 2.23985 11.18 4.01191 10.4112C4.004 10.275 4 10.1379 4 10Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
