import { TNode, TElement, SizeEnum } from '../common';

 export interface TagProps {
   /**
    * 组件子元素，同 `content`
    */
   children?: TNode;
   /**
    * 标签是否可关闭
    * @default false
    */
   closable?: boolean;
   /**
    * 组件子元素
    */
   content?: TNode;
   /**
    * 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态
    * @default false
    */
   disabled?: boolean;
   /**
    * 标签中的图标，可自定义图标呈现
    */
   icon?: TElement;
   /**
    * 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80
    */
   maxWidth?: string | number;
   /**
    * 标签类型，有三种：方形、圆角方形、标记型
    * @default square
    */
   shape?: 'square' | 'round' | 'mark';
   /**
    * 标签尺寸
    * @default medium
    */
   size?: SizeEnum;
   /**
    * 组件风格，用于描述组件不同的应用场景
    * @default default
    */
   theme?: 'default' | 'primary' | 'warning' | 'danger' | 'success';
   /**
    * 标签风格变体
    * @default dark
    */
   variant?: 'dark' | 'light' | 'outline' | 'light-outline';
   /**
    * 点击时触发
    */
   onClick?: (context: { e: MouseEvent }) => void;
   /**
    * 如果关闭按钮存在，点击关闭按钮时触发
    */
   onClose?: (context: { e: MouseEvent }) => void;
 }
 
 export interface CheckTagProps {
   /**
    * 标签选中的状态，默认风格（theme=default）才有选中态
    */
   checked?: boolean;
   /**
    * 标签选中的状态，默认风格（theme=default）才有选中态，非受控属性
    */
   defaultChecked?: boolean;
   /**
    * 组件子元素
    */
   children?: TNode;
   /**
    * 组件子元素；传入数组时：[选中内容，非选中内容]
    */
   content?: [] | TNode;
   /**
    * 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态
    * @default false
    */
   disabled?: boolean;
   /**
    * 标签尺寸
    * @default medium
    */
   size?: SizeEnum;
   /**
    * 状态切换时触发
    */
   onChange?: (checked: boolean) => void;
   /**
    * 点击标签时触发
    */
   onClick?: (context: { e: MouseEvent }) => void;
 }