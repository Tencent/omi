import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-navigation')
export default class MapNavigation extends WeElement<IconProps> {
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
          d="M8.00016 2V5L18.0002 5V2H20.0002V5H22.0002V7H20.0002V15H22.0002V17H20.0002V21H18.0002V17H16.0002V15H18.0002V7H8.00016V11H6.00016V7H2.00016V5H6.00016V2H8.00016ZM14.5809 10.4185L10.2053 23.5453L7.19709 17.8023L1.4541 14.7941L14.5809 10.4185ZM6.54771 15.2044L8.67875 16.3207L9.795 18.4517L11.4186 13.5808L6.54771 15.2044Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
