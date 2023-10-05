import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-screenshot')
export default class Screenshot extends WeElement<IconProps> {
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
          d="M2 2L22 2L22 16H20L20 4L4 4L4 16H2L2 2ZM5.40267 9H8.22548L12 12.797L15.7745 9L18.5973 9L13.4107 14.2161L16.0985 16.92C16.5771 16.6523 17.1291 16.5 17.7143 16.5C19.514 16.5 21 17.9403 21 19.75C21 21.5597 19.514 23 17.7143 23C15.9145 23 14.4286 21.5597 14.4286 19.75C14.4286 19.26 14.5375 18.7971 14.7321 18.3825L12 15.6348L9.26788 18.3825C9.46249 18.7971 9.57143 19.26 9.57143 19.75C9.57143 21.5597 8.08546 23 6.28572 23C4.48597 23 3 21.5597 3 19.75C3 17.9403 4.48597 16.5 6.28571 16.5C6.87091 16.5 7.42293 16.6523 7.90149 16.92L10.5893 14.2161L5.40267 9ZM17.7143 18.5C16.9893 18.5 16.4286 19.0744 16.4286 19.75C16.4286 20.4256 16.9893 21 17.7143 21C18.4393 21 19 20.4256 19 19.75C19 19.0744 18.4393 18.5 17.7143 18.5ZM6.28571 18.5C5.56073 18.5 5 19.0744 5 19.75C5 20.4256 5.56073 21 6.28572 21C7.0107 21 7.57143 20.4256 7.57143 19.75C7.57143 19.0744 7.0107 18.5 6.28571 18.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
