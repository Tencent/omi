import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import css from './style/index'

@tag('t-icon-tomato')
export default class Tomato extends WeElement<IconProps> {
  static css = css as string

  static defaultProps = {
    size: '24px',
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
        <g id="&amp;#232;&amp;#165;&amp;#191;&amp;#231;&amp;#186;&amp;#162;&amp;#230;&amp;#159;&amp;#191;_tomato">
          <path
            id="Union"
            d="M9.5038 1.58594L12.0254 4.12107L14.7369 1.58674L16.1025 3.04788L15.079 4.00456C15.494 4.02352 15.8948 4.1023 16.2822 4.21625C17.3419 4.52795 18.3896 5.13242 18.9263 5.62009C20.4371 6.77448 21.9084 9.32547 21.9959 12.2365C22.0873 15.2785 20.6737 18.6379 16.5036 21.2751C16.0252 21.5776 15.4574 21.7885 14.9076 21.9015C14.3656 22.0128 13.759 22.0459 13.2126 21.9163C12.7677 21.8108 12.52 21.7133 12.3748 21.6561C12.3482 21.6457 12.3251 21.6366 12.3048 21.629C12.2687 21.6155 12.2622 21.6145 12.2503 21.6127L12.2491 21.6125C12.2222 21.6083 12.1553 21.601 12 21.601C11.8447 21.601 11.7778 21.6083 11.7509 21.6125L11.7498 21.6127C11.7378 21.6145 11.7313 21.6155 11.6952 21.629C11.6749 21.6366 11.6518 21.6457 11.6252 21.6561C11.48 21.7133 11.2323 21.8108 10.7874 21.9163C10.241 22.0459 9.63441 22.0128 9.09245 21.9015C8.54262 21.7885 7.97479 21.5776 7.49637 21.2751C3.32636 18.6379 1.91274 15.2785 2.00413 12.2365C2.09158 9.3257 3.56266 6.77488 5.07334 5.62037C5.6103 5.13117 6.6397 4.52438 7.72518 4.21412C8.1401 4.09553 8.61872 4.00394 9.08434 4.00026L8.0858 2.99636L9.5038 1.58594ZM10.4698 6.15351L11.3089 6.95584C11.6955 7.32547 12.3045 7.32547 12.6911 6.95584L13.5302 6.15351C13.3309 6.20114 13.1671 6.25339 13.0437 6.30017C12.7751 6.40201 12.4123 6.51358 12 6.51358C11.5877 6.51358 11.2249 6.40201 10.9563 6.30017C10.833 6.25339 10.6691 6.20114 10.4698 6.15351ZM16.2469 6.3231L14.0732 8.40141C12.9135 9.51028 11.0865 9.51028 9.92678 8.40141L7.75001 6.32013C7.12981 6.57404 6.6129 6.91576 6.40455 7.11341L6.3615 7.15424L6.31393 7.18969C5.31459 7.93454 4.07468 9.91836 4.00323 12.2965C3.93484 14.5727 4.94139 17.2929 8.56535 19.5847C8.8086 19.7386 9.14284 19.87 9.49509 19.9424C9.85522 20.0164 10.1507 20.0119 10.3259 19.9703C10.6277 19.8987 10.7584 19.8476 10.8938 19.7946C10.927 19.7816 10.9604 19.7685 10.9968 19.7549C11.2946 19.6439 11.5543 19.601 12 19.601C12.4457 19.601 12.7055 19.6439 13.0032 19.7549C13.0396 19.7685 13.073 19.7816 13.1062 19.7946C13.2416 19.8476 13.3723 19.8987 13.6741 19.9703C13.8493 20.0119 14.1448 20.0164 14.5049 19.9424C14.8572 19.87 15.1914 19.7386 15.4347 19.5847C19.0586 17.2929 20.0652 14.5727 19.9968 12.2965C19.9253 9.91836 18.6854 7.93454 17.6861 7.18969L17.6385 7.15424L17.5955 7.11341C17.3948 6.92303 16.8688 6.58073 16.2469 6.3231Z"
          />
        </g>
      </svg>
    )
  }
}
