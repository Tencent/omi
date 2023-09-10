import { h, OmiProps, tag, WeElement, render, classNames, createRef, extend, get, set } from 'omi'
import { TdInputProps } from './type'
import inputSyle from './style'
import { TdClassNamePrefix } from '../../src/utils'
import noop from '../utils/noop'
import { StyledProps, TNode, TElement } from '../common'
import useLengthLimit from './useLengthLimit'
import parseTNode from '../utils/parseTNode'
import '../icon/close-circle-filled'
import { create } from 'lodash'
const InputClassNamePrefix = (name: string) => TdClassNamePrefix('input') + name

export interface InputProps extends TdInputProps, StyledProps {
  showInput?: boolean // 控制透传readonly同时是否展示input 默认保留 因为正常Input需要撑开宽度
  keepWrapperWidth?: boolean // 控制透传autoWidth之后是否容器宽度也自适应 多选等组件需要用到自适应但也需要保留宽度
}

export interface InputRef {
  currentElement: HTMLDivElement
  inputElement: HTMLInputElement
  focus: () => void
  blur: () => void
  select: () => void
}

// type InputContextTrigger = 'input' | 'clear' | 'initial';

const renderIcon = (classPrefix: string, type: 'prefix' | 'suffix', icon: TNode | TElement) => {
  const result = parseTNode(icon)
  const iconClassName = icon ? `${classPrefix}-input__${type}-icon` : ''

  return result ? <span className={`${classPrefix}-input__${type} ${iconClassName}`}>{result}</span> : null
}

const isFunction = (arg: unknown) => typeof arg === 'function'

@tag('t-input')
export default class Input extends WeElement<InputProps> {
  static css = inputSyle

  static defaultProps = {
    align: 'left',
    allowInputOverMax: false,
    autoWidth: false,
    autocomplete: undefined,
    autofocus: false,
    clearable: false,
    placeholder: '请输入',
    readonly: false,
    showClearIconOnEmpty: false,
    showLimitNumber: false,
    size: 'medium',
    status: undefined,
    type: 'text',
    defaultValue: '',
  }

  static propTypes = {
    allowInputOverMax: Boolean,
    autoWidth: Boolean,
    autofocus: Boolean,
    clearable: Boolean,
    disabled: Boolean,

    align: String,
    autocomplete: String,
    value: String,
  }

  inputRef = createRef()
  inputPreRef = createRef()
  wrapperRef = createRef()
  composingRef = createRef()
  value
  composingValue = ''
  status = ''
  renderType = ''
  isFocused = false
  isHover = false
  eventPropsNames
  eventProps

  isKeyUpEvent = false

  installed() {
    let that = this
    this.value = this.props.defaultValue || this.props.value
    this.status = this.props.status
    this.renderType = this.props.type
    let inputNode = this.inputRef.current

    const updateInputWidth = () => {
      if (!this.props.autoWidth || !this.inputRef.current) return
      const { offsetWidth } = this.inputPreRef.current
      const { width } = this.inputPreRef.current.getBoundingClientRect()
      console.log(offsetWidth, width)
      // 异步渲染场景下 getBoundingClientRect 宽度为 0，需要使用 offsetWidth
      const calcWidth = width < offsetWidth ? offsetWidth + 1 : width
      this.inputRef.current.style.width = `${calcWidth}px`
    }
    if (that.props.autoWidth) {
      requestAnimationFrame(() => {
        updateInputWidth()
      })
    }
    inputNode.addEventListener('input', (e) => {
      if (that.composingRef.current) {
        return
      } else {
        that.value = inputNode.value
        // that.composingValue = inputNode.value
        const { limitNumber, getValueByLimitNumber, tStatus, onValidateChange } = useLengthLimit({
          value: that.value === undefined ? undefined : String(that.value),
          status: that.status,
          maxlength: that.props.maxlength,
          maxcharacter: that.props.maxcharacter,
          allowInputOverMax: that.props.allowInputOverMax,
          onValidate: that.props.onValidate,
        })
        const limitedValue = getValueByLimitNumber(e.currentTarget.value)
        that.value = limitedValue
        that.composingValue = limitedValue
        this.props.onChange?.(limitedValue)
        if (that.props.autoWidth) {
          requestAnimationFrame(() => {
            updateInputWidth()
          })
        }
        onValidateChange()
      }
    })
  }

  render(props: InputProps, store: any) {
    let that = this
    const {
      type,
      autoWidth,
      placeholder,
      disabled,
      status,
      size,
      className,
      inputClass,
      style,
      prefixIcon,
      suffixIcon,
      clearable,
      tips,
      align,
      maxlength,
      maxcharacter,
      showClearIconOnEmpty,
      autofocus,
      autocomplete,
      readonly,
      label,
      suffix,
      showInput = true,
      keepWrapperWidth,
      showLimitNumber,
      allowInputOverMax,
      name,
      format,
      onClick,
      onClear,
      onEnter,
      onKeydown,
      onKeyup,
      onKeypress,
      onFocus,
      onBlur,
      onPaste,
      onMouseenter,
      onMouseleave,
      onWheel,
      onCompositionstart,
      onCompositionend,
      onValidate,
      onChange,
      ...restProps
    } = props

    this.value = this.value==undefined ? this.props.defaultValue : this.value
    const { limitNumber, getValueByLimitNumber, tStatus, onValidateChange } = useLengthLimit({
      value: this.value === undefined ? undefined : String(this.value),
      status,
      maxlength,
      maxcharacter,
      allowInputOverMax,
      onValidate,
    })

    // if (this.value) {
    //   const limitedValue = getValueByLimitNumber(this.value);
    //   if (limitedValue.length !== this.value.length && !allowInputOverMax) {
    //     onChange?.(limitedValue);
    //   }
    // }

    const isShowClearIcon = ((clearable && this.value && !disabled) || showClearIconOnEmpty) && this.isHover
    const prefixIconContent = renderIcon('t', 'prefix', parseTNode(prefixIcon))
    let suffixIconNew = suffixIcon

    if (isShowClearIcon) {
      suffixIconNew = (
        <t-icon-close-circle-filled class={classNames(InputClassNamePrefix(`__suffix-clear`))} onClick={handleClear} />
      )
    }

    const suffixIconContent = renderIcon('t', 'suffix', parseTNode(suffixIconNew))
    const labelContent = isFunction(label) ? label() : label
    const suffixContent = isFunction(suffix) ? suffix() : suffix

    const limitNumberNode =
      limitNumber() && showLimitNumber ? (
        <div
          class={classNames(InputClassNamePrefix(`__limit-number`), {
            [TdClassNamePrefix(`is-disabled`)]: disabled,
          })}
        >
          {limitNumber()}
        </div>
      ) : null

    const curStatus = status || 'default'
    const innerValue = this.composingRef.current ? this.composingValue : this.value ?? ''

    const formatDisplayValue = format && !this.isFocused ? format(innerValue) : innerValue
    const renderInput = (
      <input
        // o-model="value"
        {...this.eventProps}
        ref={this.inputRef}
        placeholder={placeholder}
        type={this.renderType}
        class={InputClassNamePrefix('__inner')}
        value={formatDisplayValue}
        readOnly={readonly}
        disabled={disabled}
        autoComplete={autocomplete ?? (autocomplete || undefined)}
        autoFocus={autofocus}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onKeyPress={handleKeyPress}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // onPaste={handlePaste}
        // name={name}
      />
    )

    const renderInputNode = (
      <div
        class={classNames(TdClassNamePrefix('input'), {
          [TdClassNamePrefix(`is-readonly`)]: readonly,
          [TdClassNamePrefix(`is-disabled`)]: disabled,
          [TdClassNamePrefix(`is-focused`)]: this.isFocused,
          [TdClassNamePrefix(`size-s`)]: size === 'small',
          [TdClassNamePrefix(`size-l`)]: size === 'large',
          [TdClassNamePrefix(`align-${align}`)]: align,
          [TdClassNamePrefix(`is-${tStatus}`)]: tStatus && tStatus !== 'default',
          [InputClassNamePrefix(`--prefix`)]: prefixIcon || labelContent,
          [InputClassNamePrefix(`--suffix`)]: suffixIconContent || suffixContent,
          [InputClassNamePrefix(`--focused`)]: this.isFocused,
        })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // onWheel={(e) => onWheel?.({ e })}
        // onClick={(e) => {
        //   inputRef.current?.focus();
        //   onClick?.({ e });
        // }}
      >
        {prefixIconContent}
        {/* {labelContent ? <div className={`${classPrefix}-input__prefix`}>{labelContent}</div> : null} */}
        {showInput && renderInput}

        {autoWidth && (
          <span ref={this.inputPreRef} class={classNames(InputClassNamePrefix(`__input-pre`))}>
            {innerValue || placeholder}
          </span>
        )}

        {suffixContent || limitNumberNode ? (
          <div class={classNames(InputClassNamePrefix(`__suffix`))}>
            {suffixContent}
            {limitNumberNode}
          </div>
        ) : null}
        {suffixIconContent}
      </div>
    )

    function handleChange(e) {
      let { value: newStr } = e.currentTarget
      if (that.composingRef.current) {
        that.composingValue = newStr
      } else {
        if (props.type !== 'number') {
          newStr = getValueByLimitNumber(newStr)
        }
        // 完成中文输入时同步一次 composingValue
        that.composingValue = newStr
        const { onValidateChange } = useLengthLimit({
          value: newStr === undefined ? undefined : String(newStr),
          status: that.status,
          maxlength,
          maxcharacter,
          allowInputOverMax,
          onValidate,
        })
        onValidateChange()
        onChange(newStr)
      }
    }

    function handleClear(e: MouseEvent) {
      let inputNode = e.currentTarget.parentNode.previousSibling
      inputNode.value = ''
      that.composingValue = ''
      that.value = ''
      onChange?.('', { e })
      onClear?.({ e })
      inputNode.focus()
    }

    function handleKeyDown(e: KeyboardEvent) {
      const {
        key,
        currentTarget: { value },
      } = e
      key === 'Enter' && onEnter?.(value, { e })
      onKeydown?.(value, { e })
    }

    function handleKeyUp(e: KeyboardEvent) {
      const {
        currentTarget: { value },
      } = e
      onKeyup?.(value, { e })
    }

    function handleFocus(e: FocusEvent) {
      if (readonly) return
      const {
        currentTarget: { value },
      } = e
      onFocus?.(value, { e })
      that.isFocused = true
      that.update()
    }

    function handleKeyPress(e: KeyboardEvent) {
      const {
        currentTarget: { value },
      } = e
      onKeypress?.(value, { e })
    }

    function handleCompositionStart(e: CompositionEvent) {
      that.composingRef.current = true
      const {
        currentTarget: { value },
      } = e
      onCompositionstart?.(value, { e })
    }

    function handleCompositionEnd(e: CompositionEvent) {
      const {
        currentTarget: { value },
      } = e
      if (that.composingRef.current) {
        that.composingRef.current = false
        // onValidateChange()
        handleChange(e)
      }
      onCompositionend?.(value, { e })
    }

    function handleBlur(e: FocusEvent) {
      if (readonly) return
      const {
        currentTarget: { value },
      } = e
      onBlur?.(value, { e })
      that.isFocused = false
      that.update()
    }

    function handleMouseEnter(e: MouseEvent) {
      that.isHover = true
      that.update()
      onMouseenter?.({ e })
    }

    function handleMouseLeave(e: MouseEvent) {
      that.isHover = false
      that.update()
      onMouseleave?.({ e })
    }

    return (
      <div
        class={classNames(InputClassNamePrefix('__wrap'), {
          [InputClassNamePrefix('--auto-width')]: autoWidth && !keepWrapperWidth,
        })}
        // style={renderStyle}
        ref={this.wrapperRef}
        {...restProps}
      >
        {renderInputNode}
        <div class={classNames('t-input__tips', InputClassNamePrefix(`__tips--${tStatus || 'default'}`))}>{tips}</div>
      </div>
    )
  }
}
