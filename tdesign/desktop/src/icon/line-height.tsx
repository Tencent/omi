import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-line-height')
export default class LineHeight extends WeElement<IconProps> {
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
          d="M5.70718 3.29304L5.00008 2.58594L4.29297 3.29304L2.00008 5.58594L1.29297 6.29305L2.70718 7.70726L3.41429 7.00015L4.00008 6.41436V8.49991V11.9999V15.4999V17.5854L3.41429 16.9997L2.70718 16.2926L1.29297 17.7068L2.00008 18.4139L4.29297 20.7068L5.00008 21.4139L5.70718 20.7068L8.00008 18.4139L8.70718 17.7068L7.29297 16.2926L6.58586 16.9997L6.00008 17.5854V15.4999V11.9999V8.49991V6.41436L6.58586 7.00015L7.29297 7.70726L8.70718 6.29304L8.00008 5.58594L5.70718 3.29304ZM13.0001 3.99991H12.0001V5.99991H13.0001H21.0001H22.0001V3.99991H21.0001H13.0001ZM11.0001 10.9999H10.0001V12.9999H11.0001H21.0001H22.0001V10.9999H21.0001H11.0001ZM12.0001 17.9999H13.0001H21.0001H22.0001V19.9999H21.0001H13.0001H12.0001V17.9999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
