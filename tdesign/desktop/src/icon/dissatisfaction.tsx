import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-dissatisfaction')
export default class Dissatisfaction extends WeElement<IconProps> {
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
        <g id="&amp;#228;&amp;#184;&amp;#141;&amp;#230;&amp;#187;&amp;#161;-dissatisfaction">
          <g id="Union">
            <path
              d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM8 8.5V9.5C8 9.77614 8.22386 10 8.5 10C8.77614 10 9 9.77614 9 9.5V8.5H11V9.5C11 10.8807 9.88071 12 8.5 12C7.11929 12 6 10.8807 6 9.5V8.5H8ZM15 8.5V9.5C15 9.77614 15.2239 10 15.5 10C15.7761 10 16 9.77614 16 9.5V8.5H18V9.5C18 10.8807 16.8807 12 15.5 12C14.1193 12 13 10.8807 13 9.5V8.5H15ZM7.66955 15.4993C8.53256 14.0074 10.1481 13 12 13C13.852 13 15.4675 14.0074 16.3305 15.4993L16.8312 16.3649L15.1 17.3663L14.5993 16.5007C14.0791 15.6014 13.1092 15 12 15C10.8909 15 9.92099 15.6014 9.40076 16.5007L8.90004 17.3663L7.16882 16.3649L7.66955 15.4993Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    )
  }
}
