import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-arrow-left-right-3')
export default class ArrowLeftRight3 extends WeElement<IconProps> {
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
          d="M20.9144 7.50014L15.5002 12.9144L14.0859 11.5002L17.0859 8.50015L8.50015 8.50014L8.50015 6.50014L17.0859 6.50014L14.0859 3.50015L15.5002 2.08594L20.9144 7.50014ZM15.5002 17.5001L6.91436 17.5001L9.91437 20.5002L8.50015 21.9144L3.08594 16.5001L8.50015 11.0859L9.91437 12.5002L6.91437 15.5001L15.5002 15.5001L15.5002 17.5001Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
