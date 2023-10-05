import { h, WeElement, tag, classNames, OmiProps, createRef } from 'omi'
import { RadioGroupProps, RadioProps } from './type'
import Radio from './radio'
import css from './style'
import { TdClassNamePefix } from '../utils'

@tag('t-radio-group')
export default class RadioGroup extends WeElement<RadioGroupProps> {
  static css = css

  static defaultProps = {
    allowUncheck: false,
    size: 'medium',
    variant: 'outline',
  }
  static propType = {
    allowUncheck: Boolean,
    disabled: Boolean,
    name: String,
    value: [String, Number, Boolean],
    defaultValue: [String, Number, Boolean],
    onchange: Function,
  }

  render(props: OmiProps<RadioGroupProps, any>, store: any): void {
    const classPerfix = 't'
    const barstyle = []
    let radioGroupRef: { current: { offsetWidth: any } }
    // useKeyboard(radioGroupRef, setInternalValue);
    const internalValue = ''

    // const context :checkContextValue= {
    //     inject: (RadioProps) => {
    //         // 如果已经受控，则不注入
    //         if (typeof RadioProps.checked !== 'undefined') {
    //             return RadioProps;
    //         }

    //         const { value: checkValue } = RadioProps;

    //         return {
    //             ...RadioProps,
    //             name: props.name,
    //             // 有一个允许取消，就可以取消选中
    //             allowUncheck: RadioProps.allowUncheck || props.allowUncheck,
    //             checked: internalValue === RadioProps.value,
    //             disabled: RadioProps.disabled || RadioProps.disabled,
    //             onChange(checked, { e }) {
    //                 if (typeof RadioProps.onChange === 'function') {
    //                     RadioProps.onChange(checked, { e });
    //                 }
    //                 setInternalValue(checked ? checkValue : undefined, { e });
    //             },
    //         };
    //     },
    // }

    const checkedRadioCls = `.${classPerfix}-radio-button.${classPerfix}-is-checked`
    const calcBarStyle = () => {
      if (!props.variant.includes('default-filled')) return
      const checkedRadio = radioGroupRef.current.offsetWidth?.(checkedRadioCls) as HTMLElement
      if (!checkedRadio) return barstyle.push({ width: 0 })
      const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = checkedRadio
      barstyle.push({
        width: `${offsetWidth}px`,
        height: `${offsetHeight}px`,
        left: `${offsetLeft}px`,
        top: `${offsetTop}px`,
      })
    }

    const SIZE = {
      default: String,
      xs: String,
      small: String,
      medium: String,
      large: String,
      xl: String,
      block: String,
    }
    const radioGroupClass = classNames(TdClassNamePefix('radio-group'))
  }
}
