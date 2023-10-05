import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-bluetooth')
export default class Bluetooth extends WeElement<IconProps> {
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
          d="M11.0002 0.254639L18.4526 6.96181L13.4144 12L18.4526 17.0382L11.0002 23.7454V14.4142L7.00015 18.4142L5.58594 17L10.5859 12L5.58594 7L7.00015 5.58579L11.0002 9.58579V0.254639ZM13.0002 14.4142V19.2546L15.5477 16.9618L13.0002 14.4142ZM13.0002 9.58579L15.5477 7.0382L13.0002 4.74536V9.58579Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
