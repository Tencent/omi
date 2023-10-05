import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-bubble')
export default class MapBubble extends WeElement<IconProps> {
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
          d="M9 1.84229L15.0744 5.38567L22 2.49999V18.0744L15 22.1577L8.92563 18.6143L2 21.5V5.92562L9 1.84229ZM4 7.07436V18.5L9.07437 16.3857L15 19.8423L20 16.9256V5.49999L14.9256 7.61431L9 4.15769L4 7.07436ZM7.5 9.49999C7.63807 9.49999 7.75 9.38806 7.75 9.24999C7.75 9.11192 7.63807 8.99999 7.5 8.99999C7.36193 8.99999 7.25 9.11192 7.25 9.24999C7.25 9.38806 7.36193 9.49999 7.5 9.49999ZM5.75 9.24999C5.75 8.28349 6.5335 7.49999 7.5 7.49999C8.4665 7.49999 9.25 8.28349 9.25 9.24999C9.25 10.2165 8.4665 11 7.5 11C6.5335 11 5.75 10.2165 5.75 9.24999ZM14 10.5C14.1381 10.5 14.25 10.3881 14.25 10.25C14.25 10.1119 14.1381 9.99999 14 9.99999C13.8619 9.99999 13.75 10.1119 13.75 10.25C13.75 10.3881 13.8619 10.5 14 10.5ZM12.25 10.25C12.25 9.28349 13.0335 8.49999 14 8.49999C14.9665 8.49999 15.75 9.28349 15.75 10.25C15.75 11.2165 14.9665 12 14 12C13.0335 12 12.25 11.2165 12.25 10.25ZM10 14C10.1381 14 10.25 13.8881 10.25 13.75C10.25 13.6119 10.1381 13.5 10 13.5C9.86193 13.5 9.75 13.6119 9.75 13.75C9.75 13.8881 9.86193 14 10 14ZM8.25 13.75C8.25 12.7835 9.0335 12 10 12C10.9665 12 11.75 12.7835 11.75 13.75C11.75 14.7165 10.9665 15.5 10 15.5C9.0335 15.5 8.25 14.7165 8.25 13.75ZM16.5 15C16.6381 15 16.75 14.8881 16.75 14.75C16.75 14.6119 16.6381 14.5 16.5 14.5C16.3619 14.5 16.25 14.6119 16.25 14.75C16.25 14.8881 16.3619 15 16.5 15ZM14.75 14.75C14.75 13.7835 15.5335 13 16.5 13C17.4665 13 18.25 13.7835 18.25 14.75C18.25 15.7165 17.4665 16.5 16.5 16.5C15.5335 16.5 14.75 15.7165 14.75 14.75Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
