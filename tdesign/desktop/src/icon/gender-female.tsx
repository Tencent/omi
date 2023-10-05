import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gender-female')
export default class GenderFemale extends WeElement<IconProps> {
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
          d="M12 4.00635C14.7614 4.00635 17 6.24492 17 9.00635C17 11.6834 14.8962 13.869 12.2517 14.0001H11.7483C9.10382 13.869 7 11.6834 7 9.00635C7 6.24492 9.23858 4.00635 12 4.00635ZM13 15.9355C16.3923 15.4502 19 12.5328 19 9.00635C19 5.14035 15.866 2.00635 12 2.00635C8.13401 2.00635 5 5.14035 5 9.00635C5 12.5328 7.60771 15.4502 11 15.9355L11 17.0001H8V19.0001H11L11 22.0001H13L13 19.0001H16V17.0001L13 17.0001V15.9355Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
