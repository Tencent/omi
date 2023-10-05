import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-institution-checked')
export default class InstitutionChecked extends WeElement<IconProps> {
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
          d="M11 0.856079L21 6.41163V9.00004H1V6.41163L11 0.856079ZM4.05913 7.00004H17.9409L11 3.144L4.05913 7.00004ZM6 11V19H4V11H6ZM12 11V19H10V11H12ZM18 11V17H16V11H18ZM22.5961 17.9395L16.9392 23.5963L13.4037 20.0608L14.8179 18.6466L16.9392 20.7679L21.1819 16.5253L22.5961 17.9395ZM1 21H12V23H1V21Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
