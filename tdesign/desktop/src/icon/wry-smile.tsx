import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-wry-smile')
export default class WrySmile extends WeElement<IconProps> {
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
        <g id="&amp;#232;&amp;#139;&amp;#166;&amp;#231;&amp;#172;&amp;#145;-wry-smile">
          <g id="Union">
            <path
              d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM10.2328 9.86603L6.76874 11.866L5.76874 10.134L9.23284 8.13397L10.2328 9.86603ZM14.7687 8.13397L18.2328 10.134L17.2328 11.866L13.7687 9.86603L14.7687 8.13397ZM8.90004 13.6337L9.40076 14.4993C9.92099 15.3986 10.8909 16 12 16C13.1092 16 14.0791 15.3986 14.5993 14.4993L15.1 13.6337L16.8312 14.6351L16.3305 15.5007C15.4675 16.9926 13.852 18 12 18C10.1481 18 8.53256 16.9926 7.66955 15.5007L7.16882 14.6351L8.90004 13.6337Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    )
  }
}
