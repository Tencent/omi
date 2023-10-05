import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-git-pull-request')
export default class GitPullRequest extends WeElement<IconProps> {
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
          d="M16.4142 3.00003L14.4142 5.00003H19.5V14.645C20.9457 15.0752 22 16.4145 22 18C22 19.933 20.433 21.5 18.5 21.5C16.567 21.5 15 19.933 15 18C15 16.4145 16.0543 15.0752 17.5 14.645V7.00003H14.4142L16.4142 9.00003L15 10.4142L10.5858 6.00003L15 1.58582L16.4142 3.00003ZM5.5 4.50003C4.67157 4.50003 4 5.1716 4 6.00003C4 6.82846 4.67157 7.50003 5.5 7.50003C6.32843 7.50003 7 6.82846 7 6.00003C7 5.1716 6.32843 4.50003 5.5 4.50003ZM2 6.00003C2 4.06703 3.567 2.50003 5.5 2.50003C7.433 2.50003 9 4.06703 9 6.00003C9 7.58554 7.94574 8.92482 6.5 9.35509V14.645C7.94574 15.0752 9 16.4145 9 18C9 19.933 7.433 21.5 5.5 21.5C3.567 21.5 2 19.933 2 18C2 16.4145 3.05426 15.0752 4.5 14.645V9.35509C3.05426 8.92482 2 7.58554 2 6.00003ZM5.5 16.5C4.67157 16.5 4 17.1716 4 18C4 18.8285 4.67157 19.5 5.5 19.5C6.32843 19.5 7 18.8285 7 18C7 17.1716 6.32843 16.5 5.5 16.5ZM18.5 16.5C17.6716 16.5 17 17.1716 17 18C17 18.8285 17.6716 19.5 18.5 19.5C19.3284 19.5 20 18.8285 20 18C20 17.1716 19.3284 16.5 18.5 16.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
