import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-up-2')
export default class GestureUp2 extends WeElement<IconProps> {
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
          d="M18.5976 5.20031C14.2885 1.96104 8.14187 2.30235 4.21995 6.22427L3.51285 6.93137L2.09863 5.51716L2.80574 4.81005C7.34668 0.269114 14.4112 -0.210198 19.4849 3.37211L19.4861 1.49996L21.4861 1.50132L21.4834 7.20031H16.4981V5.20031H18.5976ZM9.24379 7.56574C9.24379 6.04382 10.4775 4.81006 11.9995 4.81006C13.5214 4.81006 14.7551 6.04382 14.7551 7.56573V10.5195H15.9135C16.4018 10.5195 16.8814 10.6492 17.3032 10.8954L20.9278 13.0111C22.0543 13.6687 22.5658 15.0257 22.1536 16.2632L20.3712 21.6138C19.9961 22.7397 18.9425 23.4992 17.7557 23.4992H10.6702C9.81405 23.4992 9.00647 23.1014 8.48465 22.4227L4.18633 16.8314L5.12745 15.4189C5.55772 14.7731 6.34084 14.4583 7.09836 14.6268L9.24379 15.1038V7.56574ZM11.9995 6.81006C11.5821 6.81006 11.2438 7.14839 11.2438 7.56574V17.5974L6.74563 16.5972L6.64503 16.7482L10.0703 21.2037C10.2135 21.39 10.4352 21.4992 10.6702 21.4992H17.7557C18.0815 21.4992 18.3707 21.2908 18.4737 20.9817L20.2561 15.6311C20.3693 15.2914 20.2289 14.9189 19.9196 14.7384L16.2949 12.6227C16.1792 12.5551 16.0475 12.5195 15.9135 12.5195H12.7551V7.56573C12.7551 7.14839 12.4168 6.81006 11.9995 6.81006Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
