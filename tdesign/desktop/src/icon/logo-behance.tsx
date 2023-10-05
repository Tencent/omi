import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-logo-behance')
export default class LogoBehance extends WeElement<IconProps> {
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
          d="M6.5 4C7.81216 4 8.96185 4.42494 9.78376 5.26179C10.6028 6.09576 11 7.24056 11 8.5C11 9.72333 10.6253 10.8385 9.85318 11.6657C10.1138 11.8109 10.3574 11.9806 10.5813 12.1756C11.5182 12.9916 12 14.1566 12 15.5C12 16.8434 11.5182 18.0084 10.5813 18.8244C9.66148 19.6256 8.40795 20 7.01387 20H2V4H6.5ZM4 13V18H7.01387C8.06671 18 8.80626 17.7182 9.26774 17.3162C9.71222 16.9291 10 16.3441 10 15.5C10 14.6559 9.71222 14.0709 9.26774 13.6838C8.80626 13.2818 8.06671 13 7.01387 13H4ZM4 6V11H6.5C7.37534 11 7.97565 10.7249 8.35686 10.3368C8.74091 9.94576 9 9.34056 9 8.5C9 7.65944 8.74091 7.05424 8.35686 6.66321C7.97565 6.27506 7.37534 6 6.5 6H4ZM13.5 6.5H21.5V8.5H13.5V6.5ZM14.1613 11.5267C14.9536 10.5755 16.1105 10 17.5 10C19.1428 10 20.321 10.7179 21.0524 11.7582C21.7507 12.7513 22 13.9712 22 15V16H15.1173C15.2359 16.4772 15.4385 16.8817 15.6981 17.1933C16.1089 17.6866 16.702 18 17.5 18C18.3764 18 18.9491 17.7368 19.2908 17.5053C19.4659 17.3868 19.587 17.2717 19.6592 17.1941C19.6952 17.1554 19.7185 17.1266 19.7296 17.1122C19.7316 17.1095 19.7333 17.1074 19.7345 17.1058L20.2751 16.282L21.9472 17.3793L21.3985 18.2153L21.3979 18.2163L21.3973 18.2173L21.3959 18.2193L21.3929 18.2238L21.3858 18.2343C21.3806 18.242 21.3744 18.2509 21.3672 18.2611C21.3527 18.2814 21.3343 18.3065 21.3116 18.3358C21.2664 18.3942 21.2042 18.4696 21.124 18.5559C20.9637 18.7283 20.7294 18.9466 20.4123 19.1613C19.7697 19.5965 18.8111 20 17.5 20C16.1105 20 14.9536 19.4245 14.1613 18.4733C13.3838 17.5399 13 16.3004 13 15C13 13.6996 13.3838 12.4601 14.1613 11.5267ZM15.1173 14H19.8857C19.7905 13.5976 19.6352 13.2197 19.4163 12.9085C19.054 12.3932 18.4822 12 17.5 12C16.702 12 16.1089 12.3134 15.6981 12.8067C15.4385 13.1183 15.2359 13.5228 15.1173 14Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
