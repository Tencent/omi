import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-peach')
export default class Peach extends WeElement<IconProps> {
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
        <g id="&amp;#230;&amp;#161;&amp;#131;&amp;#229;&amp;#173;&amp;#144;_peach">
          <path
            id="Union"
            d="M9.00008 0.999512H10.0001C11.196 0.999512 12.0496 1.63186 12.6158 2.36371C13.0799 1.64434 13.8288 0.999512 15.0001 0.999512H16.0001V2.99951H15.0001C14.6385 2.99951 14.3241 3.22477 14.0598 3.92771C14.0103 4.0592 13.9683 4.19487 13.9327 4.33026C14.2499 4.312 14.5861 4.3201 14.9311 4.35461C16.0202 4.46357 17.2867 4.84518 18.4218 5.61739C20.4299 6.98341 23.4262 10.691 21.2376 16.1498C19.9272 19.4185 16.8938 21.2134 13.4228 22.1546C13.1456 22.3888 12.851 22.6164 12.5417 22.8268L12.1044 23.1243L11.6124 22.9303C5.77501 20.6283 3.00768 17.318 2.2316 14.0206C1.46806 10.7763 2.69192 7.74005 4.44717 6.14798C6.60832 4.18775 9.27616 3.83181 11.4104 4.23331C11.3659 4.13268 11.3165 4.03263 11.262 3.93496C10.9085 3.30108 10.4851 2.99951 10.0001 2.99951H9.00008V0.999512ZM12.318 6.59099C10.6328 5.83422 7.87407 5.73983 5.79084 7.62938C4.56548 8.74082 3.58427 11.0379 4.17841 13.5624C4.74161 15.9553 6.77839 18.7445 11.84 20.8641C11.991 20.7464 12.1394 20.623 12.2845 20.4956C12.956 19.9059 13.5321 19.2523 13.9438 18.7394C14.1484 18.4846 14.3092 18.2685 14.4178 18.1178C14.472 18.0425 14.5129 17.9839 14.5396 17.9452L14.5686 17.9026L14.5748 17.8934L14.5754 17.8925L14.5889 17.8721L14.6036 17.8521C15.4006 16.7678 16.0877 14.5237 15.8939 12.2064C15.7047 9.94427 14.6972 7.78433 12.318 6.59099ZM16.3867 18.7896C17.7814 17.939 18.8112 16.8276 19.3813 15.4056C21.1129 11.0865 18.7951 8.29016 17.2969 7.27105C16.7296 6.8851 16.1084 6.62975 15.5151 6.48184C17.0326 8.06016 17.7235 10.0852 17.8869 12.0397C18.102 14.6114 17.4229 17.2147 16.3867 18.7896Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
