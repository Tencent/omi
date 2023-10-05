import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-dv')
export default class Dv extends WeElement<IconProps> {
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
          d="M2 2H12V8.68241C12.4561 9.36872 12.7749 10.1548 12.9169 11H14V7H22V17H14V13H12.9169C12.7749 13.8452 12.4561 14.6313 12 15.3176V22H2V15.3176C1.36833 14.3671 1 13.2254 1 12C1 10.7746 1.36833 9.63288 2 8.68241V2ZM4 6.80293C4.88231 6.29257 5.90703 6 7 6C8.09297 6 9.11769 6.29257 10 6.80293V4H4V6.80293ZM4 17.1971V20H10V17.1971C9.11769 17.7074 8.09297 18 7 18C5.90703 18 4.88231 17.7074 4 17.1971ZM7 8C5.69217 8 4.53097 8.6266 3.79949 9.60019C3.29723 10.2687 3 11.0982 3 12C3 12.9018 3.29723 13.7313 3.79949 14.3998C4.53097 15.3734 5.69217 16 7 16C8.30783 16 9.46903 15.3734 10.2005 14.3998C10.7028 13.7313 11 12.9018 11 12C11 11.0982 10.7028 10.2687 10.2005 9.60019C9.46903 8.6266 8.30783 8 7 8ZM16 9V15H20V9H16Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
