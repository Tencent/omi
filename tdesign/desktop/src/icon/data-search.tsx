import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-data-search')
export default class DataSearch extends WeElement<IconProps> {
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
          d="M2 2H22V13H4L4 20.0004H13V22.0004H2L2 2ZM4 11H20V4H4V11ZM5.99805 6.5H8.00195V8.50391H5.99805V6.5ZM17.75 16C16.7835 16 16 16.7835 16 17.75C16 18.7165 16.7835 19.5 17.75 19.5C18.7165 19.5 19.5 18.7165 19.5 17.75C19.5 16.7835 18.7165 16 17.75 16ZM14 17.75C14 15.6789 15.6789 14 17.75 14C19.8211 14 21.5 15.6789 21.5 17.75C21.5 18.4223 21.3231 19.0533 21.0132 19.599L22.6642 21.25L21.25 22.6642L19.599 21.0132C19.0533 21.3231 18.4223 21.5 17.75 21.5C15.6789 21.5 14 19.8211 14 17.75ZM5.99805 15.5H8.00195V17.5039H5.99805V15.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
