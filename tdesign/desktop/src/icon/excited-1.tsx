import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-excited-1')
export default class Excited1 extends WeElement<IconProps> {
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
        <g id="&amp;#229;&amp;#133;&amp;#180;&amp;#229;&amp;#165;&amp;#139;-excited-1">
          <g id="Union">
            <path
              d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM7.61869 7.13816L11 9.04017L11 10.5L7.80001 12.9L6.60001 11.3L8.45917 9.90563L6.63816 8.88131L7.61869 7.13816ZM17.3618 8.88131L15.5408 9.90563L17.4 11.3L16.2 12.9L13 10.5L13 9.04017L16.3813 7.13816L17.3618 8.88131ZM8.90004 13.6337L9.40076 14.4993C9.92099 15.3986 10.8909 16 12 16C13.1092 16 14.0791 15.3986 14.5993 14.4993L15.1 13.6337L16.8312 14.6351L16.3305 15.5007C15.4675 16.9926 13.852 18 12 18C10.1481 18 8.53256 16.9926 7.66955 15.5007L7.16882 14.6351L8.90004 13.6337Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    )
  }
}
