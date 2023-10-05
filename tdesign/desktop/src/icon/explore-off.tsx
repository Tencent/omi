import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-explore-off')
export default class ExploreOff extends WeElement<IconProps> {
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
          d="M7.47173 1.9726C8.854 1.34749 10.3878 1 12 1C18.0752 1 23 5.92487 23 12C23 13.6122 22.6525 15.146 22.0274 16.5283L21.6154 17.4395L19.7931 16.6153L20.2051 15.7042C20.7154 14.5757 21 13.3225 21 12C21 7.02944 16.9706 3 12 3C10.6776 3 9.4243 3.28459 8.29585 3.79492L7.38469 4.20698L6.56057 2.38466L7.47173 1.9726ZM3 1.58579L10.6036 9.18941L10.6052 9.18879L14.8129 13.3965L14.8123 13.3981L22.4142 21L21 22.4142L19.039 20.4532C17.1321 22.0426 14.6771 23 12 23C5.92487 23 1 18.0751 1 12C1 9.3229 1.95737 6.86792 3.54676 4.96098L1.58579 3L3 1.58579ZM4.96806 6.38227C3.73579 7.9224 3 9.87458 3 12C3 16.9706 7.02944 21 12 21C14.1254 21 16.0776 20.2642 17.6177 19.0319L14.0266 15.4408L12.4772 19.4693L10.3764 13.6253L4.53238 11.5245L8.56087 9.97509L4.96806 6.38227ZM17.4426 6.55882L15.5057 11.5945L13.639 10.8766L13.9605 10.0409L13.1248 10.3623L12.4068 8.49564L17.4426 6.55882Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
