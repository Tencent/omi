import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-left-slip')
export default class GestureLeftSlip extends WeElement<IconProps> {
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
          d="M5.39914 5.20031C9.70827 1.96104 15.8549 2.30235 19.7768 6.22427L20.4839 6.93137L21.8981 5.51716L21.191 4.81005C16.6504 0.269448 9.5866 -0.210129 4.513 3.37132L4.5127 1.50027L2.5127 1.50059L2.51334 7.20031L7.49862 7.20031L7.49862 5.20031L5.39914 5.20031ZM9.24428 7.56574C9.24428 6.04382 10.478 4.81006 12 4.81006C13.5219 4.81006 14.7556 6.04382 14.7556 7.56573V10.5195H15.914C16.4023 10.5195 16.8819 10.6492 17.3036 10.8954L20.9283 13.0111C22.0548 13.6687 22.5663 15.0257 22.1541 16.2632L20.3717 21.6138C19.9966 22.7397 18.943 23.4992 17.7562 23.4992H10.6707C9.81455 23.4992 9.00697 23.1014 8.48515 22.4227L4.18683 16.8314L5.12794 15.4189C5.55822 14.7731 6.34134 14.4583 7.09886 14.6268L9.24428 15.1038V7.56574ZM12 6.81006C11.5826 6.81006 11.2443 7.14839 11.2443 7.56574V17.5974L6.74613 16.5972L6.64553 16.7482L10.0708 21.2037C10.214 21.39 10.4357 21.4992 10.6707 21.4992H17.7562C18.082 21.4992 18.3712 21.2908 18.4742 20.9817L20.2566 15.6311C20.3698 15.2914 20.2294 14.9189 19.9201 14.7384L16.2954 12.6227C16.1797 12.5551 16.048 12.5195 15.914 12.5195H12.7556V7.56573C12.7556 7.14839 12.4173 6.81006 12 6.81006Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
