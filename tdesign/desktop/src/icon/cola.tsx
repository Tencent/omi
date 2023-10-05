import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-cola')
export default class Cola extends WeElement<IconProps> {
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
        <g id="&amp;#229;&amp;#143;&amp;#175;&amp;#228;&amp;#185;&amp;#144;_cola" clip-path="url(#clip0_8726_9398)">
          <path
            id="Union"
            d="M17.3068 0.892578L23.1075 6.69331L21.903 11.5113L18.7295 14.6848C18.5966 14.8344 18.4397 14.9924 18.2592 15.1551L11.5113 21.903L6.69329 23.1075L0.892578 17.3068L2.09706 12.4888L12.4888 2.09711L17.3068 0.892578ZM16.8807 13.7051L19.5858 11.0001L18.0562 9.47045C15.951 11.7693 12.1533 14.6621 6.42274 15.0085L7.46405 16.0499C12.3764 16.6092 15.6007 14.837 16.8807 13.7051ZM9.56842 18.1542L11 19.5859L12.8046 17.7813C11.8268 17.9987 10.7462 18.1363 9.56842 18.1542ZM9.04405 20.4583L3.54181 14.956L3.1075 16.6933L7.30679 20.8926L9.04405 20.4583ZM4.43747 13.0233C10.6351 13.3114 14.5825 10.3319 16.6407 8.05497L13 4.41428L4.41424 13.0001L4.43747 13.0233ZM14.956 3.54184L20.4583 9.04407L20.8926 7.30681L16.6933 3.10751L14.956 3.54184Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
