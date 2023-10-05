import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-city-ancient-1')
export default class CityAncient1 extends WeElement<IconProps> {
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
          d="M9.51937 4.91466C10.442 3.97928 11.0016 2.9551 11.0016 2L13.0016 2C13.0016 2.95572 13.5614 3.98036 14.4838 4.91586C15.3941 5.83906 16.5215 6.53315 17.3483 6.84034C17.6848 6.96537 17.9022 7 18 7L19 7L19 9L18 9C18 9 18 9 18 9L18 11.0001L22 11.0001L22 13.0001L21 13.0001L21 20.0001L22 20.0001L22 22.0001L2 22.0001L2 20.0001L3 20.0001L3 13.0001L2 13.0001L2 11.0001L6.00235 11.0001L6.00235 9C6.00158 9 6.0008 9 6.00002 9L5.00002 9L5.00002 7L6.00002 7C6.09814 7 6.3162 6.9652 6.65383 6.83965C7.48135 6.53194 8.60897 5.83767 9.51937 4.91466ZM8.00235 9.00007L8.00235 11.0001L16 11.0001L16 9.00007L8.00235 9.00007ZM13.7985 7.00007C13.5433 6.78639 13.2954 6.55912 13.0597 6.32012C12.6801 5.93515 12.3155 5.5021 12.0013 5.02895C11.6872 5.50172 11.3227 5.93442 10.9433 6.31911C10.7072 6.55849 10.4587 6.78609 10.2031 7.00007L13.7985 7.00007ZM5 13.0001L5.00001 20.0001L11.0016 20.0001L11.0016 16.0001L13.0016 16.0001L13.0016 20.0001L19 20.0001L19 13.0001L5 13.0001Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
