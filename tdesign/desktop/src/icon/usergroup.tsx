import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-usergroup')
export default class Usergroup extends WeElement<IconProps> {
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
          d="M7 5C5.34315 5 4 6.34315 4 8C4 9.65685 5.34315 11 7 11V13C4.23858 13 2 15.2386 2 18V22H0V18C0 15.3075 1.52021 12.97 3.74913 11.7991C2.67847 10.882 2 9.52024 2 8C2 5.23858 4.23858 3 7 3H8V4.99951C8.91223 3.78534 10.3644 3 12 3C13.6356 3 15.0878 3.78534 16 4.99951V3H17C19.7614 3 22 5.23858 22 8C22 9.52024 21.3215 10.882 20.2509 11.7991C22.4798 12.97 24 15.3075 24 18V22H22V18C22 15.2386 19.7614 13 17 13V11C18.6569 11 20 9.65685 20 8C20 6.34315 18.6569 5 17 5L16 4.99951C16.6277 5.83517 17 6.87439 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 6.87439 7.37231 5.83517 8 4.99951L7 5ZM12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5ZM4 19C4 16.2386 6.23858 14 9 14H15C17.7614 14 20 16.2386 20 19V22H4V19ZM9 16C7.34315 16 6 17.3431 6 19V20H18V19C18 17.3431 16.6569 16 15 16H9Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
