import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-city-ancient-2')
export default class CityAncient2 extends WeElement<IconProps> {
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
          d="M11.9985 0.801758L18.0517 4.79461L16.9997 6.38954V9.4997L20.3342 11.9998H22.001V13.9998H21.001V21.9998H3.00098V13.9998H2.00098V11.9998H3.66756L6.99967 9.4999V6.38918L5.94757 4.79491L11.9985 0.801758ZM8.99967 5.17699V8.9998H14.9997V5.17733L11.9987 3.19784L8.99967 5.17699ZM15.6664 10.9998H8.33309L7.00019 11.9998H17.0002L15.6664 10.9998ZM19.001 13.9998H5.00098V19.9998H10.9986V16.9998H12.9986V19.9998H19.001V13.9998ZM11.001 4.99785H13.0049V7.00175H11.001V4.99785Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
