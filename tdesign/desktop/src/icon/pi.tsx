import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-pi')
export default class Pi extends WeElement<IconProps> {
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
          d="M3.16097 3L21.419 3V5L15.8094 5C15.6074 7.20472 15.4367 10.1368 15.3947 12.7413C15.3707 14.2305 15.3892 15.5919 15.4648 16.6404C15.5028 17.1665 15.5536 17.5914 15.6145 17.9046C15.67 18.1893 15.7174 18.2882 15.7143 18.2898C15.7142 18.2899 15.7145 18.2899 15.7143 18.2898C16.3548 19.0997 18.259 19.6002 20.2978 17.5913L21.0101 16.8894L22.4139 18.314L21.7015 19.0159C19.1116 21.568 15.7128 21.5909 14.1072 19.4814C13.8445 19.1364 13.724 18.6596 13.6514 18.2869C13.5688 17.8626 13.5107 17.3488 13.47 16.7842C13.3883 15.6514 13.3706 14.2237 13.395 12.7091C13.4365 10.1278 13.6018 7.23447 13.8013 5L10.3351 5C10.1721 7.46269 9.71983 10.6919 8.81579 13.5424C8.30264 15.1605 7.6277 16.7092 6.73932 17.9328C5.8502 19.1574 4.68726 20.1345 3.19303 20.429L2.2119 20.6224L1.8252 18.6601L2.80632 18.4668C3.63467 18.3035 4.40722 17.7407 5.12092 16.7577C5.83536 15.7737 6.43059 14.4475 6.90937 12.9378C7.73675 10.329 8.16793 7.32969 8.33051 5L3.16097 5L3.16097 3ZM15.7143 18.2898C15.7091 18.2833 15.7036 18.2766 15.6986 18.2701C15.7074 18.2816 15.7127 18.2887 15.7143 18.2898Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
