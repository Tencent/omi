import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-radish')
export default class Radish extends WeElement<IconProps> {
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
        <g id="&amp;#232;&amp;#144;&amp;#157;&amp;#229;&amp;#141;&amp;#156;_radish">
          <path
            id="Union"
            d="M16.3894 1.9541L16.3894 6.19675L20.0004 2.58582L21.4146 4.00003L17.8037 7.61096L22.0463 7.61096V9.61096L17.5458 9.61096C18.1575 10.4259 18.8794 11.5421 19.0973 12.5933C19.7365 15.1926 18.464 18.4644 15.1635 20.5063C12.4192 22.2042 8.30564 23.0537 2.65528 22.1807L1.93152 22.0689L1.8197 21.3451C1.34973 18.3033 1.37423 15.7137 1.75953 13.5423C2.42595 9.78659 4.1761 7.28111 6.27355 5.93003C7.92129 4.86863 9.80968 4.51065 11.407 4.90307C12.4583 5.1209 13.5745 5.84292 14.3894 6.4546L14.3894 1.9541L16.3894 1.9541ZM14.6822 9.31817L14.6697 9.30608C14.6538 9.29087 14.6293 9.26755 14.597 9.23721C14.5323 9.17647 14.4364 9.0878 14.3153 8.97964C14.0723 8.76264 13.7317 8.47067 13.3409 8.16976C12.5125 7.5319 11.6242 6.98603 10.9905 6.85929L10.9669 6.85458L10.9436 6.84873C10.2496 6.67484 9.38228 6.72 8.48862 7.04584L10.9146 9.51155L9.48889 10.9142L6.71025 8.09002C5.48297 9.12488 4.37449 10.829 3.82695 13.3892L6.91459 16.5069L5.49355 17.9143L3.49987 15.9012C3.42679 17.2054 3.47912 18.6707 3.69208 20.3082C7.81919 20.8439 10.852 20.3499 12.9763 19.4033L10.0862 16.4958L11.5046 15.0859L14.7606 18.3614C16.9351 16.7178 17.5212 14.5317 17.1517 13.0568L17.1458 13.0335L17.1411 13.0099C17.0144 12.3762 16.4685 11.4879 15.8306 10.6595C15.5297 10.2687 15.2378 9.92813 15.0208 9.68513C14.9126 9.56402 14.8239 9.46811 14.7632 9.40339C14.7328 9.37106 14.7095 9.34658 14.6943 9.33071L14.6822 9.31817Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
