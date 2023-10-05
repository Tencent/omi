import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-cloudy-day')
export default class CloudyDay extends WeElement<IconProps> {
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
          d="M9.4144 6.00452C10.1848 4.23654 11.9471 3 14 3C16.0515 3 17.8127 4.23474 18.584 6.00077C21.0305 6.04554 23 8.04277 23 10.5C23 11.7164 22.3825 12.8297 21.6125 13.6125C21.1455 14.0873 20.5607 14.5022 19.9229 14.7518C19.9736 15.0494 20 15.3552 20 15.6667C20 18.5938 17.6677 21 14.75 21H5.4C2.95173 21 1 18.9818 1 16.5333C1 14.7432 2.0402 13.1875 3.55599 12.4768C3.55201 12.385 3.55 12.2927 3.55 12.2C3.55 8.87357 6.13792 6.13052 9.4144 6.00452ZM11.528 6.29932C13.4228 6.92138 14.904 8.45739 15.4841 10.385C17.0719 10.6105 18.4254 11.5564 19.2248 12.8765C19.5308 12.752 19.8701 12.5318 20.1867 12.2099C20.7046 11.6835 21 11.0468 21 10.5C21 9.11929 19.8807 8 18.5 8C18.3496 8 18.203 8.01318 18.0612 8.03821L17.1369 8.20141L16.9155 7.28925C16.5966 5.975 15.411 5 14 5C12.9753 5 12.0693 5.51426 11.528 6.29932ZM9.65 8C7.40385 8 5.55 9.86201 5.55 12.2C5.55 12.4658 5.57398 12.7249 5.61959 12.9756L5.78988 13.9114L4.86377 14.1283C3.80838 14.3754 3 15.3489 3 16.5333C3 17.914 4.09273 19 5.4 19H14.75C16.5267 19 18 17.526 18 15.6667C18 15.2078 17.9101 14.7732 17.7487 14.3786C17.2531 13.1668 16.089 12.3333 14.75 12.3333C14.732 12.3333 14.7141 12.3335 14.6961 12.3338L13.8329 12.3481L13.6928 11.4962C13.385 9.62419 11.8728 8.18959 10.0276 8.01751C9.90351 8.00594 9.77757 8 9.65 8Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
