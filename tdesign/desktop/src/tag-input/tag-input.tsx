import { OmiProps, WeElement, h, tag, classNames, createRef } from 'omi'
import style from './style'
import { TagInputChangeContext, TagInputValue, TdTagInputProps } from './type'
// import { TdTagInputProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import { StyledProps } from '../common'
import useTagList from './useTagList'
// import useDragSorter from '../utils/userDragSorter';
import '../input'
import '../tag'
import TInput, { InputValue, InputRef } from '../input'
import noop from '../utils/noop'
import '../icon/close'
import { clearScreenDown } from 'readline'
import "../icon/close-circle-filled"
import { takeRightWhile } from 'lodash'

const TagInputClassNamePrefix = (className: string) => TdClassNamePrefix('tag-input') + className

export interface TagInputProps extends TdTagInputProps, StyledProps {}

@tag('t-tag-input')
export default class TagInput extends WeElement<TagInputProps> {
  static css = style

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
    this.tagValue = this.props.value ? this.props.value : this.props.defaultValue
  }

  tagInputRef = createRef()
  tInputValue = ''
  isHover
  tagValue = []

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
    } = props;
    (()=>console.log(props.value))()
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
    const tagValue = props.value ? props.value : props.defaultValue
    // const { tagValue, onClose, onInnerEnter, onInputBackspaceKeyUp, clearAll, renderLabel, onInputBackspaceKeyDown } =
    // useTagList({
    //   ...props,
    //   // getDragProps,
    // });
    const isFunction = (arg: unknown) => typeof arg === 'function'

    // 自定义 Tag 节点
    const displayNode = isFunction(valueDisplay)
      ? valueDisplay({
          value: tagValue,
          onClose: (index, item) => onClose({ index, item }),
        })
      : valueDisplay;

    const onClose = (p: { e?: MouseEvent; index: number; item: string | number }) => {
      const arr = [...tagValue]
      arr.splice(p.index, 1)
      tagValue.splice(p.index, 1)
      // setTagValue(arr, { trigger: 'tag-remove', ...p })
      props?.onChange?.(arr, { ...p })
      // onRemove?.({ ...p, trigger: 'tag-remove', value: arr })
    }

    const onInnerEnter = (value: InputValue, context: { e: KeyboardEvent }) => {
      const valueStr = value ? String(value).trim() : ''
      let newValue: TagInputValue = tagValue
      const isLimitExceeded = props.max && tagValue?.length >= props.max
      if (valueStr && !isLimitExceeded) {
        newValue = tagValue instanceof Array ? tagValue.concat(String(valueStr)) : [valueStr]
      }
      that.tInputValue = ''
      console.log('注意',that.tInputValue)
      if(!props.onEnter){props.onChange(newValue, {...context})}
      props?.onEnter?.(newValue, { ...context, inputValue: value })
    }

    const renderLabel = ({ displayNode, label }) => {
      const newList = props.minCollapsedNum ? tagValue.slice(0, props.minCollapsedNum) : tagValue
      const list = displayNode
        ? [<>{displayNode}</>]
        : newList?.map((item, index) => {
            const tagContent = isFunction(props.tag) ? props.tag({ value: item }) : props.tag
            return (
              <t-tag
                key={index}
                size={size}
                disabled={disabled}
                onClose={(context) => onClose({ e: context.e, item, index })}
                closable={!readonly && !disabled}
                // {...getDragProps?.(index, item)}
                {...props.tagProps}
              >
                {tagContent ?? item}
              </t-tag>
            )
          })
      if (label) {
        list?.unshift(
          <div class={`t-tag-input__prefix`} key="label">
            {label}
          </div>
        );
      }
      // console.log(list)
      return list
    }

    const tagInputPlaceholder = !tagValue?.length ? placeholder : '';

    const showClearIcon = Boolean(!readonly && !disabled && clearable && this.isHover && tagValue?.length);

    

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
    // (()=>{console.log(this.tInputValue)})();
    return (
      <t-input
        ref={that.tagInputRef}
        value={that.tInputValue}
        onChange={(val, context) => {
          // console.log(val)
          this.tInputValue = val
          this.update()
        }}
        autoWidth={true} // 控制input_inner的宽度 设置为true让内部input不会提前换行
        // onWheel={onWheel}
        // size={size}
        readonly={readonly}
        disabled={disabled}
        label={renderLabel({ displayNode, label })}
        className={classes}
        // style={props.style}
        // tips={tips}
        // status={status}
        // placeholder={tagInputPlaceholder}
        placeholder={tagInputPlaceholder}
        suffix={suffix}
        suffixIcon={suffixIconNode}
        showInput={!inputProps?.readonly || !tagValue || !tagValue?.length}
        keepWrapperWidth={!autoWidth}
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
        onBlur={(tInputValue, context) => {
          console.log(tInputValue,'onblur')
          if (tInputValue) {
            this.tInputValue = ''
            this.update()
          }
          onBlur?.(tagValue, { e: context.e, inputValue: '' });
        }}
        // onCompositionstart={onInputCompositionstart}
        // onCompositionend={onInputCompositionend}
        {...inputProps}
      />
    )
  }
}
