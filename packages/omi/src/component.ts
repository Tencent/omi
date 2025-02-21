// @ts-nocheck
import {
  isArray,
  hyphenate,
  capitalize,
  camelCase,
  createStyleSheet,
  getClassStaticValue,
  isObject,
  createRef,
  installHook,
  convertNodeListToVNodes,
  createProxy,
} from './utils'
import { diff } from './diff'
import { ExtendedElement } from './dom'
import 'weakmap-polyfill'
import { ObjectVNode, VNode, createElement } from './vdom'
import { setActiveComponent, clearActiveComponent } from 'reactive-signal'
import { options } from './options'
import { define } from './define'
import forwardRef from './hooks/forwardRef'

let id = 0

const adoptedStyleSheetsMap = new WeakMap()
type Module = { default: string }
type CSSItem = Module | string

type PropType = Object | Number | String | Boolean

type PropTypes = {
  [key: string]: PropType | Array<PropType>
}

type ReflectProps = {
  [key: string]: boolean | ((propValue: any) => any)
}

export type ComponentHookType =
  | 'define'
  | 'initial'
  | 'connected'
  | 'disconnected'
export type ComponentHooks = {
  [key in Omit<ComponentHookType, 'define'>]?: (self: Component) => void
} & {
  define: (cls: typeof Component) => void
}
export type ComponentHookRegistry = Record<
  ComponentHookType,
  ((self: Component) => void)[]
>
export type Ref<T = any> = { current?: T }

export class Component<State = any> extends HTMLElement {
  static h = createElement
  static f = createElement.f

  static is = 'Component'
  static defaultProps: Record<string, unknown>
  static reflectProps: ReflectProps
  static propTypes: PropTypes
  static css: CSSItem | CSSItem[]
  static isLightDOM: boolean
  static noSlot: boolean
  static hooks: ComponentHookRegistry
  // 被所有组件继承
  static props = {}
  // 是否针对复杂类型使用DOMProperty的方式传值
  static useDOMProperty = false

  // 可以延迟定义，防止 import { }  被 tree-shaking 掉
  static define(name: string): void {
    define(name, this)
  }
  // 不能声明 props，不然懒加载的 props 执行完构造函数会变成 udnefined, 会导致元素升级为自定义元素之前的 props 丢失
  // props: Record<string, unknown>
  // 不能声明 prevProps，不然懒加载的 prevProps 执行完构造函数会变成 udnefined, 会导致元素升级为自定义元素之前的 prevProps 丢失
  // prevProps: Record<string, unknown> | null
  elementId: number
  isInstalled: boolean
  inject?: string[]
  injection?: { [key: string]: unknown }
  renderRoot?: ExtendedElement | ShadowRoot | Component
  rootElement: ExtendedElement | ExtendedElement[] | null
  _hooks: Record<ComponentHookType, Function[]>
  _ref: Partial<Record<'current', any>> = null
  static formAssociated = true
  constructor() {
    super()
    this.handleProps()
    // 安装一些内置钩子
    installHook(this, forwardRef)
    this.executeHooks('initial')
    this.elementId = id++
    this.isInstalled = false
    this.rootElement = null
  }

  get ref(): Ref {
    // 具体实现由 forwardRef hook提供，这里只是为了提供类型提示
  }

  /**
   * 获取已经声明的钩子函数
   */
  get hooks() {
    if (!this._hooks) {
      this._hooks = getClassStaticValue(this, 'hooks') || {}
    }
    return this._hooks
  }

  /**
   * 执行指定名称的钩子函数
   */
  private executeHooks(hookName: ComponentHookType) {
    if (hookName in this.hooks) {
      const hooks = this.hooks[hookName]
      if (Array.isArray(hooks)) {
        hooks.forEach((hook) => {
          try {
            hook.call(this, this)
          } catch (e: any) {
            console.warn(
              `Error occurred while executing hook function ${this.constructor.name}/${hookName}:`,
              e,
            )
          }
        })
      }
    }
  }

  /**
   * 处理props
   *
   * 为方便组件继承，会读取类继承链上的props、defaultProps、propTypes、reflectProps等属性进行合并
   * 这样子组件就可以继承父组件的props、defaultProps、propTypes、reflectProps等属性
   *
   *
   */
  private handleProps() {
    this.constructor.defaultProps =
      getClassStaticValue(this, 'defaultProps', { default: {} }) || {}
    this.constructor.propTypes =
      getClassStaticValue(this, 'propTypes', { default: {} }) || {}
    this.constructor.reflectProps =
      getClassStaticValue(this, 'reflectProps', { default: {} }) || {}
    const props = getClassStaticValue(this, 'props', {
      default: {},
      merge: 'uniqueMerge',
    })

    if (this.constructor.props) {
      for (const propName in props) {
        const prop = props[propName]
        this.constructor.defaultProps[propName] = prop.default
        this.constructor.propTypes[propName] = prop.type
        this.constructor.reflectProps[propName] = prop.reflect
      }
    }

    // @ts-ignore fix lazy load props missing
    this.props = Object.assign({}, this.constructor.defaultProps, this.props)

    if (this.constructor.useDOMProperty && !this.props.ignoreAttrs) {
      this.handleComplexProps()
    }
  }

  private proxyCache = new WeakMap<object, object>()

  /**
   * 处理复杂类型的属性，如对象、数组，使用 DOM Property 的方式获取值
   * 其它基本类型使用 attribute 的方式获取值
   */
  private handleComplexProps() {
    const propTypes = this.constructor.propTypes as PropTypes
    Object.keys(propTypes).forEach(propName => {
      // 检查是否是复杂类型
      const isComplexType = this.constructor.isComplexType(propName)

      if (isComplexType) {
        Object.defineProperty(this, propName, {
          get: () => this.props[propName],
          set: (value) => {
            console.log('===到这里set', value)
            if (Object.is(value, this.props[propName])) return

            this.props[propName] = value
            this.queuedUpdate()
          },
          enumerable: true,
          configurable: true
        })
      }
    })
  }

  static isComplexType(propName: string) {
    const propTypes = this.propTypes as PropTypes
    if (!propTypes[propName] || /^on|children/.test(propName)) {
      return false
    }
    const types = isArray(propTypes[propName])
      ? propTypes[propName] as PropType[]
      : [propTypes[propName]] as PropType[]

    // 检查是否是复杂类型
    return types.some(t =>
      t === Object || t === Array || (isArray(t) && t.includes(Object))
    )
  }

  static get observedAttributes() {
    // 兼容之前老的逻辑
    if (Object.keys(this.props || {}).length > 0) {
      return Object.keys(this.props).map(hyphenate)
    }
    // 根据 propTypes 获取需要监听的属性
    if (Object.keys(this.propTypes || {}).length > 0) {
      console.log('===走到这里')
      return Object.keys(this.propTypes)
        .filter((p) => !/^on|children/.test(p) && !(this.isComplexType(p) && this.useDOMProperty))
        .map(hyphenate)
    }
    return []
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('====changed', name, oldValue, newValue)
    const propName = camelCase(name)
    if (this.constructor.props && this.constructor.props[propName]) {
      const prop = this.constructor.props[propName]
      if (prop.changed) {
        const newTypeValue = this.getTypeValueOfProp(propName, newValue)
        const oldTypeValue = this.getTypeValueOfProp(propName, oldValue)
        prop.changed.call(this, newTypeValue, oldTypeValue)
      }
    }
    if (!this.props.ignoreAttrs) {
      this.update()
    }
  }

  state: State

  setState(partialState: Partial<State>, beforeUpdate = false) {
    if (typeof partialState !== 'object') {
      throw new Error('takes an object of state variables to update')
    }

    Object.keys(partialState).forEach(
      (key) => (this.state[key] = partialState[key]),
    )
    if (!beforeUpdate) {
      this.queuedUpdate()
    }
  }

  injectObject() {
    let p: ExtendedElement = this.parentNode as ExtendedElement
    // @ts-ignore deprecated
    while (p && !this.store && !options.mixin.store) {
      // @ts-ignore deprecated
      this.store = p.store
      p = (p.parentNode || p.host) as ExtendedElement
    }

    if (this.inject) {
      this.injection = {}
      p = this.parentNode as ExtendedElement
      let provide: unknown
      while (p && !provide) {
        provide = p.provide
        p = (p.parentNode || p.host) as ExtendedElement
      }
      if (provide) {
        this.inject.forEach((injectKey) => {
          // @ts-ignore
          this.injection[injectKey] = provide[injectKey]
        })
      }
    }

    for (const key in options.mixin) {
      if (!this.hasOwnProperty(key)) {
        Object.defineProperty(this, key, {
          get: () => {
            return options.mixin[key]
          },
        })
      }
    }
  }

  createRenderRoot(): ShadowRoot | Component {
    if ((this.constructor as typeof Component).isLightDOM) {
      return this
    } else {
      if (this.shadowRoot) {
        let fc: ChildNode | null
        while ((fc = this.shadowRoot.firstChild)) {
          this.shadowRoot.removeChild(fc)
        }
        return this.shadowRoot
      } else {
        return this.attachShadow({
          mode: 'open',
          // delegatesFocus: true,
        })
      }
    }
  }

  applyAdoptedStyleSheets() {
    if (
      !(this.constructor as typeof Component).isLightDOM &&
      !adoptedStyleSheetsMap.has(this.constructor)
    ) {
      const css = (this.constructor as typeof Component).css
      if (css) {
        let styleSheets: CSSStyleSheet[] = []
        if (typeof css === 'string') {
          styleSheets = [createStyleSheet(css)]
        } else if (isArray(css)) {
          styleSheets = (css as Module[]).map((styleSheet) => {
            if (typeof styleSheet === 'string') {
              return createStyleSheet(styleSheet)
            } else if (
              (styleSheet as Module).default &&
              typeof (styleSheet as Module).default === 'string'
            ) {
              return createStyleSheet((styleSheet as Module).default)
            } else {
              return styleSheet
            }
          }) as CSSStyleSheet[]
        } else if (
          (css as Module).default &&
          typeof (css as Module).default === 'string'
        ) {
          styleSheets = [createStyleSheet((css as Module).default)]
        } else {
          styleSheets = [css as unknown as CSSStyleSheet]
        }

        // add globalCSS
        styleSheets = [...options.globalCSS, ...styleSheets]
          ; (this.renderRoot as ShadowRoot).adoptedStyleSheets = styleSheets
        adoptedStyleSheetsMap.set(this.constructor, styleSheets)
      } else {
        if (options.globalCSS.length) {
          ; (this.renderRoot as ShadowRoot).adoptedStyleSheets =
            options.globalCSS
        }
      }
    } else {
      ; (this.renderRoot as ShadowRoot).adoptedStyleSheets =
        adoptedStyleSheetsMap.get(this.constructor)
    }
  }

  appendStyleVNode(rendered: VNode | VNode[]) {
    if (this.props.css && rendered) {
      const styleVNode = {
        nodeName: 'style',
        attributes: {},
        children: [this.props.css],
      }
      if ((rendered as VNode[]).push) {
        ; (rendered as VNode[]).push(styleVNode as ObjectVNode)
      } else {
        ; (rendered as ObjectVNode).children.push(styleVNode as ObjectVNode)
      }
    }
  }

  connectedCallback(): void {
    this.injectObject()
    this.attrsToProps()
    this.install()
    this.fire('install', this)
    this.renderRoot = this.createRenderRoot()
    this.applyAdoptedStyleSheets()
    setActiveComponent(this)
    this.beforeRender()
    this.fire('beforeRender', this)
    // @ts-ignore
    const rendered = this.render(this.props, this.store)
    this.appendStyleVNode(rendered)
    this.rendered(rendered)
    clearActiveComponent()
    this.rootElement = diff(null, rendered as VNode, null, this, false)

    if (isArray(this.rootElement)) {
      ; (this.rootElement as Element[]).forEach((item) => {
        this.renderRoot?.appendChild(item)
      })
    } else {
      this.rootElement &&
        this.renderRoot?.appendChild(this.rootElement as Element)
    }
    this.installed()
    this.fire('installed', this)
    this.isInstalled = true

    Promise.resolve().then(() => {
      this.ready()
      this.fire('ready', this)
    })

    this.executeHooks('connected')
  }

  disconnectedCallback(): void {
    this.uninstall()
    this.fire('uninstall', this)
    this.isInstalled = false
    this.executeHooks('disconnected')
  }

  update(updateSelf?: boolean): void {
    this.beforeUpdate()
    this.fire('beforeUpdate', this)
    this.attrsToProps()
    setActiveComponent(this)
    this.beforeRender()
    this.fire('beforeRender', this)
    // @ts-ignore
    const rendered = this.render(this.props, this.store)
    this.appendStyleVNode(rendered)
    this.rendered(rendered)
    clearActiveComponent(null)

    this.rootElement = diff(
      this.rootElement,
      rendered as VNode,
      this.renderRoot as ExtendedElement,
      this,
      !!updateSelf,
    )
    this.updated()
    this.fire('updated', this)
  }

  private updateQueued = false

  queuedUpdate(): void {
    if (!this.updateQueued) {
      this.updateQueued = true
      Promise.resolve().then(() => {
        this.update()
        this.updateQueued = false
      })
    }
  }

  updateProps(obj: Record<string, unknown>): void {
    Object.keys(obj).forEach((key) => {
      this.props[key] = obj[key]
      if (this.prevProps) {
        this.prevProps[key] = obj[key]
      }
    })
    this.update()
  }

  updateSelf(): void {
    this.update(true)
  }

  removeProp(key: string): void {
    this.removeAttribute(key)
    // Avoid executing removeAttribute methods before connectedCallback
    this.isInstalled && this.update()
  }

  setProp(key: string, val: string | object): void {
    if (val && typeof val === 'object') {
      this.setAttribute(key, JSON.stringify(val))
    } else {
      this.setAttribute(key, val)
    }
    // Avoid executing setAttribute methods before connectedCallback
    this.isInstalled && this.update()
  }

  attrsToProps(): void {
    if (this.props.ignoreAttrs) return
    const ele = this
    const constructor = this.constructor as typeof Component
    ele.props['css'] = ele.getAttribute('css')
    const attrs = constructor.propTypes
    if (!attrs) return
    Object.keys(attrs).forEach((key) => {
      if (constructor.isComplexType(key) && constructor.useDOMProperty) return

      const val = ele.getAttribute(hyphenate(key))
      if (val !== null) {
        ele.props[key] = this.getTypeValueOfProp(key, val)
      } else {
        if (
          constructor.defaultProps &&
          constructor.defaultProps.hasOwnProperty(key)
        ) {
          ele.props[key] = constructor.defaultProps[
            key
          ]
        } else {
          ele.props[key] = null
        }
      }
    })
  }

  getTypeValueOfProp(key: string, val: string) {
    const attrs = (this.constructor as typeof Component).propTypes
    const types = isArray(attrs[key]) ? attrs[key] : [attrs[key]]

    for (let i = 0; i < (types as Array<PropType>).length; i++) {
      const type = (types as Array<PropType>)[i]
      switch (type) {
        case String:
          return val
        case Number:
          return Number(val)
        case Boolean:
          return Boolean(val !== 'false' && val !== '0')
        case Array:
        case Object:
          try {
            return JSON.parse(val)
          } catch (e) {
            console.warn(
              `The ${key} object prop does not comply with the JSON specification, the incorrect string is [${val}].`,
            )
          }
      }
    }
  }

  fire(
    name: string,
    data: unknown,
    options?: { bubbles: boolean; composed: boolean },
  ): void {
    const { bubbles, composed } = Object.assign(
      { bubbles: false, composed: false },
      options,
    )
    const handler = this.props[`on${capitalize(name)}`] as Function
    if (handler) {
      handler(
        new CustomEvent(name, {
          detail: data,
          bubbles,
          composed,
        }),
      )
    } else {
      this.dispatchEvent(
        new CustomEvent(name, {
          detail: data,
          bubbles,
          composed,
        }),
      )
    }
  }

  install() { }

  installed() { }

  ready() { }

  uninstall() { }

  beforeUpdate() { }

  updated() { }

  beforeRender() {
    // 针对非omi环境使用children的情况
    if (!this.props.children) {
      this.props.children = convertNodeListToVNodes.call(this, this.childNodes)
    }
  }

  rendered(vnode: VNode | VNode[]) { }

  receiveProps() { }
}

export class FormAssociatedComponent extends Component {
  static formAssociated: boolean = false
  _form: HTMLFormElement | null = null // 引用表单元素
  _inputs: HTMLInputElement[] = [] // 引用表单元素内部的 input 元素
  _internals: ElementInternals | null = null // 表单元素内部对象
  formAssociatedCallback(form: HTMLFormElement) { } // 当组件被添加到表单元素内部时调用
  handleFormData(event: FormDataEvent) { } // 处理表单数据事件
  getFieldValue(): Record<string, any> { } // 返回获取 input 元素的值
  resetFieldValue(): void // 当重新表单时调用
  handleField(event: Event) { } // 处理 input 事件
  formDisabledCallback() { } // 当表单元素被禁用时调用
  formResetCallback() { } // 当表单元素被重置时调用
  formStateRestoreCallback(state: any, mode: any) { } // 当表单元素状态被恢复时调用
}
