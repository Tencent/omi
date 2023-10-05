import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-pea')
export default class Pea extends WeElement<IconProps> {
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
        <g id="&amp;#232;&amp;#177;&amp;#140;&amp;#232;&amp;#177;&amp;#134;_pea">
          <path
            id="Union"
            d="M22.8741 3.00781L23.5355 4.84438L20.9999 6.45228V7.99987C20.9999 11.1459 20.4592 13.8298 19.201 15.9541C17.9268 18.1054 15.9693 19.5937 13.3229 20.4198C12.4101 20.7048 10.9 20.982 9.89117 20.9984C6.31921 21.0564 3.29501 19.4502 1.74315 17.6535L0.985352 16.7762L1.96438 16.1554L6.40425 13.3398C6.3927 13.3346 6.38117 13.3293 6.36966 13.324C5.48554 12.9171 4.61207 12.3218 3.84186 11.6379C3.07165 10.9541 2.37713 10.1573 1.86837 9.32754C1.3678 8.51116 0.999926 7.58535 0.999926 6.66295V5.78176L22.8741 3.00781ZM8.68086 11.8961L13.0015 9.15623L13.843 8.61886L13.8447 8.62149L18.679 5.55582L3.18767 7.52034C3.27972 7.75576 3.40716 8.01101 3.57338 8.28209C3.9629 8.91736 4.52131 9.56666 5.16972 10.1423C5.81813 10.718 6.52898 11.1957 7.20589 11.5072C7.79066 11.7764 8.29223 11.8954 8.68086 11.8961ZM13.2321 11.3782L10.4032 13.1722L11.8601 15.3377L10.2008 16.4541L8.71354 14.2436L4.12018 17.1565C5.43722 18.1825 7.4778 19.0373 9.85868 18.9987C10.6452 18.9859 11.9643 18.7487 12.7269 18.5107C14.9556 17.815 16.4856 16.6141 17.4801 14.9349C18.4907 13.2288 18.9999 10.9409 18.9999 7.99987V7.72057L14.9211 10.3072L16.3716 12.5787L14.6859 13.6551L13.2321 11.3782Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
