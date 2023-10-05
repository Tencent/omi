import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-sip')
export default class Sip extends WeElement<IconProps> {
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
          d="M20.7814 8.13243C22.1186 6.79523 22.1186 4.62721 20.7814 3.29001C19.4442 1.9528 17.2762 1.95281 15.939 3.29002L14.1907 5.03826L12.9051 3.75266L11.4909 5.16687L12.7765 6.45248L2.07227 17.1569L2.07227 21.9993H6.9147L17.619 11.2949L18.9045 12.5805L20.3187 11.1663L19.0332 9.88069L20.7814 8.13243ZM16.2048 9.88069L6.08627 19.9993H4.07226L4.07227 17.9853L14.1908 7.86669L16.2048 9.88069ZM15.605 6.45247L17.3532 4.70423C17.9093 4.14807 18.811 4.14807 19.3672 4.70422C19.9233 5.26037 19.9233 6.16207 19.3672 6.71822L17.619 8.46647L15.605 6.45247Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
