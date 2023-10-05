import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-architecture-hui-style')
export default class ArchitectureHuiStyle extends WeElement<IconProps> {
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
          d="M12.7997 1.40013L11.9997 0.333496L11.1997 1.40013L11.1961 1.40495L11.184 1.42105L11.135 1.48577C11.0917 1.54287 11.0275 1.6272 10.9448 1.73489C10.7794 1.9503 10.5403 2.25886 10.2469 2.62946C9.65932 3.37166 8.85777 4.35805 7.99712 5.34166C7.13224 6.33009 6.22666 7.2938 5.42908 8.00275C5.02896 8.35842 4.67943 8.62884 4.39357 8.80476C4.14763 8.9561 4.02374 8.99023 3.99784 8.99792C3.99784 8.99744 3.99784 8.99695 3.99783 8.99646L3.99413 7.99646L1.99414 8.00388L1.99785 9.00387C1.99935 9.40898 2.10399 9.91214 2.45655 10.3313C2.83467 10.7809 3.38514 11.0002 3.99969 11.0002L3.99969 20.0002L1.99969 20.0002L1.99969 22.0002L21.9997 22.0002L21.9997 20.0002L19.9997 20.0002L19.9997 11.0002C20.614 11.0002 21.1649 10.781 21.5431 10.3308C21.8958 9.91078 21.9997 9.40657 21.9997 9.00016L21.9997 8.00016L19.9997 8.00016L19.9997 8.99737C19.9701 8.98867 19.8463 8.95277 19.6058 8.80475C19.32 8.62884 18.9704 8.35841 18.5703 8.00275C17.7727 7.2938 16.8671 6.33009 16.0023 5.34166C15.1416 4.35805 14.3401 3.37166 13.7525 2.62946C13.4591 2.25886 13.22 1.9503 13.0546 1.73489C12.9719 1.6272 12.9077 1.54287 12.8644 1.48577L12.8154 1.42105L12.8033 1.40495L12.7997 1.40013ZM16.7041 9.00016L7.29531 9.00016C8.02888 8.29652 8.79266 7.46965 9.50227 6.65867C10.3916 5.64228 11.2151 4.62867 11.815 3.87087C11.8791 3.78984 11.9408 3.71169 11.9997 3.63671C12.0586 3.71169 12.1203 3.78984 12.1844 3.87087C12.7843 4.62867 13.6078 5.64228 14.4971 6.65867C15.2067 7.46965 15.9705 8.29651 16.7041 9.00016ZM5.99969 11.0002L17.9997 11.0002L17.9997 20.0002L14.9997 20.0002L14.9997 17.0002C14.9997 15.3433 13.6565 14.0002 11.9997 14.0002C10.3428 14.0002 8.99969 15.3433 8.99969 17.0002L8.99969 20.0002L5.99969 20.0002L5.99969 11.0002ZM12.9997 20.0002L10.9997 20.0002L10.9997 17.0002C10.9997 16.4479 11.4474 16.0002 11.9997 16.0002C12.552 16.0002 12.9997 16.4479 12.9997 17.0002L12.9997 20.0002Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
