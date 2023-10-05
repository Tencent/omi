import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chart-ring-1')
export default class ChartRing1 extends WeElement<IconProps> {
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
          d="M11.1739 2.98325L10.1943 3.18391C5.32482 4.1813 2.18588 8.93733 3.18327 13.8068C4.18066 18.6763 8.93669 21.8152 13.8062 20.8178C17.5229 20.0565 20.2336 17.1047 20.8631 13.5811L21.039 12.5967L23.0078 12.9484L22.8319 13.9329C22.0633 18.2353 18.7535 21.846 14.2075 22.7771C8.2559 23.9962 2.44298 20.1597 1.22395 14.2081C0.00491744 8.25654 3.8414 2.44362 9.79297 1.22459L10.7726 1.02393L11.1739 2.98325ZM13.3095 1.03036L14.2876 1.23872C18.4319 2.12158 21.8711 5.37312 22.7765 9.7936L22.9772 10.7733L21.0178 11.1746L20.8172 10.1949C20.0769 6.58093 17.2658 3.91803 13.8709 3.19483L12.8928 2.98647L13.3095 1.03036ZM15.9196 11.1977C15.4763 9.03354 13.3625 7.63845 11.1983 8.08174C9.03412 8.52502 7.63903 10.6388 8.08232 12.803C8.5256 14.9672 10.6394 16.3623 12.8036 15.919C14.9678 15.4757 16.3629 13.3619 15.9196 11.1977ZM10.797 6.12241C14.0433 5.45749 17.214 7.55011 17.8789 10.7964C18.5439 14.0427 16.4512 17.2134 13.2049 17.8783C9.95861 18.5433 6.78792 16.4506 6.123 13.2043C5.45807 9.95803 7.55069 6.78734 10.797 6.12241Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
