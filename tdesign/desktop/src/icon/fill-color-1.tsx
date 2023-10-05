import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-fill-color-1')
export default class FillColor1 extends WeElement<IconProps> {
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
          d="M12 0.0524902L23.9478 12.0003L22 13.9482V13.9999H21.9482L14.8284 21.1197C13.2663 22.6818 10.7336 22.6818 9.17154 21.1197L2.88056 14.8288C1.31846 13.2667 1.31846 10.734 2.88056 9.1719L7.31915 4.73331L4.58575 1.99991L5.99996 0.585693L8.73336 3.31909L12 0.0524902ZM8.73336 6.14752L4.29477 10.5861C3.90435 10.9765 3.70909 11.4882 3.70898 11.9999H21.119L12 2.88092L10.1476 4.73331L13.4142 7.99991L12 9.41412L8.73336 6.14752ZM4.88014 13.9999L10.5858 19.7055C11.3668 20.4866 12.6331 20.4866 13.4142 19.7055L19.1198 13.9999H4.88014ZM21.75 18.3889L23.0643 20.049C23.6452 20.7827 23.6452 21.8965 23.0643 22.6302C22.7497 23.0276 22.2804 23.2869 21.75 23.2869C21.2195 23.2869 20.7503 23.0276 20.4356 22.6302C19.8548 21.8965 19.8548 20.7827 20.4356 20.049L21.75 18.3889Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
