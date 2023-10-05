import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-component-switch')
export default class ComponentSwitch extends WeElement<IconProps> {
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
          d="M7.5 8.5C5.567 8.5 4 10.067 4 12C4 13.933 5.567 15.5 7.5 15.5C9.433 15.5 11 13.933 11 12C11 10.067 9.433 8.5 7.5 8.5ZM11.7428 8.5C12.5282 9.45094 13 10.6704 13 12C13 13.3296 12.5282 14.5491 11.7428 15.5H16.5C18.433 15.5 20 13.933 20 12C20 10.067 18.433 8.5 16.5 8.5H11.7428ZM2 12C2 8.96243 4.46243 6.5 7.5 6.5H16.5C19.5376 6.5 22 8.96243 22 12C22 15.0376 19.5376 17.5 16.5 17.5H7.5C4.46243 17.5 2 15.0376 2 12Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
