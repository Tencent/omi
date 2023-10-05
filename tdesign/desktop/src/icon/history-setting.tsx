import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-history-setting')
export default class HistorySetting extends WeElement<IconProps> {
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
          d="M11.9997 3.5C10.5412 3.5 9.17133 3.86651 7.9741 4.51164C6.6697 5.21451 5.56985 6.24843 4.78714 7.5H8.49974V9.5H1.49974V2.5H3.49974V5.83442C4.42555 4.56009 5.63073 3.50248 7.02537 2.75098C8.50694 1.95264 10.202 1.5 11.9997 1.5C17.7987 1.5 22.4997 6.20101 22.4997 12V13H20.4997V12C20.4997 7.30558 16.6942 3.5 11.9997 3.5ZM12.9997 6V11.5858L14.664 13.25L13.2497 14.6642L10.9997 12.4142V6H12.9997ZM3.44227 11.9014L3.54631 12.896C3.9933 17.1687 7.60814 20.5 11.9997 20.5H12.9997V22.5H11.9997C6.57341 22.5 2.10958 18.3846 1.55717 13.104L1.45312 12.1095L3.44227 11.9014ZM19.4997 14.0046V15.145C20.0328 15.3037 20.5126 15.5859 20.906 15.9584L21.8948 15.3875L22.8948 17.1195L21.9057 17.6906C21.9672 17.9504 21.9997 18.2215 21.9997 18.5001C21.9997 18.7802 21.9668 19.0525 21.9047 19.3136L22.8949 19.8853L21.8949 21.6173L20.9029 21.0446C20.5101 21.4158 20.0314 21.6969 19.4997 21.8551V23.0001H17.4997V21.8551C16.968 21.6969 16.4893 21.4157 16.0965 21.0446L15.1045 21.6172L14.1045 19.8852L15.0948 19.3135C15.0326 19.0525 14.9997 18.7801 14.9997 18.5001C14.9997 18.2215 15.0323 17.9505 15.0938 17.6907L14.1046 17.1196L15.1046 15.3876L16.0934 15.9585C16.4868 15.5859 16.9667 15.3037 17.4997 15.145V14.0046H19.4997ZM18.4997 17.0001C17.6713 17.0001 16.9997 17.6717 16.9997 18.5001C16.9997 19.3285 17.6713 20.0001 18.4997 20.0001C19.3282 20.0001 19.9997 19.3285 19.9997 18.5001C19.9997 17.6717 19.3282 17.0001 18.4997 17.0001Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
