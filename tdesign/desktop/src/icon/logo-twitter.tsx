import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-logo-twitter')
export default class LogoTwitter extends WeElement<IconProps> {
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
          d="M16 4C13.7909 4 12 5.79086 12 8L12 9.99997H11C7.60396 9.99997 4.51166 8.69693 2.19682 6.56576C2.06784 7.18973 2 7.83652 2 8.49986C2 12.5099 4.48495 15.942 8.00265 17.3357L9.73429 18.0217L8.20574 19.086C7.41253 19.6383 6.55698 20.1078 5.65173 20.4819C6.70696 20.8186 7.83176 21.0004 8.99999 21.0004C15.0751 21.0004 20 16.0752 20 10V8.47286L20.2269 8.19631C20.7733 7.53022 21.1564 7.03002 21.5057 6.53862C21.2276 6.65048 20.9584 6.73886 20.7221 6.79271L19.9476 6.96924L19.6004 6.25473C18.951 4.91798 17.5817 4 16 4ZM22.9756 5.7547L23.9937 6.45106L23.4291 7.27645C23.0124 7.88573 22.5973 8.44737 22 9.18629V10C22 17.1797 16.1797 23.0004 8.99999 23.0004C6.55063 23.0004 4.25667 22.3221 2.2991 21.1425L0.0490957 19.7866L2.63116 19.303C3.65598 19.1111 4.63303 18.7832 5.54295 18.3384C2.2211 16.3228 0 12.6716 0 8.49986C0 7.00436 0.285976 5.57322 0.807145 4.25989L1.43146 2.68664L2.5082 3.9926C4.32827 6.20011 6.98916 7.68404 10.0002 7.95517C10.0243 4.6621 12.7012 2 16 2C18.0542 2 19.8659 3.03242 20.9468 4.60378C21.3193 4.4377 21.7107 4.21872 21.9545 4.02219L22.7331 3.39466L23.9882 4.95185L23.2096 5.57938C23.137 5.63789 23.0586 5.6965 22.9756 5.7547Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
