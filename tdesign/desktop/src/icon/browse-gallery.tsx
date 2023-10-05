import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-browse-gallery')
export default class BrowseGallery extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_7215)">
          <path
            d="M19.41 1.58618L20.1024 2.3077C22.5154 4.82222 24 8.23883 24 12.0001C24 15.7614 22.5154 19.178 20.1024 21.6925L19.41 22.414L17.9669 21.0292L18.6593 20.3077C20.7294 18.1506 22 15.2248 22 12.0001C22 8.77539 20.7294 5.84955 18.6593 3.6925L17.9669 2.97098L19.41 1.58618ZM10 4.0001C5.58172 4.0001 2 7.58182 2 12.0001C2 16.4184 5.58172 20.0001 10 20.0001C14.4183 20.0001 18 16.4184 18 12.0001C18 7.58182 14.4183 4.0001 10 4.0001ZM0 12.0001C0 6.47725 4.47715 2.0001 10 2.0001C15.5228 2.0001 20 6.47725 20 12.0001C20 17.5229 15.5228 22.0001 10 22.0001C4.47715 22.0001 0 17.5229 0 12.0001ZM11 6.5001V11.5859L14.4142 15.0001L13 16.4143L9 12.4143V6.5001H11Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
