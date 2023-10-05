import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-fork')
export default class Fork extends WeElement<IconProps> {
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
          d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21ZM13 15.126C14.7252 15.5701 16 17.1362 16 19C16 21.2091 14.2091 23 12 23C9.79086 23 8 21.2091 8 19C8 17.1362 9.27477 15.5701 11 15.126L11 13L7 13C5.34314 13 4 11.6569 4 10L4 8.87398C2.27477 8.42994 0.999997 6.86384 0.999997 5C0.999996 2.79086 2.79086 1 5 0.999999C7.20914 0.999999 9 2.79086 9 5C9 6.86384 7.72522 8.42994 6 8.87398L6 10C6 10.5523 6.44771 11 7 11L17 11C17.5523 11 18 10.5523 18 10L18 8.87398C16.2748 8.42994 15 6.86384 15 5C15 2.79086 16.7909 0.999997 19 0.999997C21.2091 0.999996 23 2.79086 23 5C23 6.86384 21.7252 8.42994 20 8.87398L20 10C20 11.6569 18.6569 13 17 13L13 13L13 15.126ZM4.99721 7L5.00279 7C6.10608 6.99849 7 6.10364 7 5C7 3.89543 6.10457 3 5 3C3.89543 3 3 3.89543 3 5C3 6.10364 3.89392 6.99849 4.99721 7ZM19 7C20.1046 7 21 6.10456 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
