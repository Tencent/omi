import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-translate')
export default class Translate extends WeElement<IconProps> {
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
          d="M2 5C2 3.34315 3.34315 2 5 2H7C8.65685 2 10 3.34315 10 5V11H8V8.5H4V11H2V5ZM4 6.5H8V5C8 4.44772 7.55228 4 7 4H5C4.44772 4 4 4.44772 4 5V6.5ZM12 3.5H18C19.6569 3.5 21 4.84315 21 6.5V9H19V6.5C19 5.94772 18.5523 5.5 18 5.5H12V3.5ZM18 11.5V13H22V15H20.9381C20.7182 16.7638 19.9241 18.3492 18.7488 19.5634C19.4441 19.845 20.2041 20 21 20H22V22H21C19.5425 22 18.1765 21.6102 17.0001 20.9297C15.8234 21.6104 14.4572 22 13 22H12V20H13C13.7962 20 14.5562 19.8449 15.2514 19.5633C14.6487 18.9407 14.1463 18.2205 13.7704 17.4291L13.3413 16.5258L15.1478 15.6676L15.5769 16.5709C15.9219 17.2971 16.4081 17.9427 16.9999 18.4723C17.9921 17.5843 18.687 16.371 18.917 15H12V13H16V11.5H18ZM6 13V19C6 19.5523 6.44772 20 7 20H9.5V22H7C5.34315 22 4 20.6569 4 19V13H6Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
