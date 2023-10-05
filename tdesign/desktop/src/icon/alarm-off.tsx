import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-alarm-off')
export default class AlarmOff extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_7187)">
          <path
            d="M0.0859375 6.50003L2.58607 3.9999L0.586204 2.00003L2.00042 0.585815L4.00028 2.58568L5.50015 1.08582L6.91436 2.50003L5.4145 3.9999L23.4146 22L22.0004 23.4142L18.8612 20.275C17.0714 21.9634 14.6564 23 12.0002 23C6.4773 23 2.00015 18.5229 2.00015 13C2.00015 10.3438 3.03675 7.92881 4.72515 6.13897L4.00028 5.41411L1.50015 7.91424L0.0859375 6.50003ZM6.14006 7.55388C4.81125 8.9828 4.00015 10.8963 4.00015 13C4.00015 17.4183 7.58187 21 12.0002 21C14.1039 21 16.0174 20.1889 17.4463 18.8601L6.14006 7.55388ZM8.56105 3.55381L9.53025 3.30754C10.3212 3.10657 11.1488 3.00003 11.9998 3.00003C17.5227 3.00003 21.9998 7.47718 21.9998 13C21.9998 13.8511 21.8933 14.6787 21.6923 15.4696L21.446 16.4388L19.5076 15.9463L19.7539 14.9771C19.9143 14.3458 19.9998 13.6836 19.9998 13C19.9998 8.58175 16.4181 5.00003 11.9998 5.00003C11.3162 5.00003 10.6541 5.08554 10.0228 5.24594L9.05359 5.49221L8.56105 3.55381ZM18.5002 1.08582L23.9144 6.50003L22.5002 7.91424L17.0859 2.50003L18.5002 1.08582Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
