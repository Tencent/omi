import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-copyright')
export default class Copyright extends WeElement<IconProps> {
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
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 0.999999 18.0751 1 12C1 5.92487 5.92487 0.999999 12 1C18.0751 1 23 5.92487 23 12ZM9.52512 9.52581C8.15829 10.8926 8.15829 13.1087 9.52513 14.4756C10.892 15.8424 13.108 15.8424 14.4749 14.4756L15.182 13.7684L16.5962 15.1827L15.8891 15.8898C13.7412 18.0377 10.2588 18.0377 8.11091 15.8898C5.96303 13.7419 5.96303 10.2595 8.11091 8.11159C10.2588 5.96371 13.7412 5.96371 15.8891 8.11159L16.5962 8.8187L15.182 10.2329L14.4749 9.52581C13.108 8.15897 10.892 8.15897 9.52512 9.52581Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
