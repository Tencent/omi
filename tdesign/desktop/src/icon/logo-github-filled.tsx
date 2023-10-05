import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-logo-github-filled')
export default class LogoGithubFilled extends WeElement<IconProps> {
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
          d="M12 0.998535C5.92617 0.998535 1 6.0483 1 12.2766C1 17.2597 4.1515 21.4871 8.52308 22.9786C9.07217 23.0829 9.25 22.7333 9.25 22.4363V20.3367C6.19017 21.019 5.55308 19.0059 5.55308 19.0059C5.05258 17.7023 4.33117 17.3555 4.33117 17.3555C3.33292 16.6553 4.40725 16.6704 4.40725 16.6704C5.51183 16.7493 6.093 17.833 6.093 17.833C7.07383 19.5566 8.66608 19.0585 9.294 18.77C9.39208 18.0416 9.67717 17.5435 9.9925 17.2625C7.54958 16.9758 4.98108 16.0087 4.98108 11.6883C4.98108 10.4561 5.411 9.45052 6.11408 8.66105C6.00042 8.37628 5.62367 7.22874 6.22133 5.67612C6.22133 5.67612 7.14533 5.37349 9.24725 6.83212C10.1245 6.58213 11.065 6.45713 12 6.45243C12.935 6.45713 13.8764 6.58213 14.7555 6.83212C16.8556 5.37349 17.7778 5.67612 17.7778 5.67612C18.3763 7.22968 17.9996 8.37722 17.8859 8.66105C18.5917 9.45052 19.018 10.4571 19.018 11.6883C19.018 16.02 16.4449 16.9739 13.9956 17.2531C14.3897 17.6027 14.75 18.2888 14.75 19.3414V22.4363C14.75 22.7361 14.926 23.0885 15.4842 22.9776C19.8522 21.4842 23 17.2578 23 12.2766C23 6.0483 18.0748 0.998535 12 0.998535Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
