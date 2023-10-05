import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-panorama-horizontal')
export default class PanoramaHorizontal extends WeElement<IconProps> {
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
          d="M23 3.15601V20.8441L21.7129 20.4579L21.7111 20.4574L21.7023 20.4548L21.6638 20.4435C21.6289 20.4334 21.5758 20.4182 21.5058 20.3985C21.3656 20.3593 21.1576 20.3026 20.8916 20.2342C20.3592 20.0973 19.5958 19.914 18.6789 19.7306C16.8384 19.3625 14.4093 19 12 19C9.59072 19 7.16163 19.3625 5.32112 19.7306C4.40419 19.914 3.6408 20.0973 3.10842 20.2342C2.84237 20.3026 2.6344 20.3593 2.49424 20.3985C2.42417 20.4182 2.37108 20.4334 2.33618 20.4435L2.29765 20.4548L2.28735 20.4579L1 20.8441L1 3.15601L2.28706 3.54212L2.28891 3.54268L2.29765 3.54527L2.33618 3.55654C2.37108 3.56667 2.42417 3.58191 2.49424 3.60153C2.6344 3.64077 2.84237 3.69751 3.10842 3.76592C3.6408 3.90282 4.40419 4.08607 5.32112 4.26946C7.16163 4.63756 9.59072 5.00004 12 5.00004C14.4093 5.00004 16.8384 4.63756 18.6789 4.26946C19.5958 4.08607 20.3592 3.90282 20.8916 3.76592C21.1576 3.69751 21.3656 3.64077 21.5058 3.60153C21.5758 3.58191 21.6289 3.56667 21.6638 3.55654L21.7024 3.54527L21.7111 3.54268L21.7127 3.54221L23 3.15601ZM21 5.80098C20.4812 5.92881 19.8254 6.07975 19.0711 6.23062C17.1616 6.61252 14.5907 7.00004 12 7.00004C9.40928 7.00004 6.83837 6.61251 4.92889 6.23062C4.17457 6.07975 3.51879 5.92881 3 5.80098L3 18.1991C3.51879 18.0713 4.17457 17.9203 4.92888 17.7695C6.83837 17.3876 9.40928 17 12 17C14.5907 17 17.1616 17.3876 19.0711 17.7695C19.8254 17.9203 20.4812 18.0713 21 18.1991V5.80098Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
