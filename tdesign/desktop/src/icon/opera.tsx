import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-opera')
export default class Opera extends WeElement<IconProps> {
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
          d="M6.49767 5H7.99767C11.6589 5 14.0635 6.46441 15.5764 8.50988C16.5857 9.87454 17.1693 11.4572 17.5094 12.9403C18.24 12.3858 19.0136 11.9854 19.6776 11.7022C20.2608 11.4535 20.7845 11.2848 21.1642 11.1777C21.3546 11.124 21.5103 11.0854 21.621 11.0597C22.1494 10.937 22.6875 10.8506 23.2202 10.7485L21.8448 19.0013L2.21692 18.9996L0.716797 13.001H1.99767C3.01907 13.001 3.89574 13.1059 4.59348 13.2373L3.67198 10.0117H4.99767C6.29398 10.0117 7.55194 10.2432 8.50131 10.4787C8.12172 9.16244 7.65244 7.77145 7.07459 6.38462L6.49767 5ZM9.08545 12.7231C8.8451 12.6455 8.5265 12.5495 8.15271 12.4535C7.6275 12.3185 7.00665 12.1867 6.34937 12.1028L7.75131 17.0006L9.87566 17.0013C9.85249 16.8283 9.8256 16.6367 9.79459 16.4282C9.65437 15.4857 9.43031 14.201 9.08545 12.7231ZM11.8926 17.0014L15.9791 17.0001C15.9606 16.4209 15.9242 15.7096 15.8547 15.1175C15.6446 13.3269 15.1372 11.2795 13.9684 9.69917C13.0412 8.44553 11.6576 7.42832 9.50393 7.10655C10.0958 8.72036 10.5519 10.2958 10.9017 11.7196C11.3366 13.4903 11.6089 15.0324 11.7728 16.1339C11.822 16.4643 11.8614 16.7553 11.8926 17.0014ZM17.9801 17.0001L20.1506 17.0008L20.7464 13.4257C20.6539 13.4619 20.559 13.5006 20.4621 13.5419C19.568 13.9232 18.5897 14.4945 17.8845 15.3054C17.9357 15.8726 17.9633 16.4686 17.9784 16.9472C17.979 16.965 17.9796 16.9826 17.9801 17.0001ZM5.6706 17.0002L5.22497 15.446C5.08862 15.4043 4.92098 15.3573 4.72422 15.3099C4.3482 15.2194 3.86692 15.1275 3.29524 15.0678L3.77842 16.9999L5.6706 17.0002Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
