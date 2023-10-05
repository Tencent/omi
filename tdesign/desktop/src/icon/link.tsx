import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-link')
export default class Link extends WeElement<IconProps> {
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
          d="M13.2925 3.95949C15.1558 2.09618 18.1768 2.09619 20.0401 3.95949C21.9034 5.8228 21.9034 8.84381 20.0401 10.7071L17.0094 13.7379L15.5952 12.3236L18.6259 9.29291C19.7082 8.21065 19.7082 6.45596 18.6259 5.37371C17.5436 4.29145 15.789 4.29145 14.7067 5.3737L11.676 8.40444L10.2617 6.99023L13.2925 3.95949ZM15.4125 9.99989L9.99826 15.4142L8.58405 14L13.9983 8.58568L15.4125 9.99989ZM8.40395 11.6764L5.37322 14.7072C4.29096 15.7894 4.29096 17.5441 5.37322 18.6264C6.45547 19.7086 8.21016 19.7086 9.29242 18.6264L12.3232 15.5956L13.7374 17.0099L10.7066 20.0406C8.84333 21.9039 5.82231 21.9039 3.959 20.0406C2.0957 18.1773 2.0957 15.1563 3.959 13.293L6.98974 10.2622L8.40395 11.6764Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
