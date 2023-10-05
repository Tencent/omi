import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-ferris-wheel')
export default class FerrisWheel extends WeElement<IconProps> {
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
          d="M12.9993 1L12.9997 3.06187C13.7363 3.1537 14.4418 3.34567 15.1021 3.62372L16.1328 1.83856L17.8648 2.83856L16.8335 4.62481C17.4138 5.06549 17.9322 5.5836 18.3731 6.16374L20.1583 5.13305L21.1583 6.8651L19.3749 7.89475C19.6536 8.5559 19.846 9.26236 19.938 10H21.9995V12H19.938C19.8461 12.7372 19.6538 13.4432 19.3754 14.1038L21.1579 15.1329L20.1579 16.865L18.3739 15.835C17.7311 16.681 16.9238 17.3951 16.0001 17.9294V21.0002H18.9995V23.0002H4.99952V21.0002H8.00009L8.00009 17.9296C7.07564 17.3949 6.26781 16.6803 5.62471 15.8334L3.83777 16.8651L2.83777 15.133L4.62359 14.102C4.34562 13.4419 4.15365 12.7366 4.06179 12.0001L2.00018 12.0003L2 10.0003L4.06177 10.0001C4.15366 9.26308 4.34581 8.55721 4.62413 7.89655L2.83743 6.865L3.83743 5.13295L5.62551 6.1653C6.06626 5.58509 6.58441 5.06689 7.16457 4.62609L6.13275 2.83893L7.86481 1.83893L8.89573 3.62454C9.55651 3.34609 10.2625 3.15385 10.9997 3.06191L10.9993 1.00036L12.9993 1ZM10.0001 18.7478V21.0002H14.0001V18.7477C13.3602 18.9124 12.6898 19 11.9999 19C11.3101 19 10.6398 18.9125 10.0001 18.7478ZM15.4387 15.9176C16.1011 15.4535 16.6651 14.8593 17.0938 14.1722L17.2993 13.8163C17.7466 12.9763 17.9999 12.0175 17.9999 11C17.9999 9.96622 17.7384 8.9935 17.2781 8.14437L17.1176 7.86643C16.608 7.036 15.902 6.33911 15.0643 5.84047L14.9263 5.76081C14.0606 5.27623 13.0625 5 11.9999 5C8.68617 5 5.99988 7.68629 5.99988 11C5.99988 13.0334 7.01134 14.832 8.56129 15.9178L11.9993 8.66635L15.4387 15.9176ZM10.3679 16.7757C10.8862 16.9217 11.4334 17 11.9999 17C12.5665 17 13.1138 16.9217 13.6321 16.7756L11.9997 13.334L10.3679 16.7757Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
