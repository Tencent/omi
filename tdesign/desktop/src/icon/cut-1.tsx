import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-cut-1')
export default class Cut1 extends WeElement<IconProps> {
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
          d="M13 1V3.5H11V1H13ZM21.4142 3.5L15 9.91421L13.5858 8.5L20 2.08579L21.4142 3.5ZM4 2.08579L15.9678 14.0536C17.5017 13.1476 19.5105 13.3536 20.8284 14.6716C22.3905 16.2337 22.3905 18.7663 20.8284 20.3284C19.2663 21.8905 16.7337 21.8905 15.1716 20.3284C13.8536 19.0105 13.6476 17.0017 14.5536 15.4678L12 12.9142L9.44643 15.4678C10.3524 17.0017 10.1464 19.0105 8.82843 20.3284C7.26633 21.8905 4.73367 21.8905 3.17157 20.3284C1.60948 18.7663 1.60948 16.2337 3.17157 14.6716C4.48951 13.3536 6.49831 13.1476 8.03221 14.0536L10.5858 11.5L2.58579 3.5L4 2.08579ZM13 5V7.5H11V5H13ZM7.41421 16.0858C6.63316 15.3047 5.36683 15.3047 4.58579 16.0858C3.80474 16.8668 3.80474 18.1332 4.58579 18.9142C5.36684 19.6953 6.63316 19.6953 7.41421 18.9142C8.19526 18.1332 8.19526 16.8668 7.41421 16.0858ZM19.4142 16.0858C18.6332 15.3047 17.3668 15.3047 16.5858 16.0858C15.8047 16.8668 15.8047 18.1332 16.5858 18.9142C17.3668 19.6953 18.6332 19.6953 19.4142 18.9142C20.1953 18.1332 20.1953 16.8668 19.4142 16.0858Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
