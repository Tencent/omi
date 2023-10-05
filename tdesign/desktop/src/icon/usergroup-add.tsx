import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-usergroup-add')
export default class UsergroupAdd extends WeElement<IconProps> {
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
          d="M9 5C7.34315 5 6 6.34315 6 8C6 9.65685 7.34315 11 9 11V13C6.23858 13 4 15.2386 4 18V22H2V18C2 15.3075 3.52021 12.97 5.74913 11.7991C4.67847 10.882 4 9.52024 4 8C4 5.23858 6.23858 3 9 3H10V5H9ZM15 5C13.3431 5 12 6.34315 12 8C12 9.65685 13.3431 11 15 11C16.6569 11 18 9.65685 18 8C18 6.34315 16.6569 5 15 5ZM10 8C10 5.23858 12.2386 3 15 3C17.7614 3 20 5.23858 20 8C20 10.7614 17.7614 13 15 13C12.2386 13 10 10.7614 10 8ZM7 19C7 16.2386 9.23858 14 12 14H15V16H12C10.3431 16 9 17.3431 9 19V20H15V22H7V19ZM21 14V17H24V19H21V22H19V19H16V17H19V14H21Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
