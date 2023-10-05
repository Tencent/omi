import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-edit')
export default class Edit extends WeElement<IconProps> {
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
          d="M15.7478 2.94736C16.5289 2.16631 17.7952 2.16631 18.5763 2.94736L21.0511 5.42223C21.8322 6.20328 21.8322 7.46961 21.0511 8.25066L9.15806 20.1437L2.77832 21.2202L3.85476 14.8404L15.7478 2.94736ZM15.5192 6.00439L17.9941 8.47927L19.6369 6.83645L17.1621 4.36157L15.5192 6.00439ZM16.5799 9.89348L14.105 7.41861L5.72062 15.803L5.21828 18.7802L8.19549 18.2779L16.5799 9.89348Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
