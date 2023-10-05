import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-setting')
export default class Setting extends WeElement<IconProps> {
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
          d="M12.0001 0.845337L21.6604 6.42269V17.5774L12.0001 23.1547L2.33984 17.5774V6.42269L12.0001 0.845337ZM12.0001 3.15474L4.33984 7.57739V16.4227L12.0001 20.8453L19.6604 16.4227V7.57739L12.0001 3.15474ZM12.0001 9.00004C10.3432 9.00004 9.0001 10.3432 9.0001 12C9.0001 13.6569 10.3432 15 12.0001 15C13.657 15 15.0001 13.6569 15.0001 12C15.0001 10.3432 13.657 9.00004 12.0001 9.00004ZM7.0001 12C7.0001 9.23861 9.23867 7.00004 12.0001 7.00004C14.7615 7.00004 17.0001 9.23861 17.0001 12C17.0001 14.7615 14.7615 17 12.0001 17C9.23867 17 7.0001 14.7615 7.0001 12Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
