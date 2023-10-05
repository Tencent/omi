import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-thunderstorm-night')
export default class ThunderstormNight extends WeElement<IconProps> {
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
          d="M17.1313 0.901367L17.029 2.08597C17.0178 2.21553 17.0121 2.34687 17.0121 2.47979C17.0121 4.96789 19.0291 6.98489 21.5172 6.98489C21.6501 6.98489 21.7814 6.97917 21.911 6.96798L23.0956 6.8657L22.9933 8.0503C22.8458 9.75856 22.0391 11.2761 20.8311 12.3493C21.5702 13.2552 22.0167 14.4038 22.0167 15.6588C22.0167 17.871 20.634 19.7444 18.7014 20.5572L17.7796 20.9449L17.0042 19.1014L17.926 18.7137C19.1755 18.1881 20.0167 17.0041 20.0167 15.6588C20.0167 14.6066 19.5051 13.6582 18.6842 13.0396C18.5545 12.9419 18.4174 12.8527 18.2737 12.7729C17.7584 12.4868 17.1579 12.3214 16.5125 12.3214C16.5007 12.3214 16.4889 12.3215 16.4771 12.3216C16.4692 12.3217 16.4614 12.3218 16.4535 12.3219L15.5993 12.3352L15.4527 11.4935C15.1701 9.87034 13.8999 8.53412 12.2149 8.11784C11.8622 8.03072 11.4913 7.98406 11.1075 7.98406C11.0861 7.98406 11.0647 7.98421 11.0434 7.9845C8.60508 8.01758 6.70251 9.9216 6.70251 12.1889C6.70251 12.4514 6.72758 12.7074 6.77532 12.9552L6.95942 13.9106L6.00935 14.1208C4.83266 14.381 4 15.3817 4 16.5262C4 17.4741 4.56688 18.3187 5.43353 18.7334L6.33556 19.1651L5.47222 20.9692L4.57019 20.5375C3.06388 19.8166 2 18.3032 2 16.5262C2 14.6949 3.1256 13.1481 4.70819 12.4522C4.70441 12.3648 4.70251 12.277 4.70251 12.1889C4.70251 9.04272 7.1007 6.49027 10.166 6.05095C10.779 3.32609 13.1 1.24945 15.9467 1.00365L17.1313 0.901367ZM12.2307 6.0793C12.3873 6.10615 12.5419 6.13852 12.6945 6.17621C14.8438 6.70718 16.5773 8.29772 17.2318 10.3667C17.9548 10.4583 18.6357 10.6863 19.2445 11.0243C19.2552 11.0303 19.2659 11.0363 19.2766 11.0423C19.9629 10.5083 20.4899 9.78093 20.7764 8.94318C17.7757 8.60303 15.3939 6.22131 15.0538 3.22058C13.7215 3.67633 12.6701 4.73959 12.2307 6.0793ZM13.8767 13.656L11.8177 16.9794H15.8352L11.8125 23.3587L10.1208 22.2919L12.2096 18.9794H8.2259L12.1766 12.6027L13.8767 13.656Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
