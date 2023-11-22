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
  children: VNode[]
  labelRef: (el: HTMLElement) => void
  type: string
  readonly: boolean
  formWhite: boolean
  counter: boolean
  maxLength: number
  customTheme: Record<string, string>
  newValue: string
  disabled: boolean
  tag: string
  rows: number
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
  // maxLength,
  // theme: customTheme,
  static defaultProps = {
    size: 'base',
    wrapperTag: 'div',
    readonly: false,
    formWhite: false,
    counter: false,
    disabled: false,
    tag: 'input',
    rows: 1,
  }

  state = {
    active: false,
    focus: false,
    value: '',
    tags: [],
    labelWidth: 100,
  }

  install() {
    this.state.value = this.props.value || this.props.defaultValue
    this.state.tags = this.props.tags
    if (this.state.value || this.state.tags?.length) {
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
    this.fire('change', this.state.value)
    this.update()
  }

  @bind
  removeTag(tag) {
    this.state.tags.splice(this.state.tags.indexOf(tag), 1)
    this.update()
    this.fire('change')
    this.inputRef.focus()
  }

  @bind
  onBlur(evt: Event) {
    this.state.value = (evt.target as HTMLInputElement).value.trim()
    if (this.state.tags && this.state.value) {
      this.state.tags.push({ label: this.state.value })
      this.state.value = ''
      this.fire('change')
    }
    if ((evt.target as HTMLInputElement).value || this.state.tags?.length) {
      this.state.active = true
    } else {
      this.state.active = false
    }
    this.state.focus = false
    // 防止触发两次
    evt.stopPropagation()
    this.fire('blur', this.state.value)
    this.update()
  }

  @bind
  onKeyUp(evt) {
    // enter
    if (evt.keyCode === 13) {
      this.state.tags.push({ label: this.state.value })
      this.state.value = ''
      this.fire('change')
      this.update()
    }
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
      children,
      labelRef,
      type,
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
        <props.wrapperTag
          class={classNames(theme.wrapper, {
            [theme.tagWrapper]: this.state.tags,
          })}
        >
          {this.state.tags &&
            this.state.tags.map((tag, index) => {
              return (
                <div class="flex justify-between items-center h-[32px] leading-loose py-[5px] px-[12px] mr-2 my-[5px] text-[13px] font-normal text-[#4f4f4f] cursor-pointer bg-[#eceff1] dark:text-white dark:bg-neutral-600 rounded-[16px] transition-[opacity] duration-300 ease-linear [word-wrap: break-word] shadow-none normal-case hover:!shadow-none active:bg-[#cacfd1] inline-block font-medium leading-normal text-[#4f4f4f] text-center no-underline align-middle cursor-pointer select-none border-[.125rem] border-solid border-transparent py-1.5 px-3 text-xs rounded">
                  <span>{tag.label}</span>
                  <span
                    onClick={(e) => this.removeTag(tag)}
                    class="w-4 float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:fill-[#8b8b8b] dark:fill-gray-400 dark:hover:fill-gray-100 transition-all duration-200 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-3 h-3"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </span>
                </div>
              )
            })}
          <props.tag
            type={type}
            disabled={props.disabled}
            readOnly={readonly}
            class={classNames(inputClasses, {
              [theme.tagInput]: this.state.tags,
            })}
            onBlur={this.onBlur}
            onInput={this.handleChange}
            onFocus={this.onFocus}
            onKeyUp={this.onKeyUp}
            value={this.state.value}
            defaultValue={defaultValue}
            rows={props.rows}
            id={id}
            ref={(e) => (this.inputRef = e)}
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
