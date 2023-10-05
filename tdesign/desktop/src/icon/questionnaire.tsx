import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-questionnaire')
export default class Questionnaire extends WeElement<IconProps> {
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
          d="M1.5 2H22.5V18H6.87574L1.5 22.7038V2ZM3.5 4V18.2962L6.12426 16H20.5V4H3.5ZM12 7.5C11.4477 7.5 11 7.94772 11 8.5V9.5H9V8.5C9 6.84315 10.3431 5.5 12 5.5C13.6569 5.5 15 6.84315 15 8.5C15 9.17608 14.8282 9.74594 14.5259 10.2099C14.2288 10.6659 13.8429 10.9631 13.4972 11.1603C13.3243 11.2589 13.1536 11.3366 13.0034 11.3975V11.75H11.0034V10.75C11.0034 10.3263 11.2481 10.0627 11.3644 9.96014C11.4836 9.85498 11.6042 9.79486 11.6602 9.76828C11.7666 9.71774 11.8935 9.67378 11.9686 9.64778C11.9751 9.64553 11.9812 9.64341 11.9869 9.64144C12.1775 9.57513 12.3462 9.51433 12.5062 9.42305C12.6597 9.3355 12.7729 9.23684 12.8501 9.11822C12.9223 9.00753 13 8.82392 13 8.5C13 7.94772 12.5523 7.5 12 7.5ZM11 12.5H13.0039V14.5039H11V12.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
