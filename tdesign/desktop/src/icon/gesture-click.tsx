import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-click')
export default class GestureClick extends WeElement<IconProps> {
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
          d="M11.9999 0.5V3.91421H9.99986V0.5H11.9999ZM4.99986 3.08481L7.41407 5.49902L5.99986 6.91324L3.58564 4.49902L4.99986 3.08481ZM18.4141 4.49902L15.9999 6.91324L14.5856 5.49902L16.9999 3.08481L18.4141 4.49902ZM10.9997 6.81C10.5823 6.81 10.244 7.14833 10.244 7.56568V17.5973L5.74583 16.5971L5.64522 16.7481L9.07046 21.2037C9.2137 21.39 9.43539 21.4992 9.67042 21.4992H16.7559C17.0817 21.4992 17.3709 21.2907 17.4739 20.9816L19.2563 15.6311C19.3695 15.2914 19.229 14.9188 18.9198 14.7383L15.2951 12.6226C15.1794 12.5551 15.0477 12.5195 14.9137 12.5195H11.7553V7.56568C11.7553 7.14833 11.417 6.81 10.9997 6.81ZM8.24398 7.56568C8.24398 6.04376 9.47774 4.81 10.9997 4.81C12.5216 4.81 13.7553 6.04376 13.7553 7.56568V10.5195H14.9137C15.402 10.5195 15.8816 10.6492 16.3033 10.8954L19.928 13.0111C21.0545 13.6686 21.566 15.0257 21.1538 16.2632L19.3714 21.6137C18.9963 22.7397 17.9427 23.4992 16.7559 23.4992H9.67042C8.81424 23.4992 8.00666 23.1014 7.48485 22.4226L3.18652 16.8313L4.12764 15.4188C4.55791 14.773 5.34103 14.4583 6.09855 14.6267L8.24398 15.1038V7.56568Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
