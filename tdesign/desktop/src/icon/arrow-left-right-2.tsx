import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-arrow-left-right-2')
export default class ArrowLeftRight2 extends WeElement<IconProps> {
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
          d="M21.5 17.5001L12.9142 17.5001L15.9142 20.5002L14.5 21.9144L9.08578 16.5001L14.5 11.0859L15.9142 12.5001L12.9142 15.5001L21.5 15.5001L21.5 17.5001ZM14.9142 7.50014L9.5 12.9144L8.08579 11.5002L11.0858 8.50014L2.5 8.50014L2.5 6.50014L11.0858 6.50014L8.08579 3.50015L9.5 2.08594L14.9142 7.50014Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
