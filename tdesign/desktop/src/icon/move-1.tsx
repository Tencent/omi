import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-move-1')
export default class Move1 extends WeElement<IconProps> {
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
          d="M1.08594 11.9999L5.50015 7.58568L6.91437 8.99989L4.91436 10.9999L11.0002 10.9999L11.0002 4.91412L9.00015 6.91412L7.58594 5.49991L12.0002 1.08569L16.4144 5.49991L15.0002 6.91412L13.0002 4.91412L13.0002 10.9999L19.0859 10.9999L17.0859 8.99991L18.5002 7.58569L22.9144 11.9999L18.5002 16.4141L17.0859 14.9999L19.0859 12.9999L13.0002 12.9999L13.0002 19.0857L15.0002 17.0857L16.4144 18.4999L12.0001 22.9141L7.58593 18.4999L9.00015 17.0857L11.0002 19.0857L11.0002 12.9999L4.91436 12.9999L6.91437 14.9999L5.50015 16.4141L1.08594 11.9999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
