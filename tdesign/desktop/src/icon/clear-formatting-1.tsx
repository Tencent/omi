import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-clear-formatting-1')
export default class ClearFormatting1 extends WeElement<IconProps> {
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
          d="M14.0305 1.88867L23.6874 11.5455L15.3423 19.8906L15.0729 20.1619H19.9993V22.1619L6.74742 22.1619L3.08075 18.4953C1.51865 16.9332 1.51866 14.4005 3.08075 12.8384L14.0305 1.88867ZM14.3521 18.0523L20.8589 11.5455L14.0305 4.7171L7.20207 11.5455L14.0301 18.3736L14.3506 18.0508L14.3521 18.0523ZM5.78786 12.9597L4.49497 14.2526C3.71392 15.0337 3.71392 16.3 4.49497 17.0811L7.57585 20.1619H12.2545L12.6209 19.7928L5.78786 12.9597Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
