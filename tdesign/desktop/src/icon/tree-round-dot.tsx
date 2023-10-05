import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-tree-round-dot')
export default class TreeRoundDot extends WeElement<IconProps> {
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
          d="M12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3ZM11 8.87398C9.27477 8.42994 8 6.86384 8 5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5C16 6.86384 14.7252 8.42994 13 8.87398V11H17C18.6569 11 20 12.3431 20 14V15.126C21.7252 15.5701 23 17.1362 23 19C23 21.2091 21.2091 23 19 23C16.7909 23 15 21.2091 15 19C15 17.1362 16.2748 15.5701 18 15.126V14C18 13.4477 17.5523 13 17 13H7C6.44772 13 6 13.4477 6 14V15.126C7.72523 15.5701 9 17.1362 9 19C9 21.2091 7.20914 23 5 23C2.79086 23 1 21.2091 1 19C1 17.1362 2.27477 15.5701 4 15.126L4 14C4 12.3431 5.34315 11 7 11H11V8.87398ZM19.0028 17H18.9972C17.8939 17.0015 17 17.8964 17 19C17 20.1046 17.8954 21 19 21C20.1046 21 21 20.1046 21 19C21 17.8964 20.1061 17.0015 19.0028 17ZM5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
