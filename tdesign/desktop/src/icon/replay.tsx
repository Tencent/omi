import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-replay')
export default class Replay extends WeElement<IconProps> {
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
          d="M23 14L18.6 10.7L19.8 9.1L20.7282 9.79616C19.7453 5.891 16.2102 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.689 21 18.8618 18.7803 20.2516 15.5996L20.6519 14.6833L22.4846 15.484L22.0843 16.4004C20.3878 20.2833 16.5123 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12V14ZM16.8028 12L9.5 16.8685V7.13148L16.8028 12ZM11.5 10.8685V13.1315L13.1972 12L11.5 10.8685Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
