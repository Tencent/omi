import { TNode, TElement, SizeEnum, ClassName } from '../common';
 
 export interface TdInputProps {
   /**
    * 文本内容位置，居左/居中/居右
    * @default left
    */
   align?: 'left' | 'center' | 'right';
   /**
    * 超出 `maxlength` 或 `maxcharacter` 之后是否允许继续输入
    * @default false
    */
   allowInputOverMax?: boolean;
   /**
    * 宽度随内容自适应
    * @default false
    */
   autoWidth?: boolean;
   /**
    * 是否开启自动填充功能，HTML5 原生属性，[点击查看详情](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
    */
   autocomplete?: string;
   /**
    * 自动聚焦
    * @default false
    */
   autofocus?: boolean;
   /**
    * 是否可清空
    * @default false
    */
   clearable?: boolean;
   /**
    * 是否禁用输入框
    */
   disabled?: boolean;
   /**
    * 指定输入框展示值的格式
    */
   format?: InputFormatType;
   /**
    * t-input 同级类名，示例：'name1 name2 name3' 或 `['name1', 'name2']` 或 `[{ 'name1': true }]`
    */
   inputClass?: ClassName;
   /**
    * 左侧文本
    */
   label?: TNode;
   /**
    * 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用
    */
   maxcharacter?: number;
   /**
    * 用户最多可以输入的文本长度，一个中文等于一个计数长度。值为空，则表示不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用
    */
   maxlength?: number;
   /**
    * 名称
    * @default ''
    */
   name?: string;
   /**
    * 占位符
    */
   placeholder?: string;
   /**
    * 组件前置图标
    */
   prefixIcon?: TElement;
   /**
    * 只读状态
    * @default false
    */
   readonly?: boolean;
   /**
    * 输入框内容为空时，悬浮状态是否显示清空按钮，默认不显示
    * @default false
    */
   showClearIconOnEmpty?: boolean;
   /**
    * 是否在输入框右侧显示字数统计
    * @default false
    */
   showLimitNumber?: boolean;
   /**
    * 输入框尺寸
    * @default medium
    */
   size?: SizeEnum;
   /**
    * 输入框状态。默认情况会由组件内部根据实际情况呈现，如果文本过长引起的状态变化
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
    * 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式
    */
   tips?: TNode;
   /**
    * 输入框类型
    * @default text
    */
   type?: 'text' | 'number' | 'url' | 'tel' | 'password' | 'search' | 'submit' | 'hidden';
   /**
    * 输入框的值
    * @default ''
    */
   value?: InputValue;
   /**
    * 输入框的值，非受控属性
    * @default ''
    */
   defaultValue?: InputValue;
   /**
    * 失去焦点时触发
    */
   onBlur?: (value: InputValue, context: { e: FocusEvent }) => void;
   /**
    * 输入框值发生变化时触发。`trigger=initial` 表示传入的数据不符合预期，组件自动处理后触发 change 告知父组件。如：初始值长度超过 `maxlength` 限制
    */
  //  onChange?: (
  //    value: InputValue,
  //    context?: {
  //      e?: MouseEvent | CompositionEvent
  //      trigger: 'input' | 'initial' | 'clear';
  //    },
  //  ) => void;

   onChange?: (
    value: InputValue,
    context?: {
      e?: MouseEvent
    },
  ) => void;
   /**
    * 清空按钮点击时触发
    */
   onClear?: (context: { e: MouseEvent }) => void;
   /**
    * 点击组件时触发
    */
   onClick?: (context: { e: MouseEvent }) => void;
   /**
    * 中文输入结束时触发
    */
   onCompositionend?: (value: InputValue, context: { e: CompositionEvent }) => void;
   /**
    * 中文输入开始时触发
    */
   onCompositionstart?: (value: InputValue, context: { e: CompositionEvent }) => void;
   /**
    * 回车键按下时触发
    */
   onEnter?: (value: InputValue, context: { e: KeyboardEvent}) => void;
   /**
    * 获得焦点时触发
    */
   onFocus?: (value: InputValue, context: { e: FocusEvent }) => void;
   /**
    * 键盘按下时触发
    */
   onKeydown?: (value: InputValue, context: { e: KeyboardEvent }) => void;
   /**
    * 按下字符键时触发（keydown -> keypress -> keyup）
    */
   onKeypress?: (value: InputValue, context: { e: KeyboardEvent }) => void;
   /**
    * 释放键盘时触发
    */
   onKeyup?: (value: InputValue, context: { e: KeyboardEvent }) => void;
   /**
    * 进入输入框时触发
    */
   onMouseenter?: (context: { e: MouseEvent }) => void;
   /**
    * 离开输入框时触发
    */
   onMouseleave?: (context: { e: MouseEvent}) => void;
   /**
    * 粘贴事件，`pasteValue` 表示粘贴板的内容
    */
   onPaste?: (context: { e: ClipboardEvent; pasteValue: string }) => void;
   /**
    * 字数超出限制时触发
    */
   onValidate?: (context: { error?: 'exceed-maximum' | 'below-minimum' }) => void;
   /**
    * 输入框中滚动鼠标时触发
    */
   onWheel?: (context: { e: WheelEvent }) => void;
 }
 
 export interface TdInputGroupProps {
   /**
    * 多个输入框之间是否需要间隔
    */
   separate?: boolean;
 }
 
 export type InputFormatType = (value: InputValue) => string;
 
 export type InputValue = string;