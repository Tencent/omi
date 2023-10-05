import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-tower-clock')
export default class TowerClock extends WeElement<IconProps> {
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
          d="M12 0.932129L17.2875 2.91492L16.5852 4.78758L16 4.56813V5.00013H19V17.0001H17V23.0001H7V17.0001H5V5.00013H8V4.56813L7.41479 4.78758L6.71255 2.91492L12 0.932129ZM10 3.81813V5.00013H14V3.81813L12 3.06813L10 3.81813ZM9 17.0001V21.0001H15V17.0001H13V20.0001H11V17.0001H9ZM17 15.0001V7.00013H7V15.0001H17ZM12 10.0001C11.4477 10.0001 11 10.4478 11 11.0001C11 11.5524 11.4477 12.0001 12 12.0001C12.5523 12.0001 13 11.5524 13 11.0001C13 10.4478 12.5523 10.0001 12 10.0001ZM9 11.0001C9 9.34328 10.3431 8.00013 12 8.00013C13.6569 8.00013 15 9.34328 15 11.0001C15 12.657 13.6569 14.0001 12 14.0001C10.3431 14.0001 9 12.657 9 11.0001Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
