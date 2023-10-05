import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-cut')
export default class Cut extends WeElement<IconProps> {
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
          d="M7.41421 4.58579C6.63317 3.80474 5.36684 3.80474 4.58579 4.58579C3.80474 5.36684 3.80474 6.63316 4.58579 7.41421C5.36684 8.19526 6.63317 8.19526 7.41421 7.41421C8.19526 6.63316 8.19526 5.36684 7.41421 4.58579ZM3.17157 3.17157C4.73367 1.60948 7.26633 1.60948 8.82843 3.17157C10.1464 4.48951 10.3524 6.49831 9.44643 8.03221L12 10.5858L20 2.58579L21.4142 4L9.44643 15.9678C10.3524 17.5017 10.1464 19.5105 8.82843 20.8284C7.26633 22.3905 4.73367 22.3905 3.17157 20.8284C1.60948 19.2663 1.60948 16.7337 3.17157 15.1716C4.48951 13.8536 6.49831 13.6476 8.03221 14.5536L10.5858 12L8.03221 9.44643C6.49831 10.3524 4.48951 10.1464 3.17157 8.82843C1.60948 7.26633 1.60948 4.73367 3.17157 3.17157ZM15 13.5858L21.4142 20L20 21.4142L13.5858 15L15 13.5858ZM7.41421 16.5858C6.63316 15.8047 5.36684 15.8047 4.58579 16.5858C3.80474 17.3668 3.80474 18.6332 4.58579 19.4142C5.36684 20.1953 6.63316 20.1953 7.41421 19.4142C8.19526 18.6332 8.19526 17.3668 7.41421 16.5858Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
