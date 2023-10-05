import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-alarm')
export default class Alarm extends WeElement<IconProps> {
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
          d="M6.91436 2.50003L1.50015 7.91424L0.0859375 6.50003L5.50015 1.08582L6.91436 2.50003ZM18.5002 1.08582L23.9144 6.50003L22.5002 7.91424L17.0859 2.50003L18.5002 1.08582ZM12.0002 5.00003C7.58187 5.00003 4.00015 8.58175 4.00015 13C4.00015 17.4183 7.58187 21 12.0002 21C16.4184 21 20.0002 17.4183 20.0002 13C20.0002 8.58175 16.4184 5.00003 12.0002 5.00003ZM2.00015 13C2.00015 7.47718 6.4773 3.00003 12.0002 3.00003C17.523 3.00003 22.0002 7.47718 22.0002 13C22.0002 18.5229 17.523 23 12.0002 23C6.4773 23 2.00015 18.5229 2.00015 13ZM13.0002 7.50003V12.5858L16.4144 16L15.0002 17.4142L11.0002 13.4142V7.50003H13.0002Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
