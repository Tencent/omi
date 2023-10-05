import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-cooperate')
export default class Cooperate extends WeElement<IconProps> {
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
          d="M9.00015 1.58594L12.0002 4.58594L15.0002 1.58594L23.9144 10.5002L12.0002 22.4144L0.0859375 10.5002L9.00015 1.58594ZM10.5859 6.00015L9.00015 4.41436L2.91436 10.5002L12.0002 19.5859L12.9543 18.6318L10.5859 16.2634L12.0002 14.8492L14.3685 17.2176L15.3227 16.2634L12.9543 13.8951L14.3685 12.4808L16.7369 14.8492L18.0859 13.5002L15.0002 10.4144L12.0002 13.4144L7.58594 9.00015L10.5859 6.00015ZM19.5002 12.0859L21.0859 10.5002L15.0002 4.41436L10.4144 9.00015L12.0002 10.5859L15.0002 7.58594L19.5002 12.0859Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
