import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-wifi-off')
export default class WifiOff extends WeElement<IconProps> {
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
          d="M3.00015 1.58569L22.4144 20.9999L21.0002 22.4141L13.6961 15.11L11.1415 12.5557C9.77376 12.7365 8.45419 13.3519 7.40306 14.403L6.69595 15.1101L5.28174 13.6959L5.98884 12.9888C6.99668 11.981 8.19571 11.2789 9.46903 10.883L9.09987 10.5138L6.03152 7.4457C4.8712 8.04543 3.78158 8.83212 2.80687 9.80684L2.09976 10.5139L0.685547 9.09973L1.39265 8.39262C2.35857 7.4267 3.42447 6.6194 4.55742 5.97139L1.58594 2.99991L3.00015 1.58569ZM21.1922 9.80751C18.2104 6.82575 14.1414 5.59459 10.2583 6.11633L9.26722 6.2495L9.00089 4.26731L9.99198 4.13415C14.4665 3.53293 19.165 4.95189 22.6064 8.39329L23.3135 9.1004L21.8993 10.5146L21.1922 9.80751ZM10.586 17.5857C11.3671 16.8046 12.6334 16.8047 13.4144 17.5857L14.1215 18.2928L12.0002 20.4141L9.87891 18.2928L10.586 17.5857Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
