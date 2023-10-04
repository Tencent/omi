// import React, { useState, MouseEvent, KeyboardEvent, ReactNode, Fragment } from 'react';
import { OmiProps, WeElement, h, tag, classNames, createRef } from 'omi'
import isFunction from 'lodash/isFunction'
import { TagInputChangeContext, TagInputValue, TdTagInputProps } from './type'
import { InputValue } from '../input'
import Tag from '../tag'
import '../tag'
import useConfig from '../hooks/useConfig'
import useControlled from '../hooks/useControlled'
import { DragSortInnerProps } from '../_util/useDragSorter'
import { values } from 'lodash'

export type ChangeParams = [TagInputChangeContext]

interface TagInputProps extends TdTagInputProps, DragSortInnerProps {}

// handle tag add and remove
export default function useTagList(props: TagInputProps) {
  
  // const { classPrefix: prefix } = useConfig();
  const { onRemove, max, minCollapsedNum, size, disabled, readonly, tagProps, tag, collapsedItems, getDragProps } =
    props
  // handle controlled property and uncontrolled property
  const tagValue = props.value ? props.value : props.defaultValue
  // const [tagValue, setTagValue] = useControlled(props, 'value', props.onChange);
  // const [oldInputValue, setOldInputValue] = useState<InputValue>();

  // 点击标签关闭按钮，删除标签
  const onClose = (p: { e?: MouseEvent; index: number; item: string | number }) => {
    const arr = [...tagValue]
    arr.splice(p.index, 1)
    // setTagValue(arr, { trigger: 'tag-remove', ...p })
    props?.onChange?.(arr, { ...p })
    onRemove?.({ ...p, trigger: 'tag-remove', value: arr })
  }

  const clearAll = (context: { e: MouseEvent }) => {
    // setTagValue([], { trigger: 'clear', e: context.e })
  }

  // 按下 Enter 键，新增标签
  const onInnerEnter = (value: InputValue, context: { e: KeyboardEvent }) => {
    const valueStr = value ? String(value).trim() : ''
    let newValue: TagInputValue = tagValue
    const isLimitExceeded = max && tagValue?.length >= max
    if (valueStr && !isLimitExceeded) {
      newValue = tagValue instanceof Array ? tagValue.concat(String(valueStr)) : [valueStr]
      // setTagValue(newValue, {
      //   trigger: 'enter',
      //   index: newValue.length - 1,
      //   item: valueStr,
      //   e: context.e,
      // })
    }
    console.log(props.onEnter)
    if(!props.onEnter){
      console.log(111)
      props.onChange('' ,{...context, inputValue: '' })
    }
    props?.onEnter?.(newValue, { ...context, inputValue: value })
  }

  const onInputBackspaceKeyUp = (value: InputValue) => {
    if (!tagValue || !tagValue.length) return
    setOldInputValue(value)
  }
  // 按下回退键，删除标签
  const onInputBackspaceKeyDown = (value: InputValue, context: { e: KeyboardEvent }) => {
    const { e } = context
    if (!tagValue || !tagValue.length) return
    // 回车键删除，输入框值为空时，才允许 Backspace 删除标签
    if (!oldInputValue && ['Backspace', 'NumpadDelete'].includes(e.key)) {
      const index = tagValue.length - 1
      const item = tagValue[index]
      const trigger = 'backspace'
      const newValue = tagValue.slice(0, -1)
      setTagValue(newValue, { e, index, item, trigger })
      onRemove?.({ e, index, item, trigger, value: newValue })
    }
  }

  const renderLabel = ({ displayNode, label }) => {
    const newList = minCollapsedNum ? tagValue.slice(0, minCollapsedNum) : tagValue
    const list = displayNode
      ? [<>{displayNode}</>]
      : newList?.map((item, index) => {
          const tagContent = isFunction(tag) ? tag({ value: item }) : tag
          return (
            <t-tag
              key={index}
              size={size}
              disabled={disabled}
              onClose={(context) => onClose({ e: context.e, item, index })}
              closable={!readonly && !disabled}
              // {...getDragProps?.(index, item)}
              {...tagProps}
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

  return {
    tagValue,
    clearAll,
    onClose,
    onInnerEnter,
    onInputBackspaceKeyDown,
    onInputBackspaceKeyUp,
    renderLabel,
  }
}
