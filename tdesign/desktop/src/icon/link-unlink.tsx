import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-link-unlink')
export default class LinkUnlink extends WeElement<IconProps> {
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
          d="M4.30371 2.88999L7.83924 6.42552L6.42503 7.83973L2.8895 4.3042L4.30371 2.88999ZM10.2529 1.18115L10.2529 5.68115L8.25293 5.68115L8.25293 1.18115L10.2529 1.18115ZM1.34668 8.08936L5.84668 8.08936L5.84668 10.0894L1.34668 10.0894L1.34668 8.08936ZM14.8289 5.63462L11.7849 8.67864L10.3707 7.26443L13.4147 4.2204C15.1721 2.46304 18.0213 2.46304 19.7787 4.2204C21.536 5.97776 21.536 8.82701 19.7787 10.5844L16.7346 13.6284L15.3204 12.2142L18.3644 9.17015C19.3408 8.19384 19.3408 6.61093 18.3644 5.63462C17.3881 4.65831 15.8052 4.65831 14.8289 5.63462ZM5.63652 14.827C4.66021 15.8033 4.66021 17.3862 5.63652 18.3625C6.61283 19.3389 8.19575 19.3389 9.17206 18.3625L12.2161 15.3185L13.6303 16.7327L10.5863 19.7768C8.82891 21.5341 5.97967 21.5341 4.22231 19.7768C2.46495 18.0194 2.46495 15.1702 4.22231 13.4128L7.26634 10.3688L8.68055 11.783L5.63652 14.827ZM18.3154 13.7456L22.8154 13.7456V15.7456H18.3154V13.7456ZM15.9092 18.1519V22.6519H13.9092L13.9092 18.1519H15.9092ZM17.573 16.1593L21.1086 19.6948L19.6943 21.109L16.1588 17.5735L17.573 16.1593Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
