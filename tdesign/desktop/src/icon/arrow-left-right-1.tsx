import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-arrow-left-right-1')
export default class ArrowLeftRight1 extends WeElement<IconProps> {
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
          d="M3.58594 16.4999L8.50015 11.5857L9.91436 12.9999L7.41436 15.4999L19.5002 15.4999V17.4999L7.41436 17.4999L9.91436 19.9999L8.50015 21.4141L3.58594 16.4999ZM4.50015 6.49991L16.5859 6.49991L14.0859 3.99991L15.5002 2.58569L20.4144 7.49991L15.5002 12.4141L14.0859 10.9999L16.5859 8.49991L4.50015 8.49991L4.50015 6.49991Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
