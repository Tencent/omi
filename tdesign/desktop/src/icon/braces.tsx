import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-braces')
export default class Braces extends WeElement<IconProps> {
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
          d="M2.50039 17.6C2.50039 19.4778 4.02262 21 5.90039 21H7.00039V19H5.90039C5.12719 19 4.50039 18.3732 4.50039 17.6V14C4.50039 13.2316 4.21154 12.5308 3.73649 12C4.21154 11.4692 4.50039 10.7684 4.50039 10V6.4C4.50039 5.6268 5.12719 5 5.90039 5H7.00039V3H5.90039C4.02262 3 2.50039 4.52223 2.50039 6.4V10C2.50039 10.5523 2.05268 11 1.50039 11H0.400391V13H1.50039C2.05268 13 2.50039 13.4477 2.50039 14V17.6ZM16.9996 21H18.0996C19.9774 21 21.4996 19.4778 21.4996 17.6V14C21.4996 13.4477 21.9473 13 22.4996 13H23.5996V11H22.4996C21.9473 11 21.4996 10.5523 21.4996 10V6.4C21.4996 4.52223 19.9774 3 18.0996 3H16.9996V5H18.0996C18.8728 5 19.4996 5.6268 19.4996 6.4V10C19.4996 10.7684 19.7885 11.4692 20.2635 12C19.7885 12.5308 19.4996 13.2316 19.4996 14V17.6C19.4996 18.3732 18.8728 19 18.0996 19H16.9996V21Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
