import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-tree-round-dot-vertical')
export default class TreeRoundDotVertical extends WeElement<IconProps> {
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
          d="M15.126 4C15.5701 2.27477 17.1362 1 19 1C21.2091 1 23 2.79086 23 5C23 7.20914 21.2091 9 19 9C17.1362 9 15.5701 7.72523 15.126 6H14C13.4477 6 13 6.44772 13 7V17C13 17.5523 13.4477 18 14 18H15.126C15.5701 16.2748 17.1362 15 19 15C21.2091 15 23 16.7909 23 19C23 21.2091 21.2091 23 19 23C17.1362 23 15.5701 21.7252 15.126 20H14C12.3431 20 11 18.6569 11 17V13L8.87398 13C8.42994 14.7252 6.86384 16 5 16C2.79086 16 1 14.2091 1 12C1 9.79086 2.79086 8 5 8C6.86384 8 8.42994 9.27477 8.87398 11L11 11V7C11 5.34315 12.3431 4 14 4H15.126ZM19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3ZM5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10ZM19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
