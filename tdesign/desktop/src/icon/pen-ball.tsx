import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-pen-ball')
export default class PenBall extends WeElement<IconProps> {
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
          d="M17.1548 1.37402L22.6264 6.84564L21.2122 8.25985L15.7406 2.78824L17.1548 1.37402ZM14.3529 4.20673L19.794 9.64787L7.39722 22.001L2 22.001L2.00001 16.6038L14.3529 4.20673ZM14.3554 7.03769L4 17.4301L4 20.001L6.57086 20.001L16.9631 9.64537L14.3554 7.03769ZM22.2078 12.8662L15.9642 19.1098L14.55 17.6956L20.7936 11.452L22.2078 12.8662Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
