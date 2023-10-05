import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-image')
export default class Image extends WeElement<IconProps> {
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
          d="M2 2H22V22H2V2ZM4 20H17.5858L9 11.4142L4 16.4142V20ZM20 19.5858V4H4V13.5858L9 8.58579L20 19.5858ZM15.5469 7C14.9946 7 14.5469 7.44772 14.5469 8C14.5469 8.55228 14.9946 9 15.5469 9C16.0992 9 16.5469 8.55228 16.5469 8C16.5469 7.44772 16.0992 7 15.5469 7ZM12.5469 8C12.5469 6.34315 13.89 5 15.5469 5C17.2037 5 18.5469 6.34315 18.5469 8C18.5469 9.65685 17.2037 11 15.5469 11C13.89 11 12.5469 9.65685 12.5469 8Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
