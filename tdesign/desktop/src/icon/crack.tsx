import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-crack')
export default class Crack extends WeElement<IconProps> {
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
        <g id="&amp;#232;&amp;#163;&amp;#130;&amp;#229;&amp;#188;&amp;#128;-crack">
          <g id="Union">
            <path
              d="M11.3875 3.02051C6.7026 3.33536 3 7.23528 3 12C3 16.4346 6.20806 20.1211 10.4295 20.8636L11.8799 17.9986C10.0783 17.9561 8.51385 16.9603 7.66955 15.5007L7.16882 14.6351L8.90004 13.6337L9.40076 14.4993C9.7109 15.0354 10.1808 15.4657 10.7448 15.7257L9.88197 14L11.882 10L9.88057 5.99721L11.3875 3.02051ZM13.5705 3.13641L12.1194 6.00279L14.118 10L12.118 14L13.0278 15.8195C13.6927 15.5771 14.2483 15.106 14.5993 14.4993L15.1 13.6337L16.8312 14.6351L16.3305 15.5007C15.7856 16.4427 14.9408 17.1915 13.9258 17.6155L14.1194 18.0028L12.6125 20.9795C17.2974 20.6646 21 16.7647 21 12C21 7.56538 17.7919 3.87892 13.5705 3.13641ZM1 12C1 5.92487 5.92487 1 12 1C12.3705 1 12.7371 1.01836 13.0988 1.05427C18.6585 1.60627 23 6.29551 23 12C23 18.0751 18.0751 23 12 23C11.6295 23 11.2629 22.9816 10.9012 22.9457C5.34148 22.3937 1 17.7045 1 12ZM9 8V12H7V8H9ZM17 8V12H15V8H17Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    )
  }
}
