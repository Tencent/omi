import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-cat')
export default class Cat extends WeElement<IconProps> {
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
        <g id="&amp;#231;&amp;#140;&amp;#171;-cat">
          <g id="Union">
            <path
              d="M1 0.661133L7.47957 2.57965C8.86028 1.97467 10.3913 1.63879 12 1.63879C13.6087 1.63879 15.1397 1.97467 16.5204 2.57965L23 0.661133V12.7144H22.9926C22.7784 18.4582 17.9095 23.0001 12 23.0001C6.09053 23.0001 1.22162 18.4582 1.00735 12.7144H1V0.661133ZM3 6.17708C3.60238 5.34667 4.32311 4.604 5.1374 3.97199L3 3.33913V6.17708ZM3 12.3195C3 17.0833 6.9986 21.0001 12 21.0001C17.0014 21.0001 21 17.0833 21 12.3195C21 8.93015 18.9827 5.97591 16.0109 4.5462C14.8052 3.96614 13.444 3.63879 12 3.63879C10.556 3.63879 9.19481 3.96614 7.98908 4.5462C5.01727 5.97591 3 8.93015 3 12.3195ZM21 6.17708V3.33913L18.8626 3.97199C19.6769 4.604 20.3976 5.34667 21 6.17708ZM9 9.00013V12.0001H7V9.00013H9ZM17 9.00013V12.0001H15V9.00013H17ZM12 12.2641L12.8944 14.0529C13.2728 14.8097 13.7513 15.0384 14.083 15.0661C14.4226 15.0944 14.8418 14.9347 15.1679 14.4454L15.7226 13.6134L17.3867 14.7228L16.8321 15.5548C16.1582 16.5656 15.0774 17.1559 13.917 17.0592C13.2042 16.9998 12.546 16.6895 12 16.1743C11.454 16.6895 10.7958 16.9998 10.083 17.0592C8.92255 17.1559 7.84177 16.5656 7.16795 15.5548L6.61325 14.7228L8.27735 13.6134L8.83205 14.4454C9.15823 14.9347 9.57745 15.0944 9.91695 15.0661C10.2487 15.0384 10.7272 14.8097 11.1056 14.0529L12 12.2641Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    )
  }
}
