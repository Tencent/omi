import { tag, Component, classNames, bind, createRef, VNode } from 'omi'
import { tailwind } from '@/tailwind'
import InputTheme from './inputTheme'

type Props = {
  size: string
  value: string
  defaultValue: string
  id: string
  wrapperTag: string
  label: string
  onChange: (evt: Event) => void
  children: VNode[]
  labelRef: (el: HTMLElement) => void
  type: string
  onBlur: (evt: FocusEvent) => void
  readonly: boolean
  formWhite: boolean
  counter: boolean
  maxLength: number
  customTheme: Record<string, string>
  newValue: string
}

@tag('o-input')
export class Input extends Component<Props> {
  static css = [
    tailwind,
    `:host {
  display: block;
}`,
  ]

  // value: ,
  // defaultValue,
  // id,

  // label,
  // onChange,
  // children,
  // labelRef,
  // type,
  // onBlur,
  // maxLength,
  // theme: customTheme,
  static defaultProps = {
    size: 'base',
    wrapperTag: 'div',
    readonly: false,
    formWhite: false,
    counter: false,
  }

  state = {
    active: false,
    focus: false,
    value: '',
    labelWidth: 100,
  }

  install() {
    this.state.value = this.props.value || this.props.defaultValue
    if (this.state.value) {
      this.state.active = true
    }
  }

  labelReference = createRef()

  @bind
  onFocus() {
    this.state.focus = true
    this.state.labelWidth = (this.labelReference.current as HTMLElement).clientWidth * 0.8 + 8
    this.update()
  }

  @bind
  handleChange(evt: Event) {
    this.state.value = (evt.target as HTMLInputElement).value
    this.update()
  }

  @bind
  onBlur(evt: Event) {
    this.state.value = (evt.target as HTMLInputElement).value
    if ((evt.target as HTMLInputElement).value) {
      this.state.active = true
    } else {
      this.state.active = false
    }
    this.state.focus = false
    this.update()
  }

  render(props: Props) {
    const theme = { ...InputTheme, ...props.customTheme }
    const {
      size,
      value,
      defaultValue,
      id,
      wrapperTag,
      label,
      onChange,
      children,
      labelRef,
      type,
      onBlur,
      readonly,
      formWhite,
      counter,
      maxLength,

      newValue,
    } = props

    const inputClasses = classNames(
      theme.input,
      this.state.active && theme.activeInput,
      size === 'lg'
        ? theme.inputSizeLg
        : size === 'base'
        ? theme.inputSizeBase
        : size === 'sm'
        ? theme.inputSizeSm
        : theme.inputSizeBase,
    )

    const labelClasses = classNames(
      theme.label,
      this.state.active && theme.activeLabel,
      this.state.active &&
        (size === 'lg'
          ? theme.activeLabelSizeLg
          : size === 'base'
          ? theme.activeLabelSizeBase
          : size === 'sm'
          ? theme.activeLabelSizeSm
          : theme.activeLabelSizeBase),
      size === 'lg'
        ? theme.labelSizeLg
        : size === 'base'
        ? theme.labelSizeBase
        : size === 'sm'
        ? theme.labelSizeSm
        : theme.labelSizeBase,
    )

    const notchLeadingClasses = classNames(
      theme.notchLeading,
      formWhite ? theme.notchLeadingWhite : theme.notchLeadingDefault,
      this.state.active && theme.activeNotchLeading,
      this.state.focus && theme.focusedNotchLeading,
      this.state.focus && (formWhite ? theme.focusedNotchLeadingWhite : theme.focusedNotchLeadingDefault),
    )

    const notchMiddleClasses = classNames(
      theme.notchMiddle,
      formWhite ? theme.notchMiddleWhite : theme.notchMiddleDefault,
      this.state.active && theme.activeNotchMiddle,
      this.state.focus && theme.focusedNotchMiddle,
      this.state.focus && (formWhite ? theme.focusedNotchMiddleWhite : theme.focusedNotchMiddleDefault),
    )

    const notchTrailingClasses = classNames(
      theme.notchTrailing,
      formWhite ? theme.notchTrailingWhite : theme.notchTrailingDefault,
      this.state.active && theme.activeNotchTrailing,
      this.state.focus && theme.focusedNotchTrailing,
      this.state.focus && (formWhite ? theme.focusedNotchTrailingWhite : theme.focusedNotchTrailingDefault),
    )

    return (
      <props.wrapperTag>
        <props.wrapperTag class={theme.wrapper}>
          <input
            type={type}
            readOnly={readonly}
            class={inputClasses}
            onBlur={this.onBlur}
            onInput={this.handleChange}
            onFocus={this.onFocus}
            value={this.state.value}
            defaultValue={defaultValue}
            id={id}
            // ref={innerRef}
            maxLength={maxLength}
          />
          {label && (
            <label class={labelClasses} htmlFor={id} ref={this.labelReference}>
              {label}
            </label>
          )}

          <div class={theme.notch}>
            <div class={notchLeadingClasses}></div>
            <div class={notchMiddleClasses} style={{ width: this.state.labelWidth }}></div>
            <div class={notchTrailingClasses}></div>
          </div>
          {children}
        </props.wrapperTag>
        {counter && maxLength !== undefined && maxLength > 0 && (
          <div class={theme.counter}>
            <span>
              {this.state.value?.toString().length || 0} / {maxLength}
            </span>
          </div>
        )}
      </props.wrapperTag>
    )
  }
}
