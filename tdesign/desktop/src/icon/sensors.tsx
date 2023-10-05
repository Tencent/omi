import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-sensors')
export default class Sensors extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_7450)">
          <path
            d="M22 11.9993C22 9.56298 21.13 7.33251 19.6828 5.59765L19.0422 4.82977L20.5779 3.54858L21.2185 4.31646C22.9546 6.39749 24 9.07761 24 11.9993C24 14.9209 22.9546 17.601 21.2185 19.6821L20.5779 20.4499L19.0422 19.1688L19.6828 18.4009C21.13 16.666 22 14.4355 22 11.9993ZM17.3773 7.51746C18.3899 8.73125 19 10.2953 19 11.9993C19 13.7032 18.3899 15.2673 17.3773 16.4811L16.7367 17.2489L15.201 15.9677L15.8416 15.1999C16.5654 14.3323 17 13.2178 17 11.9993C17 10.7807 16.5654 9.66626 15.8416 8.79866L15.201 8.03078L16.7367 6.74959L17.3773 7.51746ZM12 10C13.1046 10 14 10.8955 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8955 10.8954 10 12 10ZM8.79903 8.03078L8.15844 8.79866C7.43464 9.66626 7 10.7807 7 11.9993C7 13.2178 7.43464 14.3323 8.15844 15.1999L8.79903 15.9677L7.26327 17.2489L6.62268 16.4811C5.61009 15.2673 5 13.7032 5 11.9993C5 10.2953 5.61009 8.73125 6.62268 7.51747L7.26327 6.74959L8.79903 8.03078ZM4.95783 4.82977L4.31723 5.59765C2.86995 7.33251 2 9.56298 2 11.9993C2 14.4355 2.86995 16.666 4.31723 18.4009L4.95783 19.1687L3.42207 20.4499L2.78147 19.6821C1.0454 17.601 -1.2771e-07 14.9209 0 11.9993C1.2771e-07 9.07761 1.0454 6.39749 2.78148 4.31646L3.42207 3.54858L4.95783 4.82977Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
