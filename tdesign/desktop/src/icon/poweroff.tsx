import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-poweroff')
export default class Poweroff extends WeElement<IconProps> {
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
          d="M13 2V12H11V2H13ZM16.7806 3.72791L17.5889 4.31676C19.9574 6.04242 21.5 8.84092 21.5 11.9996C21.5 17.2463 17.2467 21.4996 12 21.4996C6.75329 21.4996 2.5 17.2463 2.5 11.9996C2.5 8.84092 4.04258 6.04242 6.41114 4.31676L7.21938 3.72791L8.39709 5.34438L7.58886 5.93324C5.71475 7.29865 4.5 9.50721 4.5 11.9996C4.5 16.1417 7.85786 19.4996 12 19.4996C16.1421 19.4996 19.5 16.1417 19.5 11.9996C19.5 9.50721 18.2853 7.29865 16.4111 5.93324L15.6029 5.34438L16.7806 3.72791Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
