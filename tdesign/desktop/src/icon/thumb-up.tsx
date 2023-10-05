import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-thumb-up')
export default class ThumbUp extends WeElement<IconProps> {
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
          d="M10.8786 1.38257L12.1576 1.59573C14.0863 1.91719 15.5 3.58595 15.5 5.54131V7.99992H20.8195C22.0554 7.99992 22.9955 9.10966 22.7923 10.3287L21.1257 20.3287C20.9649 21.2931 20.1306 21.9999 19.1529 21.9999H7V10.8021L10.8786 1.38257ZM12.1131 3.63742L9 11.1977V19.9999L19.1529 19.9999L20.8195 9.99992H13.5V5.54131C13.5 4.66252 12.9289 3.89951 12.1131 3.63742ZM4 9.99992V21.9999H2V9.99992H4Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
