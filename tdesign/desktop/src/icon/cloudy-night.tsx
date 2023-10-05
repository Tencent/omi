import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-cloudy-night')
export default class CloudyNight extends WeElement<IconProps> {
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
          d="M17.1333 0.920898L17.031 2.1055C17.0198 2.23508 17.0141 2.36645 17.0141 2.49939C17.0141 4.98797 19.0315 7.00536 21.5201 7.00536C21.653 7.00536 21.7844 6.99963 21.914 6.98845L23.0986 6.88616L22.9963 8.07076C22.8488 9.7793 22.0419 11.2971 20.8336 12.3704C21.5729 13.2765 22.0195 14.4252 22.0195 15.6805C22.0195 18.6638 19.519 21.0185 16.5147 21.0185H6.60391C4.09715 21.0185 2 19.0522 2 16.5481C2 14.7164 3.12578 13.1695 4.70861 12.4734C4.70484 12.386 4.70293 12.2982 4.70293 12.21C4.70293 9.06341 7.1015 6.51059 10.1673 6.07126C10.7803 3.34598 13.1017 1.26901 15.9487 1.02318L17.1333 0.920898ZM12.232 6.09959C12.3886 6.12645 12.5433 6.15884 12.696 6.19655C14.8456 6.7276 16.5794 8.31838 17.2339 10.3877C17.9571 10.4793 18.638 10.7073 19.247 11.0454C19.2577 11.0514 19.2685 11.0574 19.2792 11.0634C19.9657 10.5293 20.4928 9.80169 20.7794 8.96367C17.7781 8.62355 15.3959 6.24138 15.0558 3.24009C13.7232 3.69591 12.6715 4.75949 12.232 6.09959ZM11.1088 8.00437C11.0874 8.00437 11.066 8.00452 11.0446 8.00481C8.60588 8.0379 6.70293 9.94228 6.70293 12.21C6.70293 12.4726 6.72801 12.7286 6.77576 12.9765L6.95986 13.9319L6.00979 14.1421C4.83284 14.4024 4 15.4033 4 16.5481C4 17.8772 5.1299 19.0185 6.60391 19.0185H16.5147C18.4863 19.0185 20.0195 17.4888 20.0195 15.6805C20.0195 14.628 19.5078 13.6794 18.6867 13.0607C18.557 12.963 18.4199 12.8738 18.2761 12.794C17.7608 12.5078 17.1602 12.3424 16.5147 12.3424C16.4949 12.3424 16.4753 12.3426 16.4557 12.3429L15.6014 12.3562L15.4548 11.5145C15.1722 9.89101 13.9017 8.55454 12.2163 8.13818C11.8636 8.05104 11.4927 8.00437 11.1088 8.00437Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
