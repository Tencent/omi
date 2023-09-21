/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

 import { InputProps } from '../input';
 import { InputValue } from '../input';
 import { TagProps } from '../tag';
 import { TNode, TElement } from '../common';
 
 export interface TdTagInputProps {
   /**
    * 宽度随内容自适应
    * @default false
    */
   autoWidth?: boolean;
   /**
    * 是否可清空
    * @default false
    */
   clearable?: boolean;
   /**
    * 标签过多的情况下，折叠项内容，默认为 `+N`。如果需要悬浮就显示其他内容，可以使用 collapsedItems 自定义。`value` 表示当前存在的所有标签，`collapsedTags` 表示折叠的标签，`count` 表示折叠的数量
    */
   collapsedItems?: TNode<{ value: TagInputValue; collapsedTags: TagInputValue; count: number }>;
   /**
    * 是否禁用标签输入框
    */
   disabled?: boolean;
   /**
    * 拖拽调整标签顺序
    * @default false
    */
   dragSort?: boolean;
   /**
    * 标签超出时的呈现方式，有两种：横向滚动显示 和 换行显示
    * @default break-line
    */
   excessTagsDisplayType?: 'scroll' | 'break-line';
   /**
    * 透传 Input 输入框组件全部属性
    */
   inputProps?: InputProps;
   /**
    * 输入框的值
    * @default ''
    */
   inputValue?: InputValue;
   /**
    * 输入框的值，非受控属性
    * @default ''
    */
   defaultInputValue?: InputValue;
   /**
    * 左侧文本
    */
   label?: TNode;
   /**
    * 最大允许输入的标签数量
    */
   max?: number;
   /**
    * 最小折叠数量，用于标签数量过多的情况下折叠选中项，超出该数值的选中项折叠。值为 0 则表示不折叠
    * @default 0
    */
   minCollapsedNum?: number;
   /**
    * 占位符
    */
   placeholder?: string;
   /**
    * 只读状态，值为真会隐藏标签移除按钮和输入框
    * @default false
    */
   readonly?: boolean;
   /**
    * 尺寸
    * @default medium
    */
   size?: 'small' | 'medium' | 'large';
   /**
    * 输入框状态
    */
   status?: 'default' | 'success' | 'warning' | 'error';
   /**
    * 后置图标前的后置内容
    */
   suffix?: TNode;
   /**
    * 组件后置图标
    */
   suffixIcon?: TElement;
   /**
    * 自定义标签的内部内容，每一个标签的当前值。注意和 `valueDisplay` 区分，`valueDisplay`  是用来定义全部标签内容，而非某一个标签
    */
   tag?: string | TNode<{ value: string | number }>;
   /**
    * 透传 Tag 组件全部属性
    */
   tagProps?: TagProps;
   /**
    * 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式
    */
   tips?: TNode;
   /**
    * 值
    * @default []
    */
   value?: TagInputValue;
   /**
    * 值，非受控属性
    * @default []
    */
   defaultValue?: TagInputValue;
   /**
    * 自定义值呈现的全部内容，参数为所有标签的值
    */
   valueDisplay?: string | TNode<{ value: TagInputValue; onClose: (index: number, item?: any) => void }>;
   /**
    * 失去焦点时触发
    */
   onBlur?: (value: TagInputValue, context: { inputValue: InputValue; e: FocusEvent<HTMLInputElement> }) => void;
   /**
    * 值变化时触发，参数 `context.trigger` 表示数据变化的触发来源；`context.index` 指当前变化项的下标；`context.item` 指当前变化项；`context.e` 表示事件参数
    */
   onChange?: (value: TagInputValue, context: TagInputChangeContext) => void;
   /**
    * 清空按钮点击时触发
    */
   onClear?: (context: { e: MouseEvent }) => void;
   /**
    * 点击组件时触发
    */
   onClick?: (context: { e: MouseEvent }) => void;
   /**
    * 【开发中】拖拽排序时触发
    */
   onDragSort?: (context: TagInputDragSortContext) => void;
   /**
    * 按键按下 Enter 时触发
    */
   onEnter?: (value: TagInputValue, context: { e: KeyboardEvent; inputValue: InputValue }) => void;
   /**
    * 聚焦时触发
    */
   onFocus?: (value: TagInputValue, context: { inputValue: InputValue; e: FocusEvent }) => void;
   /**
    * 输入框值发生变化时触发，`context.trigger` 表示触发输入框值变化的来源：文本输入触发、清除按钮触发、回车键触发等
    */
   onInputChange?: (value: InputValue, context?: InputValueChangeContext) => void;
   /**
    * 进入输入框时触发
    */
   onMouseenter?: (context: { e: MouseEvent }) => void;
   /**
    * 离开输入框时触发
    */
   onMouseleave?: (context: { e: MouseEvent }) => void;
   /**
    * 粘贴事件，`pasteValue` 表示粘贴板的内容
    */
   onPaste?: (context: { e: ClipboardEvent; pasteValue: string }) => void;
   /**
    * 移除单个标签时触发
    */
   onRemove?: (context: TagInputRemoveContext) => void;
 }
 
 export type TagInputValue = Array<string | number>;
 
 export interface TagInputChangeContext {
   trigger: TagInputTriggerSource;
   index?: number;
   item?: string | number;
   e?: MouseEvent | KeyboardEvent;
 }
 
 export type TagInputTriggerSource = 'enter' | 'tag-remove' | 'backspace' | 'clear';
 
 export interface TagInputDragSortContext {
   newTags: TagInputValue;
   currentIndex: number;
   current: string | number;
   targetIndex: number;
   target: string | number;
 }
 
 export interface InputValueChangeContext {
   e?:
     | FormEvent
     | MouseEvent
     | CompositionEvent
     | KeyboardEvent;
   trigger: 'input' | 'clear' | 'enter' | 'blur';
 }
 
 export interface TagInputRemoveContext {
   value: TagInputValue;
   index: number;
   item: string | number;
   e?: MouseEvent | KeyboardEvent;
   trigger: TagInputRemoveTrigger;
 }
 
 export type TagInputRemoveTrigger = 'tag-remove' | 'backspace';