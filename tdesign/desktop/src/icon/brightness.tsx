import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-brightness')
export default class Brightness extends WeElement<IconProps> {
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
          d="M12.0002 0.0856934L15.4897 3.57529H20.4248V8.51031L23.9144 11.9999L20.4248 15.4895V20.4245H15.4897L12.0002 23.9141L8.51056 20.4245H3.57553V15.4895L0.0859375 11.9999L3.57553 8.51032V3.57529H8.51056L12.0002 0.0856934ZM12.0002 2.91412L9.33899 5.57529H5.57553V9.33875L2.91436 11.9999L5.57553 14.6611V18.4245H9.33899L12.0002 21.0857L14.6613 18.4245H18.4248V14.6611L21.0859 11.9999L18.4248 9.33874V5.57529H14.6613L12.0002 2.91412ZM12.0002 7.99991C9.79101 7.99991 8.00015 9.79077 8.00015 11.9999C8.00015 14.209 9.79101 15.9999 12.0002 15.9999C14.2093 15.9999 16.0002 14.209 16.0002 11.9999C16.0002 9.79077 14.2093 7.99991 12.0002 7.99991ZM6.00015 11.9999C6.00015 8.6862 8.68644 5.99991 12.0002 5.99991C15.3139 5.99991 18.0002 8.6862 18.0002 11.9999C18.0002 15.3136 15.3139 17.9999 12.0002 17.9999C8.68644 17.9999 6.00015 15.3136 6.00015 11.9999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
