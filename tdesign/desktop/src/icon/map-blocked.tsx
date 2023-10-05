import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-blocked')
export default class MapBlocked extends WeElement<IconProps> {
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
          d="M9 1.84229L15.0744 5.38567L22 2.49999V10.5H20V5.49999L16 7.16666V10.5H14V7.07436L10 4.74103V16.9256L11.8677 18.0151L10.8599 19.7426L8.92563 18.6143L2 21.5V5.92562L9 1.84229ZM8 16.8333V4.74103L4 7.07436V18.5L8 16.8333ZM18 13.5C16.067 13.5 14.5 15.067 14.5 17C14.5 17.6031 14.652 18.17 14.9205 18.6652L19.6654 13.9206C19.1701 13.6521 18.6032 13.5 18 13.5ZM21.0795 15.3348L16.3346 20.0794C16.8299 20.3479 17.3968 20.5 18 20.5C19.933 20.5 21.5 18.933 21.5 17C21.5 16.3969 21.348 15.83 21.0795 15.3348ZM12.5 17C12.5 13.9624 14.9624 11.5 18 11.5C19.5186 11.5 20.895 12.1167 21.8892 13.111C22.8833 14.1052 23.5 15.4815 23.5 17C23.5 20.0376 21.0376 22.5 18 22.5C16.4814 22.5 15.105 21.8832 14.1108 20.889C13.1167 19.8948 12.5 18.5184 12.5 17Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
