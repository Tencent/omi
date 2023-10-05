import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-castle-4')
export default class Castle4 extends WeElement<IconProps> {
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
          d="M22 2H14V8.34179C13.6783 8.22804 13.3441 8.14092 13 8.08311V7H11V8.08314C10.6559 8.14096 10.3217 8.2281 10 8.34186V2H2V22H22V2ZM8 9.52822C6.77404 10.6256 6 12.2224 6 14V20H4V4H8V9.52822ZM8 20V15H16V20H13V17H11V20H8ZM18 20V14C18 12.2225 17.2258 10.6256 16 9.52826V4H20V20H18ZM15.874 13H8.12593C8.35516 12.109 8.88389 11.3379 9.60061 10.7995C10.2692 10.2973 11.0985 10 12 10C12.9017 10 13.7307 10.2972 14.3993 10.7995C15.116 11.3379 15.6447 12.1091 15.874 13Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
