import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-cherry')
export default class Cherry extends WeElement<IconProps> {
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
        <g id="&amp;#230;&amp;#168;&amp;#177;&amp;#230;&amp;#161;&amp;#131;_cherry" clip-path="url(#clip0_8726_9446)">
          <path
            id="Union"
            d="M16.9997 0.585938L23.4139 7.00015L21.9997 8.41436L20.0558 6.47045C19.4109 7.26976 18.5565 8.44755 17.7951 9.81267C16.7659 11.658 15.9772 13.7209 15.9872 15.6006C17.4586 17.3736 17.3652 20.049 15.7068 21.7073C13.9495 23.4646 11.05 23.4646 9.29263 21.7073C7.53527 19.9499 7.53527 17.0504 9.29263 15.293C10.5761 14.0096 12.4688 13.6635 14.0808 14.2547C14.3505 12.3162 15.1661 10.4204 16.0484 8.83845C16.6052 7.84012 17.2072 6.93421 17.7588 6.17956C17.1352 6.25648 16.4194 6.36594 15.6584 6.52149C13.4862 6.96552 11.0856 7.75793 9.36203 9.12517C10.427 10.8696 10.2086 13.2055 8.70684 14.7073C6.94948 16.4646 4.04999 16.4646 2.29263 14.7073C0.535269 12.9499 0.53527 10.0504 2.29263 8.29304C3.81825 6.76743 6.20462 6.56625 7.95726 7.6895C10.0807 5.9338 12.9453 5.03472 15.2579 4.56201C16.1759 4.37437 17.03 4.24944 17.7516 4.16625L15.5855 2.00015L16.9997 0.585938ZM7.29263 9.70726C6.31632 8.73095 4.68315 8.73095 3.70684 9.70726C2.73053 10.6836 2.73053 12.3167 3.70684 13.293C4.68315 14.2694 6.31632 14.2694 7.29263 13.293C8.26894 12.3167 8.26894 10.6836 7.29263 9.70726ZM14.2926 16.7073C13.3163 15.7309 11.6832 15.7309 10.7068 16.7073C9.73053 17.6836 9.73053 19.3168 10.7068 20.2931C11.6832 21.2694 13.3163 21.2694 14.2926 20.2931C15.2689 19.3168 15.2689 17.6836 14.2926 16.7073Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
