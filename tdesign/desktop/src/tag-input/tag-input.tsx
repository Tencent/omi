import { OmiProps, WeElement, h, tag, classNames, createRef } from 'omi'
import style from './style'
import { TagInputChangeContext, TagInputValue, TdTagInputProps } from './type'
// import { TdTagInputProps } from './type'
import { TdClassNamePrefix } from '../utils'
import { StyledProps } from '../common'
import useTagList from './useTagList'
// import useDragSorter from '../utils/userDragSorter';
import '../input'
import '../tag'
import TInput, { InputValue, InputRef } from '../input'
import noop from '../utils/noop'
import '../icon/close'
import { clearScreenDown } from 'readline'
import '../icon/close-circle-filled'
import { takeRightWhile } from 'lodash'

const TagInputClassNamePrefix = (className: string) => TdClassNamePrefix('tag-input') + className

export interface TagInputProps extends TdTagInputProps, StyledProps {}

interface DragSortProps<T> {
  sortOnDraggable: boolean
  onDragSort?: (context: DragSortContext<T>) => void
  onDragOverCheck?: {
    x?: boolean
    targetClassNameRegExp?: RegExp
  }
}

type DragFnType = (e?: DragEvent, index?: number, record?: any) => void
interface DragSortInnerData {
  dragging?: boolean
  draggable?: boolean
  onDragStart?: DragFnType
  onDragOver?: DragFnType
  onDrop?: DragFnType
  onDragEnd?: DragFnType
}

interface DragSortInnerProps extends DragSortInnerData {
  getDragProps?: (index?: number, record?: any) => DragSortInnerData
}

interface DragSortContext<T> {
  currentIndex: number
  current: T
  targetIndex: number
  target: T
}

const isFunction = (arg: unknown) => typeof arg === 'function'

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
    this.tagInputRef = createRef()
    this.tagValue = this.props.value ? this.props.value : this.props.defaultValue
    this.draggingIndex = -1
    this.dragStartData = null
    this.isDropped = null
    this.startInfo = { nodeX: 0, nodeWidth: 0, mouseX: 0 }
  }

  installed() {
    this.initScroll(this.tagInputRef)
  }

  tagInputRef
  tInputValue = ''
  isHover
  tagValue = []
  mouseEnterTimer = null
  scrollDistance
  scrollElement
  draggingIndex
  dragStartData
  isDropped
  startInfo

  updateScrollElement = (element: HTMLDivElement) => {
    this.scrollElement = element.current.children[0]
  }

  updateScrollDistance = () => {
    if (!this.scrollElement) return
    this.scrollDistance = this.scrollElement.scrollWidth - this.scrollElement.clientWidth
    // setScrollDistance(scrollElement.scrollWidth - scrollElement.clientWidth);
  }

  scrollTo = (distance: number) => {
    if (isFunction(this.scrollElement?.scroll)) {
      this.scrollElement.scroll({ left: distance, behavior: 'smooth' })
    }
  }

  scrollToRight = () => {
    this.updateScrollDistance()
    this.scrollTo(this.scrollDistance)
  }

  scrollToLeft = () => {
    this.scrollTo(0)
  }

  // TODO：MAC 电脑横向滚动，Windows 纵向滚动。当前只处理了横向滚动
  // onWheel = ({ e }: { e: WheelEvent<HTMLDivElement> }) => {
  //   if (readonly || disabled) return;
  //   if (!scrollElement) return;
  //   if (e.deltaX > 0) {
  //     const distance = Math.min(scrollElement.scrollLeft + 120, scrollDistance);
  //     scrollTo(distance);
  //   } else {
  //     const distance = Math.max(scrollElement.scrollLeft - 120, 0);
  //     scrollTo(distance);
  //   }
  // };

  // 鼠标 hover，自动滑动到最右侧，以便输入新标签
  scrollToRightOnEnter = () => {
    if (this.props.excessTagsDisplayType !== 'scroll') return
    // 一闪而过的 mousenter 不需要执行
    this.mouseEnterTimer = setTimeout(() => {
      this.scrollToRight()
      clearTimeout(this.mouseEnterTimer)
    }, 100)
  }

  scrollToLeftOnLeave = () => {
    if (this.props.excessTagsDisplayType !== 'scroll') return
    this.scrollTo(0)
    clearTimeout(this.mouseEnterTimer)
  }

  clearScroll = () => {
    clearTimeout(this.mouseEnterTimer)
  }

  initScroll = (element: HTMLDivElement) => {
    if (!element) return
    this.updateScrollElement(element)
  }

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
      onMouseleave,
    } = props

    function useDragSorter<T>(props: DragSortProps<T>): DragSortInnerProps {
      const { sortOnDraggable, onDragSort, onDragOverCheck } = props
      // const [draggingIndex, setDraggingIndex] = useState(-1);
      // const [dragStartData, setDragStartData] = useState(null);
      // const [isDropped, setIsDropped] = useState(null);
      // const [startInfo, setStartInfo] = useState({ nodeX: 0, nodeWidth: 0, mouseX: 0 });

      // const onDragSortRef = useRef(onDragSort);

      // const onDragSortRef = createRef();
      const onDragOver = (e, index, record: T) => {
        e.preventDefault()
        if (that.draggingIndex === index || that.draggingIndex === -1) return
        if (
          onDragOverCheck?.targetClassNameRegExp &&
          !onDragOverCheck?.targetClassNameRegExp.test(e.target?.className)
        ) {
          return
        }
        if (onDragOverCheck?.x) {
          if (!that.startInfo.nodeWidth) return

          const { x, width } = e.target.getBoundingClientRect()
          const targetNodeMiddleX = x + width / 2
          const clientX = e.clientX || 0
          const draggingNodeLeft = clientX - (that.startInfo.mouseX - that.startInfo.nodeX)
          const draggingNodeRight = draggingNodeLeft + that.startInfo.nodeWidth

          let overlap = false
          if (draggingNodeLeft > x && draggingNodeLeft < x + width) {
            overlap = draggingNodeLeft < targetNodeMiddleX
          } else {
            overlap = draggingNodeRight > targetNodeMiddleX
          }
          if (!overlap) return
        }
        onDragSort?.({
          currentIndex: that.draggingIndex,
          current: that.dragStartData,
          target: record,
          targetIndex: index,
        })
        that.draggingIndex = index
        // setDraggingIndex(index);
      }

      // const onDragOver = useCallback(
      //   (e, index, record: T) => {
      //     e.preventDefault();
      //     if (draggingIndex === index || draggingIndex === -1) return;
      //     if (onDragOverCheck?.targetClassNameRegExp && !onDragOverCheck?.targetClassNameRegExp.test(e.target?.className)) {
      //       return;
      //     }

      //     if (onDragOverCheck?.x) {
      //       if (!startInfo.nodeWidth) return;

      //       const { x, width } = e.target.getBoundingClientRect();
      //       const targetNodeMiddleX = x + width / 2;
      //       const clientX = e.clientX || 0;
      //       const draggingNodeLeft = clientX - (startInfo.mouseX - startInfo.nodeX);
      //       const draggingNodeRight = draggingNodeLeft + startInfo.nodeWidth;

      //       let overlap = false;
      //       if (draggingNodeLeft > x && draggingNodeLeft < x + width) {
      //         overlap = draggingNodeLeft < targetNodeMiddleX;
      //       } else {
      //         overlap = draggingNodeRight > targetNodeMiddleX;
      //       }
      //       if (!overlap) return;
      //     }

      //     onDragSortRef.current?.({
      //       currentIndex: draggingIndex,
      //       current: dragStartData,
      //       target: record,
      //       targetIndex: index,
      //     });
      //     setDraggingIndex(index);
      //   },
      //   [
      //     draggingIndex,
      //     onDragOverCheck?.targetClassNameRegExp,
      //     onDragOverCheck?.x,
      //     dragStartData,
      //     startInfo.nodeWidth,
      //     startInfo.mouseX,
      //     startInfo.nodeX,
      //   ],
      // );

      if (!sortOnDraggable) {
        return {}
      }

      function onDragStart(e, index, record: T) {
        that.draggingIndex = index
        that.dragStartData = record
        // setDraggingIndex(index);
        // setDragStartData(record);
        if (onDragOverCheck) {
          const { x, width } = e.target.getBoundingClientRect()
          that.startInfo = {
            nodeX: x,
            nodeWidth: width,
            mouseX: e.clientX || 0,
          }
          // setStartInfo({
          //   nodeX: x,
          //   nodeWidth: width,
          //   mouseX: e.clientX || 0,
          // });
        }
      }

      function onDrop() {
        that.isDropped = true
        // setIsDropped(true);
      }
      function onDragEnd() {
        if (!that.isDropped) {
          // 取消排序，待扩展 api，输出 dragStartData
        }
        that.isDropped = false
        that.draggingIndex = -1
        that.dragStartData = null
        // setIsDropped(false);
        // setDraggingIndex(-1);
        // setDragStartData(null);
      }
      function getDragProps(index, record: T) {
        if (sortOnDraggable) {
          return {
            draggable: true,
            onDragStart: (e) => {
              onDragStart(e, index, record)
            },
            onDragOver: (e) => {
              onDragOver(e, index, record)
            },
            onDrop: () => {
              onDrop()
            },
            onDragEnd: () => {
              onDragEnd()
            },
          }
        }
        return {}
      }

      return { onDragStart, onDragOver, onDrop, onDragEnd, getDragProps, dragging: that.draggingIndex !== -1 }
    }

    const { getDragProps } = useDragSorter({
      ...props,
      sortOnDraggable: props.dragSort,
      onDragOverCheck: {
        x: true,
        targetClassNameRegExp: new RegExp(`^t-tag`),
      },
    })

    const onClearClick = (e: MouseEvent) => {
      // clearAll({ e });
      // setTInputValue('', { e, trigger: 'clear' });
      // props.onClear?.({ e });
    }
    const tagValue = props.value ? props.value : props.defaultValue
    // const { tagValue, onClose, onInnerEnter, onInputBackspaceKeyUp, clearAll, renderLabel, onInputBackspaceKeyDown } =
    // useTagList({
    //   ...props,
    //   // getDragProps,
    // });

    // 自定义 Tag 节点
    const displayNode = isFunction(valueDisplay)
      ? valueDisplay({
          value: tagValue,
          onClose: (index, item) => onClose({ index, item }),
        })
      : valueDisplay

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
      if (!props.onEnter) {
        props.onChange?.(newValue, { ...context })
      }
      props?.onEnter?.(newValue, { ...context, inputValue: value })
    }

    // 按下回退键，删除标签
    const onInputBackspaceKeyDown = (value: InputValue, context: { e: KeyboardEvent }) => {
      if (!context) return
      const { e } = context
      if (!tagValue || !tagValue.length) return
      // 回车键删除，输入框值为空时，才允许 Backspace 删除标签
      if (!this.tInputValue && ['Backspace', 'NumpadDelete'].includes(e.key)) {
        const index = tagValue.length - 1
        const item = tagValue[index]
        const trigger = 'backspace'
        const newValue = tagValue.slice(0, -1)
        props.onChange(newValue, { e, index, item, trigger })
        // setTagValue(newValue, { e, index, item, trigger });
        props.onRemove?.({ e, index, item, trigger, value: newValue })
      }
    }

    const onInputBackspaceKeyUp = (value: InputValue) => {
      if (!tagValue || !tagValue.length) return
      this.tInputValue = value
      that.update()
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
                {...getDragProps?.(index, item)}
                {...props.tagProps}
                className={classNames('t-tag')}
              >
                {tagContent ?? item}
              </t-tag>
            )
          })
      if (label) {
        list?.unshift(
          <div class={`t-tag-input__prefix`} key="label">
            {label}
          </div>,
        )
      }
      if (newList.length !== tagValue.length) {
        const len = tagValue.length - newList.length
        const params = {
          value: tagValue,
          count: tagValue.length - props.minCollapsedNum,
          collapsedTags: tagValue.slice(props.minCollapsedNum, tagValue.length),
        }
        const more = isFunction(props.collapsedItems) ? props.collapsedItems(params) : props.collapsedItems
        if (more) {
          list.push(more)
        } else {
          list.push(<t-tag size={size}>+{len}</t-tag>)
        }
      }
      return list
    }

    const tagInputPlaceholder = !tagValue?.length ? placeholder : ''

    const showClearIcon = Boolean(!readonly && !disabled && clearable && this.isHover && tagValue?.length)

    const suffixIconNode = showClearIcon ? (
      <t-icon-close-circle-filled
        class={classNames(TagInputClassNamePrefix(`__suffix-clear`))}
        onClick={onClearClick}
      />
    ) : (
      suffixIcon
    )

    const isEmpty = !(Array.isArray(tagValue) && tagValue.length)
    const cls = () => {
      return classNames()
    }
    const classes = [
      TdClassNamePrefix('tag-input'),
      {
        [TagInputClassNamePrefix(`--break-line`)]: this.props.excessTagsDisplayType === 'break-line',
        [TagInputClassNamePrefix(`__with-suffix-icon`)]: !!suffixIconNode,
        [TdClassNamePrefix(`is-empty`)]: isEmpty,
        [TagInputClassNamePrefix(`--with-tag`)]: !isEmpty,
      },
      props.className,
    ]

    const onInputEnter = (value: InputValue, context: { e: KeyboardEvent }) => {
      onInnerEnter(value, context)
      // setTInputValue('', { e: context.e, trigger: 'enter' });
      // !isCompositionRef.current && onInnerEnter(value, context);
      this.scrollToRight()
    }

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
    }
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
        size={size}
        readonly={readonly}
        disabled={disabled}
        label={renderLabel({ displayNode, label })}
        className={classes}
        // style={props.style}
        tips={tips}
        status={status}
        placeholder={tagInputPlaceholder}
        suffix={suffix}
        suffixIcon={suffixIconNode}
        showInput={!inputProps?.readonly || !tagValue || !tagValue?.length}
        keepWrapperWidth={!autoWidth}
        // onPaste={onPaste}
        // onClick={onInnerClick}
        onEnter={onInputEnter}
        onMyKeydown={onInputBackspaceKeyDown}
        onMyKeyup={onInputBackspaceKeyUp}
        onMouseenter={(context) => {
          addHover(context)
          this.scrollToRightOnEnter()
        }}
        onMouseleave={(context) => {
          cancelHover(context)
          this.scrollToLeftOnLeave()
        }}
        // onFocus={(inputValue, context) => {
        //   onFocus?.(tagValue, { e: context.e, inputValue });
        // }}
        onBlur={(tInputValue, context) => {
          console.log(tInputValue, 'onblur')
          if (tInputValue) {
            this.tInputValue = ''
            this.update()
          }
          onBlur?.(tagValue, { e: context.e, inputValue: '' })
        }}
        // onCompositionstart={onInputCompositionstart}
        // onCompositionend={onInputCompositionend}
        {...inputProps}
      />
    )
  }
}
