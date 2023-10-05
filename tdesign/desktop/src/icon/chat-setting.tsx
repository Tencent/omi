import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chat-setting')
export default class ChatSetting extends WeElement<IconProps> {
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
          d="M1.5 2H22.5V11H20.5V4H3.5V18.2962L6.12426 16H13V18H6.87574L1.5 22.7038V2ZM19.9991 12.5V13.6404C20.5322 13.799 21.012 14.0812 21.4054 14.4538L22.3942 13.8828L23.3942 15.6149L22.4051 16.186C22.4666 16.4458 22.4991 16.7168 22.4991 16.9954C22.4991 17.2755 22.4663 17.5479 22.4041 17.809L23.3943 18.3806L22.3943 20.1127L21.4023 19.54C21.0095 19.9111 20.5308 20.1923 19.9991 20.3505V21.4954H17.9991V20.3505C17.4675 20.1923 16.9887 19.9111 16.5959 19.5399L15.6039 20.1126L14.6039 18.3806L15.5942 17.8089C15.532 17.5478 15.4992 17.2755 15.4992 16.9954C15.4992 16.7169 15.5317 16.4459 15.5932 16.1861L14.604 15.615L15.604 13.8829L16.5929 14.4538C16.9863 14.0813 17.4661 13.799 17.9991 13.6404V12.5H19.9991ZM18.9991 15.4954C18.1707 15.4954 17.4992 16.167 17.4992 16.9954C17.4992 17.8239 18.1707 18.4954 18.9991 18.4954C19.8276 18.4954 20.4991 17.8239 20.4991 16.9954C20.4991 16.167 19.8276 15.4954 18.9991 15.4954Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
