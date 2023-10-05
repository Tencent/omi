import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-shutter')
export default class Shutter extends WeElement<IconProps> {
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
          d="M5.28825 6.00379L7.50404 9.96057L11.4282 3.01786C8.992 3.1705 6.81874 4.2918 5.28825 6.00379ZM13.6504 3.15083L11.4748 7L19.4846 7C18.161 5.02284 16.0753 3.60009 13.6504 3.15083ZM20.4882 9L15.9598 9L19.9852 16.1562C20.6336 14.9133 21 13.5002 21 12C21 10.9467 20.8195 9.93733 20.4882 9ZM18.7202 17.9867L16.5 14.0397L12.5958 20.9806C15.0267 20.8219 17.1943 19.6985 18.7202 17.9867ZM10.3726 20.8534L12.5402 17L4.51536 17C5.84314 18.9834 7.93787 20.4089 10.3726 20.8534ZM3.51183 15L8.04015 15L6.62749 12.4886L4.0204 7.83308C3.36851 9.07861 3 10.4955 3 12C3 13.0533 3.18054 14.0627 3.51183 15ZM10.3348 15L13.6652 15L15.3527 12L13.6652 9L10.3443 9L8.64801 12.0012L10.3348 15ZM3.28888 5.28233C5.29881 2.67945 8.4535 1 12 1C12.4147 1 12.8244 1.02299 13.2278 1.06784C17.2082 1.51035 20.5439 4.07405 22.0843 7.59963C22.6736 8.94843 23 10.4374 23 12C23 14.5224 22.1498 16.8491 20.7208 18.7051C18.7113 21.3151 15.5522 23 12 23C11.5949 23 11.1946 22.9781 10.8002 22.9352C6.80747 22.5017 3.45973 19.9342 1.91573 16.4004C1.32642 15.0516 1 13.5626 1 12C1 9.47188 1.85408 7.14041 3.28888 5.28233Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
