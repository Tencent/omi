import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-fill-color')
export default class FillColor extends WeElement<IconProps> {
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
          d="M9.52521 0.625977L10.2323 1.33308L12.7072 3.80796L21.1925 12.2932L21.8996 13.0003L21.1925 13.7075L12.7072 22.1927L12.0001 22.8998L11.293 22.1927L2.80769 13.7075L2.10059 13.0003L2.80769 12.2932L10.5859 4.51506L8.8181 2.7473L8.11099 2.04019L9.52521 0.625977ZM5.92921 12.0002H5.99982H18.071L12.0001 5.92928L5.92921 12.0002ZM18.0713 14.0002H5.99982H5.92882L12.0001 20.0714L18.0713 14.0002ZM20.7498 17.3891L21.5338 18.3794L22.0642 19.0493C22.645 19.7829 22.645 20.8968 22.0642 21.6304C21.7495 22.0279 21.2803 22.2872 20.7498 22.2872C20.2193 22.2872 19.7501 22.0279 19.4355 21.6304C18.8546 20.8968 18.8546 19.7829 19.4355 19.0493L19.9658 18.3794L20.7498 17.3891Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
