import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-saturation')
export default class Saturation extends WeElement<IconProps> {
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
          d="M12 0.0690918L19.0677 7.07007C22.9774 10.9429 22.9774 17.2259 19.0677 21.0987C15.1632 24.9663 8.83675 24.9663 4.93229 21.0987C1.02257 17.2259 1.02257 10.9429 4.93229 7.07007L12 0.0690918ZM12 2.8842L6.33978 8.49098C3.22007 11.5812 3.22007 16.5876 6.33978 19.6778C9.46476 22.7733 14.5352 22.7733 17.6602 19.6778C20.7799 16.5876 20.7799 11.5812 17.6602 8.49098L12 2.8842ZM11 9.03493H12C15.0274 9.03493 17.4816 11.4891 17.4816 14.5165C17.4816 17.5439 15.0274 19.9981 12 19.9981H11L11 9.03493ZM13 11.1807L13 17.8524C14.4355 17.4227 15.4816 16.0918 15.4816 14.5165C15.4816 12.9413 14.4355 11.6104 13 11.1807Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
