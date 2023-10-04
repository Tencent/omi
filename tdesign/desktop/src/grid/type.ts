/* eslint-disable */
export interface TdRowProps {
  /**
   * 纵向对齐方式，CSS 属性 `align-items` 值。其中 `top` 和 `start` 等效；`middle` 和 `center` 等效；`bottom` 和 `end` 等效
   * @default top
   */
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline' | 'top' | 'middle' | 'bottom'
  /**
   * 栅格间隔，示例：`{ xs: 8, sm: 16, md: 24}`。当数据类型为 Number 和 Object 时，用于指定横向间隔。当数据类型为数组时，第一个参数为横向间隔，第二个参数为纵向间隔， [水平间隔, 垂直间隔]
   * @default 0
   */
  gutter?: number | GutterObject | Array<GutterObject | number>
  /**
   * flex 布局下的水平排列方式
   * @default start
   */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
  /**
   * 自定义元素标签
   * @default div
   */
  tag?: string
}

export interface TdColProps {
  /**
   * flex 布局填充。CSS 属性 flex 值。示例：2 / 3 / '100px' / 'auto' / '1 1 200px'
   */
  flex?: string | number
  /**
   * ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象（小尺寸电脑）
   */
  lg?: number | BaseColProps
  /**
   * ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象（超小尺寸电脑）
   */
  md?: number | BaseColProps
  /**
   * 栅格左侧的间隔格数，间隔内不可以有栅格
   * @default 0
   */
  offset?: number
  /**
   * 栅格顺序，flex 布局模式下有效
   * @default 0
   */
  order?: number
  /**
   * 栅格向左移动格数
   * @default 0
   */
  pull?: number
  /**
   * 栅格向右移动格数
   * @default 0
   */
  push?: number
  /**
   * ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象（平板）
   */
  sm?: number | BaseColProps
  /**
   * 栅格占位格数，为 0 时相当于 display: none
   */
  span?: number
  /**
   * 自定义元素标签
   * @default div
   */
  tag?: string
  /**
   * ≥1400px 响应式栅格，可为栅格数或一个包含其他属性的对象（中尺寸电脑）
   */
  xl?: number | BaseColProps
  /**
   * <768px 响应式栅格，可为栅格数或一个包含其他属性的对象（手机）
   */
  xs?: number | BaseColProps
  /**
   * ≥1880px 响应式栅格，可为栅格数或一个包含其他属性的对象（大尺寸电脑）
   */
  xxl?: number | BaseColProps
}

export interface GutterObject {
  xs: number
  sm: number
  md: number
}

export interface BaseColProps {
  offset: number
  order: number
  pull: number
  push: number
  span: number
}
