import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-numbers-8-1')
export default class Numbers81 extends WeElement<IconProps> {
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
          d="M12 5.5C10.7574 5.5 9.75 6.50736 9.75 7.75C9.75 8.99264 10.7574 10 12 10C13.2426 10 14.25 8.99264 14.25 7.75C14.25 6.50736 13.2426 5.5 12 5.5ZM14.8572 10.8963C16.1525 11.7998 17 13.3009 17 15C17 17.7614 14.7614 20 12 20C9.23858 20 7 17.7614 7 15C7 13.3009 7.84747 11.7998 9.14277 10.8963C8.28717 10.1188 7.75 8.99714 7.75 7.75C7.75 5.40279 9.65279 3.5 12 3.5C14.3472 3.5 16.25 5.40279 16.25 7.75C16.25 8.99714 15.7128 10.1188 14.8572 10.8963ZM12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
