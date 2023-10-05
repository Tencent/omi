import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-money')
export default class Money extends WeElement<IconProps> {
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
          d="M12 12.5C10.067 12.5 8.5 14.067 8.5 16C8.5 17.933 10.067 19.5 12 19.5C13.933 19.5 15.5 17.933 15.5 16C15.5 14.067 13.933 12.5 12 12.5ZM10.5 16C10.5 15.1716 11.1716 14.5 12 14.5C12.8284 14.5 13.5 15.1716 13.5 16C13.5 16.8284 12.8284 17.5 12 17.5C11.1716 17.5 10.5 16.8284 10.5 16Z"
          fill="currentColor"
        />
        <path
          d="M17.5262 5.11601L14.3474 0.659424L2.65847 9.99658L2.00962 9.9905L2.00953 10H1.5V22H22.5V10H21.5383L19.624 4.40097L17.5262 5.11601ZM19.4247 10L9.39652 10L16.8657 7.45411L18.3876 6.967L19.4247 10ZM15.55 5.78959L7.83949 8.41773L13.9456 3.54019L15.55 5.78959ZM3.5 18.1686L3.5 13.8293C4.35241 13.528 5.02801 12.8524 5.32929 12L18.6702 12C18.9715 12.8527 19.6473 13.5285 20.5 13.8298V18.1707C19.6476 18.472 18.972 19.1476 18.6707 20H5.33137C5.02992 19.1465 4.35349 18.4701 3.5 18.1686Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
