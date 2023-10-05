import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-saving-pot')
export default class SavingPot extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8780_6716)">
          <path
            d="M5.19783 22.5H10.8022L11.2466 20.5H13.7534L14.1978 22.5H19.8022L20.4341 19.6565C24.0847 16.5956 25.1245 11.2675 22.6603 6.99928C22.4344 6.60815 22.1872 6.23876 21.9204 5.89149C21.9728 5.60145 22 5.30321 22 4.99927C22 2.23784 19.7614 -0.000732422 17 -0.000732422C15.3588 -0.000732422 13.9034 0.790379 12.9927 2.00868C11.6486 2.0934 10.2922 2.41134 8.98813 2.96289L8.06712 3.35244L8.84621 5.19445L9.76722 4.80491C10.5261 4.48393 11.3018 4.25852 12.0761 4.12646C12.0261 4.41011 12 4.70181 12 4.99927C12 7.76069 14.2386 9.99927 17 9.99927C18.6122 9.99927 20.045 9.2366 20.959 8.05316C22.94 11.5453 22.0078 15.9082 18.9199 18.309L18.6356 18.53L18.1978 20.5H15.8022L15.3577 18.5H9.64227L9.19783 20.5H6.80217L6.13342 17.4906L5.63197 17.2982C4.56752 16.8898 3.0689 16.0274 2 15.0689V10.4998L3.06619 10.4997L5.1127 7.08917L4.44457 5.41869C5.25089 5.52339 6.1802 5.91995 7.04631 6.87255L7.71902 7.61245L9.19882 6.26702L8.52611 5.52711C6.63283 3.44476 4.35664 3.15756 2.7735 3.52571L1.63894 3.78955L2.8873 6.91077L1.93381 8.49978L0 8.49996V15.9157L0.294702 16.2089C1.44434 17.3527 3.09003 18.3688 4.4102 18.9556L5.19783 22.5ZM5.5 11.4993H7.50391V9.49536H5.5V11.4993ZM17 7.99927C15.3431 7.99927 14 6.65612 14 4.99927C14 4.44743 14.1481 3.93323 14.406 3.49092C14.9275 2.59661 15.8946 1.99927 17 1.99927C18.6569 1.99927 20 3.34241 20 4.99927C20 5.29815 19.9566 5.58514 19.8764 5.85517C19.5079 7.09596 18.3582 7.99927 17 7.99927Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
