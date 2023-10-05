import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-filter-1')
export default class Filter1 extends WeElement<IconProps> {
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
          d="M4.55083 5.5C4.58882 5.53787 4.648 5.5889 4.73888 5.6521C5.04513 5.86506 5.55354 6.09716 6.27176 6.3084C7.6951 6.72703 9.72062 7 12 7C14.2794 7 16.3049 6.72703 17.7282 6.3084C18.4465 6.09716 18.9549 5.86506 19.2611 5.6521C19.352 5.5889 19.4112 5.53787 19.4492 5.5C19.4112 5.46213 19.352 5.4111 19.2611 5.3479C18.9549 5.13494 18.4465 4.90284 17.7282 4.6916C16.3049 4.27297 14.2794 4 12 4C9.72062 4 7.6951 4.27297 6.27176 4.6916C5.55354 4.90284 5.04513 5.13494 4.73888 5.3479C4.648 5.4111 4.58882 5.46213 4.55083 5.5ZM17.1744 8.50722C15.6931 8.82146 13.9059 9 12 9C10.0941 9 8.30692 8.82146 6.82559 8.50722L11 13.645V19.8293C12.1652 19.4175 13 18.3062 13 17V13.645L17.1744 8.50722ZM21.5 5.5V6.35504L15 14.355V17C15 19.7614 12.7614 22 10 22H9V14.355L2.5 6.35504V5.5C2.5 4.66086 3.0725 4.07064 3.59706 3.70587C4.15106 3.32064 4.88745 3.01404 5.70743 2.77287C7.36048 2.28668 9.58496 2 12 2C14.415 2 16.6395 2.28668 18.2926 2.77287C19.1125 3.01404 19.8489 3.32064 20.4029 3.70587C20.9275 4.07064 21.5 4.66086 21.5 5.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
