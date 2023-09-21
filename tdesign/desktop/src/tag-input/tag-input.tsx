import { OmiProps, WeElement, h, tag, classNames, createRef } from 'omi'
import style from './style'
import { TdTagInputProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import { StyledProps } from '../common'
import useTagList from './useTagList'
// import useDragSorter from '../utils/userDragSorter';
import '../input'
import TInput, { InputValue, InputRef } from '../input'
import noop from '../utils/noop'
import '../icon/close'
import { clearScreenDown } from 'readline'
import "../icon/close-circle-filled"

const TagInputClassNamePrefix = (className: string) => TdClassNamePrefix('tag-input') + className

export interface TagInputProps extends TdTagInputProps, StyledProps {}

@tag('t-tag-input')
export default class TagInput extends WeElement<TagInputProps> {
  static css = style

  iconStyle = `
  .t-icon{
    margin-right: var(--td-comp-margin-xs);
    width: calc(var(--td-font-size-body-medium) + 2px);
    height: calc(var(--td-font-size-body-medium) + 2px);
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  `
  static defaultProps = {
    autoWidth: false,
    clearable: false,
    dragSort: false,
    excessTagsDisplayType: 'break-line',
    defaultInputValue: '',
    minCollapsedNum: 0,
    placeholder: undefined,
    readonly: false,
    size: 'medium',
    defaultValue: [],
  }

  static propTypes = {
    autoWidth: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    dragSort: Boolean,
    readonly: Boolean,

    excessTagsDisplayType: String,
    placeholder: String,
    size: String,
    status: String,
    max: Number,
    minCollapsedNum: Number,

    onBlur: Function,
    onChange: Function,
    onClear: Function,
    onClick: Function,
    onDragSort: Function,
    onEnter: Function,
    onFocus: Function,
    onInputChange: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onPaste: Function,
    onRemove: Function,
  }

  install() {
    // console.log(this.props.inputProps)
    
  }

  tagInputRef = createRef()
  tInputValue
  isHover

  render(props: OmiProps<TagInputProps, any>, store: any) {
    let that = this
    const {
      excessTagsDisplayType,
      autoWidth,
      readonly,
      disabled,
      clearable,
      placeholder,
      valueDisplay,
      label,
      inputProps,
      size,
      tips,
      status,
      suffixIcon,
      suffix,
      onClick,
      onPaste,
      onFocus,
      onBlur,
      onMouseenter,
      onMouseleave
    } = props
    const tInputValue = this.props.inputValue
    // const { getDragProps } = useDragSorter({
    //   ...props,
    //   sortOnDraggable: props.dragSort,
    //   onDragOverCheck: {
    //     x: true,
    //     targetClassNameRegExp: new RegExp(`^${prefix}-tag`),
    //   },
    // });
    const onClearClick = (e: MouseEvent) => {
      // clearAll({ e });
      // setTInputValue('', { e, trigger: 'clear' });
      // props.onClear?.({ e });
    };

    const { tagValue, onClose, onInnerEnter, onInputBackspaceKeyUp, clearAll, renderLabel, onInputBackspaceKeyDown } =
    useTagList({
      ...props,
      // getDragProps,
    });

    const tagInputPlaceholder = !tagValue?.length ? placeholder : '';

    const showClearIcon = Boolean(!readonly && !disabled && clearable && this.isHover && tagValue?.length);

    const isFunction = (arg: unknown) => typeof arg === 'function'

    const suffixIconNode = showClearIcon ? (
      <t-icon-close-circle-filled class={classNames(TagInputClassNamePrefix(`__suffix-clear`))} onClick={onClearClick} />
    ) : (
      suffixIcon
    );

    const isEmpty = !(Array.isArray(tagValue) && tagValue.length);
    const cls = () => {
      return classNames(
        
      )
    }
    const classes = [TdClassNamePrefix('tag-input'),
        {
          [TagInputClassNamePrefix(`--break-line`)]: this.props.excessTagsDisplayType === 'break-line',
          [TagInputClassNamePrefix(`__with-suffix-icon`)]: !!suffixIconNode,
          [TdClassNamePrefix(`is-empty`)]: isEmpty,
          [TagInputClassNamePrefix(`--with-tag`)]: !isEmpty,
        }
      ]


    const onInputEnter = (value: InputValue, context: { e: KeyboardEvent }) => {
      onInnerEnter(value, context)
      // setTInputValue('', { e: context.e, trigger: 'enter' });
      // !isCompositionRef.current && onInnerEnter(value, context);
      // scrollToRight();
    };

    // 自定义 Tag 节点
    const displayNode = isFunction(valueDisplay)
      ? valueDisplay({
          value: tagValue,
          onClose: (index, item) => onClose({ index, item }),
        })
      : valueDisplay;
    
      
    // (() => console.log(renderLabel({ displayNode, label })))()
    // if(icon){
    //   icon.attributes['style'] = {}
    //   icon.attributes.style['marginRight'] = 4
    // }
    
    
    const addHover = (context) => {
      if (readonly || disabled) return
      that.isHover = true
      that.update()
      onMouseenter?.(context)
    }
  
    const cancelHover = (context) => {
      if (readonly || disabled) return
      that.isHover = false
      that.update()
      onMouseleave?.(context)
    };

    return (
      <t-input
        ref={this.tagInputRef}
        value={this.tInputValue}
        // onChange={(val, context) => {
        //   setTInputValue(val, { ...context, trigger: 'input' });
        // }}
        // autoWidth={true} // 控制input_inner的宽度 设置为true让内部input不会提前换行
        // onWheel={onWheel}
        // size={size}
        // readonly={readonly}
        // disabled={disabled}
        label={renderLabel({ displayNode, label })}
        className={classes}
        // style={props.style}
        // tips={tips}
        // status={status}
        // placeholder={tagInputPlaceholder}
        placeholder={tagInputPlaceholder}
        // suffix={suffix}
        suffixIcon={suffixIconNode}
        showInput={!inputProps?.readonly || !tagValue || !tagValue?.length}
        // keepWrapperWidth={!autoWidth}
        // onPaste={onPaste}
        // onClick={onInnerClick}
        onEnter={onInputEnter}
        // onKeydown={onInputBackspaceKeyDown}
        // onKeyup={onInputBackspaceKeyUp}
        onMouseenter={(context) => {
          addHover(context);
          // scrollToRightOnEnter();
        }}
        onMouseleave={(context) => {
          cancelHover(context);
          // scrollToLeftOnLeave();
        }}
        // onFocus={(inputValue, context) => {
        //   onFocus?.(tagValue, { e: context.e, inputValue });
        // }}
        // onBlur={(inputValue, context) => {
        //   if (tInputValue) {
        //     setTInputValue('', { e: context.e, trigger: 'blur' });
        //   }
        //   onBlur?.(tagValue, { e: context.e, inputValue: '' });
        // }}
        // onCompositionstart={onInputCompositionstart}
        // onCompositionend={onInputCompositionend}
        {...inputProps}
      />
    )
  }
}
