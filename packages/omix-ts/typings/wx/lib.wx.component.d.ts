/*! *****************************************************************************
Copyright (c) 2018 Tencent, Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
***************************************************************************** */

/*! *****************************************************************************
Copyright (c) 2018 Tencent, Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
***************************************************************************** */

type PropertyType =
  | StringConstructor
  | NumberConstructor
  | BooleanConstructor
  | ObjectConstructor
  | ArrayConstructor
  | null;

declare interface PropertyOption {
  /** 属性类型 */
  type: PropertyType;
  /** 属性初始值 */
  value: any;
  /** 属性值被更改时的响应函数 */
  observer?(
    newVal?: any,
    oldVal?: any,
    changedPath?: Array<string | number>,
  ): void;
  optionalTypes?: PropertyType[];
}

declare interface TriggerEventOption {
  /** 事件是否冒泡
   *
   * 默认值： `false`
   */
  bubbles?: boolean;
  /** 事件是否可以穿越组件边界，为false时，事件将只能在引用组件的节点树上触发，不进入其他任何组件内部
   *
   * 默认值： `false`
   */
  composed?: boolean;
  /** 事件是否拥有捕获阶段
   *
   * 默认值： `false`
   */
  capturePhase?: boolean;
}

declare interface WxComponent extends BaseComponent {
  /** 组件的文件路径 */
  is: string;
  /** 节点id */
  id: string;
  /** 节点dataset */
  dataset: string;
  /** 组件数据，**包括内部数据和属性值** */
  data: IAnyObject;
  /** 组件数据，**包括内部数据和属性值**（与 `data` 一致） */
  properties: {
    [propertyName: string]: PropertyOption;
  };

  /** 设置data并执行视图层渲染 */
  setData(
    /** 这次要改变的数据
     *
     * 以 `key: value` 的形式表示，将 `this.data` 中的 `key` 对应的值改变成 `value`。
     *
     * 其中 `key` 可以以数据路径的形式给出，支持改变数组中的某一项或对象的某个属性，如 `array[2].message`，`a.b.c.d`，并且不需要在 this.data 中预先定义。
     */
    data: IAnyObject,
    /** setData引起的界面更新渲染完毕后的回调函数，最低基础库： `1.5.0` */
    callback?: (data: IAnyObject) => void,
  ): void;
  /** 检查组件是否具有 `behavior` （检查时会递归检查被直接或间接引入的所有behavior） */
  hasBehavior(behavior: object): void;
  /** 触发事件，参见组件事件 */
  triggerEvent(name: string, detail: object, options: TriggerEventOption): void;
  /** 创建一个 SelectorQuery 对象，选择器选取范围为这个组件实例内 */
  createSelectorQuery(): wx.SelectorQuery;
  /** 创建一个 IntersectionObserver 对象，选择器选取范围为这个组件实例内 */
  createIntersectionObserver(
    options: wx.CreateIntersectionObserverOption,
  ): wx.IntersectionObserver;
  /** 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象（会被 `wx://component-export` 影响） */
  selectComponent(selector: string): WxComponent;
  /** 使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组 */
  selectAllComponents(selector: string): WxComponent[];
  /** 获取这个关系所对应的所有关联节点，参见 组件间关系 */
  getRelationNodes(relationKey: string): WxComponent[];
  /** 立刻执行 callback ，其中的多个 setData 之间不会触发界面绘制（只有某些特殊场景中需要，如用于在不同组件同时 setData 时进行界面绘制同步）*/
  groupSetData(callback?: () => void): void;
  /** 返回当前页面的 custom-tab-bar 的组件实例 */
  getTabBar(): WxComponent;
}

declare interface ComponentLifetimes {
  /** 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 `setData` */
  created?(this: WxComponent): void;
  /** 组件生命周期函数，在组件实例进入页面节点树时执行 */
  attached?(this: WxComponent): void;
  /** 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息（使用 [SelectorQuery]((SelectorQuery))） */
  ready?(this: WxComponent): void;
  /** 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行 */
  moved?(this: WxComponent): void;
  /** 组件生命周期函数，在组件实例被从页面节点树移除时执行 */
  detached?(this: WxComponent): void;
  /** 组件生命周期函数，每当组件方法抛出错误时执行 */
  error?(error: Error): void;
}

declare interface PageLifetimes {
  /** 页面生命周期回调—监听页面显示
   *
   * 页面显示/切入前台时触发。
   */
  show?(this: Page.PageInstance): void;
  /** 页面生命周期回调—监听页面隐藏
   *
   * 页面隐藏/切入后台时触发。 如 `navigateTo` 或底部 `tab` 切换到其他页面，小程序切入后台等。
   */
  hide?(this: Page.PageInstance): void;
  /** 页面生命周期回调—监听页面尺寸变化
   *
   * 所在页面尺寸变化时执行
   */
  resize?(Size?: Page.IResizeOption): void;
}

declare interface RelationOption {
  /** 目标组件的相对关系 */
  type: 'parent' | 'child' | 'ancestor' | 'descendant';
  /** 关系生命周期函数，当关系被建立在页面节点树中时触发，触发时机在组件attached生命周期之后 */
  linked?(target: WxComponent): any;
  /** 关系生命周期函数，当关系在页面节点树中发生改变时触发，触发时机在组件moved生命周期之后 */
  linkChanged?(target: WxComponent): any;
  /** 关系生命周期函数，当关系脱离页面节点树时触发，触发时机在组件detached生命周期之后 */
  unlinked?(target: WxComponent): any;
  /** 如果这一项被设置，则它表示关联的目标节点所应具有的behavior，所有拥有这一behavior的组件节点都会被关联 */
  target?: string;
}

type DefinitionFilter = (
  defFields: WxComponent,
  definitionFilterArr?: DefinitionFilter[],
) => void;

declare interface ComponentOptions {
  multipleSlots?: boolean;
  addGlobalClass?: boolean;
}

declare interface BaseComponent extends ComponentLifetimes {
  /** 组件的对外属性，是属性名到属性设置的映射表 */
  properties?: {
    [propertyName: string]: PropertyOption;
  };
  /** 组件的内部数据，和 `properties` 一同用于组件的模板渲染 */
  data?: IAnyObject;
  /** 组件数据字段监听器，用于监听 properties 和 data 的变化 */
  observers?: IAnyObject;
  /** object组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用，参见 [组件事件](events.md) */
  methods?: {
    [methodName: string]: (this: WxComponent) => any;
  };
  /** 类似于mixins和traits的组件间代码复用机制，参见 [behaviors](behaviors.md) */
  behaviors?: string[];
  /** 组件间关系定义，参见 [组件间关系](relations.md) */
  relations?: {
    [componentName: string]: RelationOption;
  };
  /** 组件接受的外部样式类，参见 [外部样式类](wxml-wxss.md) */
  externalClasses?: string[];
  /** 一些选项（文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举） */
  options?: ComponentOptions;
  /** 组件生命周期声明对象，组件的生命周期：`created`、`attached`、`ready`、`moved`、`detached` 将收归到 `lifetimes` 字段内进行声明，原有声明方式仍旧有效，如同时存在两种声明方式，则 `lifetimes` 字段内声明方式优先级最高
   *
   * 最低基础库： `2.2.3` */
  lifetimes?: ComponentLifetimes;
  /** 组件所在页面的生命周期声明对象，目前仅支持页面的 `show` 和 `hide` 两个生命周期
   *
   * 最低基础库： `2.2.3` */
  pageLifetimes?: PageLifetimes;
  /** 定义段过滤器，用于自定义组件扩展，参见 [自定义组件扩展](extend.md)
   *
   * 最低基础库： `2.2.3` */
  definitionFilter?: DefinitionFilter;
}

/** Component构造器可用于定义组件，调用Component构造器时可以指定组件的属性、数据、方法等。
 *
 * * 使用 `this.data` 可以获取内部数据和属性值，但不要直接修改它们，应使用 `setData` 修改。
 * * 生命周期函数无法在组件方法中通过 `this` 访问到。
 * * 属性名应避免以 data 开头，即不要命名成 `dataXyz` 这样的形式，因为在 WXML 中， `data-xyz=""` 会被作为节点 dataset 来处理，而不是组件属性。
 * * 在一个组件的定义和使用时，组件的属性名和 data 字段相互间都不能冲突（尽管它们位于不同的定义段中）。
 * * 从基础库 `2.0.9` 开始，对象类型的属性和 data 字段中可以包含函数类型的子字段，即可以通过对象类型的属性字段来传递函数。低于这一版本的基础库不支持这一特性。
 * * `bug` : 对于 type 为 Object 或 Array 的属性，如果通过该组件自身的 `this.setData` 来改变属性值的一个子字段，则依旧会触发属性 observer ，且 observer 接收到的 `newVal` 是变化的那个子字段的值， `oldVal` 为空， `changedPath` 包含子字段的字段名相关信息。
 */
declare function Component(
  /** 自定义组件注册参数 */ options: BaseComponent,
): void;
