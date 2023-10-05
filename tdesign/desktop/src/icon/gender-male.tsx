import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gender-male')
export default class GenderMale extends WeElement<IconProps> {
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
          d="M13.5 3H21V10.5H19V6.41421L15.6064 9.80783C16.4816 10.9764 17 12.4277 17 14C17 17.866 13.866 21 10 21C6.13401 21 3 17.866 3 14C3 10.134 6.13401 7 10 7C11.5723 7 13.0236 7.5184 14.1922 8.39362L17.5858 5H13.5V3ZM10 9C7.23858 9 5 11.2386 5 14C5 16.7614 7.23858 19 10 19C12.7614 19 15 16.7614 15 14C15 11.2386 12.7614 9 10 9Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
