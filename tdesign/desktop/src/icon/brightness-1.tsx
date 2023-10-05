import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-brightness-1')
export default class Brightness1 extends WeElement<IconProps> {
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
          d="M12.0002 0.0856934L15.4897 3.57529H20.4248V8.51031L23.9144 11.9999L20.4248 15.4895V20.4245H15.4897L12.0002 23.9141L8.51056 20.4245H3.57553V15.4895L0.0859375 11.9999L3.57553 8.51032V3.57529H8.51056L12.0002 0.0856934ZM12.0002 2.91412L9.33899 5.57529H5.57553V9.33875L2.91436 11.9999L5.57553 14.6611V18.4245H9.33899L12.0002 21.0857L14.6613 18.4245H18.4248V14.6611L21.0859 11.9999L18.4248 9.33874V5.57529H14.6613L12.0002 2.91412ZM12.0649 8.00042C12.6637 9.20566 13.0005 10.5642 13.0005 11.9999C13.0005 13.4356 12.6637 14.7942 12.0649 15.9994C14.2444 15.965 16.0005 14.1875 16.0005 11.9999C16.0005 9.8123 14.2444 8.03485 12.0649 8.00042ZM10.1253 6.29902C10.7166 6.10465 11.3473 5.99991 12.0005 5.99991C15.3142 5.99991 18.0005 8.6862 18.0005 11.9999C18.0005 15.3136 15.3142 17.9999 12.0005 17.9999C11.3473 17.9999 10.7166 17.8952 10.1253 17.7008L8.81117 17.2687L9.63353 16.1563C10.4928 14.994 11.0005 13.5577 11.0005 11.9999C11.0005 10.4421 10.4928 9.00578 9.63353 7.84347L8.81117 6.73107L10.1253 6.29902Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
