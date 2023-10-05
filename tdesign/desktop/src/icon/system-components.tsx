import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-system-components')
export default class SystemComponents extends WeElement<IconProps> {
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
          d="M12 4C11.3367 4 10.7778 4.5479 10.7778 5.25C10.7778 5.9521 11.3367 6.5 12 6.5C12.6633 6.5 13.2222 5.9521 13.2222 5.25C13.2222 4.5479 12.6633 4 12 4ZM8.77778 5.25C8.77778 3.46682 10.2087 2 12 2C13.7913 2 15.2222 3.46682 15.2222 5.25C15.2222 6.68503 14.2955 7.91518 13 8.34082V9.17624L16.849 11.4262V15.8832L17.6671 16.2941C18.2308 15.8002 18.9674 15.5 19.7778 15.5C21.569 15.5 23 16.9668 23 18.75C23 20.5332 21.569 22 19.7778 22C17.9865 22 16.5556 20.5332 16.5556 18.75C16.5556 18.4978 16.5842 18.2518 16.6384 18.0155L15.8852 17.6372L12 19.9083L8.11518 17.6374L7.36176 18.0163C7.41588 18.2524 7.44444 18.4981 7.44444 18.75C7.44444 20.5332 6.01348 22 4.22222 22C2.43096 22 1 20.5332 1 18.75C1 16.9668 2.43096 15.5 4.22222 15.5C5.03293 15.5 5.76983 15.8005 6.33367 16.2947L7.151 15.8836V11.4262L11 9.17624V8.34082C9.70453 7.91518 8.77778 6.68503 8.77778 5.25ZM12 10.9083L9.151 12.5738V15.9262L12 17.5917L14.849 15.9262V12.5738L12 10.9083ZM5.22459 18.0341C5.00163 17.7089 4.63184 17.5 4.22222 17.5C3.55888 17.5 3 18.0479 3 18.75C3 19.4521 3.55888 20 4.22222 20C4.88556 20 5.44444 19.4521 5.44444 18.75C5.44444 18.6035 5.42013 18.4638 5.37562 18.3343L5.22459 18.0341ZM18.6235 18.337C18.5795 18.4657 18.5556 18.6045 18.5556 18.75C18.5556 19.4521 19.1144 20 19.7778 20C20.4411 20 21 19.4521 21 18.75C21 18.0479 20.4411 17.5 19.7778 17.5C19.3686 17.5 18.9992 17.7085 18.7761 18.033L18.6235 18.337Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
