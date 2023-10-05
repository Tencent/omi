import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-clear-formatting')
export default class ClearFormatting extends WeElement<IconProps> {
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
          d="M14.0311 1.88843L23.688 11.5453L15.3429 19.8904L15.0735 20.1617H19.9999V22.1617L6.74802 22.1617L0.25293 15.6666L14.0311 1.88843ZM14.3527 18.0521L20.8595 11.5453L14.0311 4.71685L7.20268 11.5453L14.0307 18.3733L14.3512 18.0505L14.3527 18.0521ZM5.78846 12.9595L3.08136 15.6666L7.57645 20.1617H12.2551L12.6215 19.7925L5.78846 12.9595Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
