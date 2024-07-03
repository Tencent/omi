import { ExtendedElement } from './dom'
import { ObjectVNode, VNode } from './vdom'
import './construct-style-sheets-polyfill'
import { Component } from './component'

/**
 * Check if the environment has native custom elements support
 * and apply a shim for the HTMLElement constructor if needed.
 */
;(function () {
  const w = typeof window !== 'undefined' ? window : (global as any)
  if (
    w.Reflect === undefined ||
    w.customElements === undefined ||
    w.customElements.hasOwnProperty('polyfillWrapFlushCallback')
  ) {
    return
  }
  const BuiltInHTMLElement = w.HTMLElement
  w.HTMLElement = function HTMLElement() {
    return Reflect.construct(BuiltInHTMLElement, [], this.constructor)
  }
  HTMLElement.prototype = BuiltInHTMLElement.prototype
  HTMLElement.prototype.constructor = HTMLElement
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement)
})()

/**
 * Convert a kebab-case string to camelCase.
 * @param str - The kebab-case string to convert.
 * @returns The camelCase version of the input string.
 */
export function camelCase(str: string): string {
  return str.replace(/-(\w)/g, (_, $1) => $1.toUpperCase())
}

/**
 * A functional component that renders its children.
 * @param props - The component's props.
 * @returns The component's children.
 */
export function Fragment(props: { children: any }): any {
  return props.children
}

/**
 * Invoke or update a ref, depending on whether it is a function or object ref.
 * @param ref - The ref to apply.
 * @param value - The value to set or pass to the ref.
 */
export function applyRef(
  ref: ((value: any) => void) | { current: any } | null,
  value: any,
): void {
  if (ref != null) {
    if (typeof ref == 'function') ref(value)
    else ref.current = value
  }
}

/**
 * Check if the given object is an array.
 * @param obj - The object to check.
 * @returns True if the object is an array, false otherwise.
 */
export function isArray(obj: unknown): boolean {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

const hyphenateRE = /\B([A-Z])/g

/**
 * Convert a camelCase string to kebab-case.
 * @param str - The camelCase string to convert.
 * @returns The kebab-case version of the input string.
 */
export function hyphenate(str: string): string {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}

/**
 * Capitalize the first letter of each word in a kebab-case string.
 * @param name - The kebab-case string to capitalize.
 * @returns The capitalized version of the input string.
 */
export function capitalize(name: string): string {
  return name
    .replace(/\-(\w)/g, (_, letter) => letter.toUpperCase())
    .replace(/^\S/, (s) => s.toUpperCase())
}

/**
 * Create a new CSSStyleSheet with the given style.
 * @param style - The CSS style to apply to the new stylesheet.
 * @returns The created CSSStyleSheet.
 */
export function createStyleSheet(style: string): CSSStyleSheet {
  const styleSheet = new CSSStyleSheet()
  styleSheet.replaceSync(style)
  return styleSheet
}

/**
 * Check if two nodes are equivalent.
 * @param node - The DOM Node to compare.
 * @param vnode - The virtual DOM node to compare.
 * @param hydrating - If true, ignores component constructors when comparing.
 * @returns True if the nodes are equivalent, false otherwise.
 */
export function isSameNodeType(node: ExtendedElement, vnode: VNode): boolean {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return node.splitText !== undefined
  }

  return isNamedNode(node, (vnode as ObjectVNode).nodeName as string)
}

/**
 * Check if an Element has a given nodeName, case-insensitively.
 * @param node - The DOM Element to inspect the name of.
 * @param nodeName - The unnormalized name to compare against.
 * @returns True if the element has the given nodeName, false otherwise.
 */
export function isNamedNode(node: ExtendedElement, nodeName: string): boolean {
  return (
    node.normalizedNodeName === nodeName ||
    node.nodeName.toLowerCase() === nodeName.toLowerCase()
  )
}

export function createRef() {
  return {}
}

export function bind(
  target: unknown,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  return {
    configurable: true,
    get() {
      const bound = descriptor.value.bind(this)
      Object.defineProperty(this, propertyKey, {
        value: bound,
        configurable: true,
        writable: true,
      })
      return bound
    },
  }
}

export function isObject(item: any) {
  return typeof item === 'object' && !Array.isArray(item) && item !== null
}
// 判断对象是否是一个类
export function isClass(cls:any):boolean{
  let result = false
  if (typeof(cls) === 'function' && cls.prototype) {
      try {
          cls.arguments && cls.caller;
      } catch(e) {
          result=true
      }
  }
  return result;
}



export interface GetClassStaticValueOptions{
  merge?:'none' | 'merge' | 'uniqueMerge'          // 指定合并策略
  default?:any                                    // 当不存在时提供一个默认值
}
/**
 *
 * 获取继承链上指定字段的值
 * 获取类的静态变量值，会沿继承链向上查找，并能自动合并数组和{}值
 *
 * calss A{
 *     static settings={a:1}
 * }
 * calss A1 extends A{
 *     static settings={b:2}
 * }
 *
 * getStaticFieldValue(new A1(),"settings") ==== {a:1,b:2}
 *
 * @param instanceOrClass
 * @param fieldName
 * @param options
 */
export function getClassStaticValue(instanceOrClass:object,fieldName:string,options?:GetClassStaticValueOptions){
  const opts = Object.assign({
      // 是否进行合并,0-代表不合并，也就是不会从原型链中读取，1-使用Object.assign合并,2-使用mergeDeepRigth合并
      // 对数组,0-不合并，1-合并数组,   2-合并且删除重复项
      merge:'uniqueMerge',
      default:null                   // 提供默认值，如果{}和[]，会使用上述的合并策略
  },options) as Required<GetClassStaticValueOptions>

  let proto = isClass(instanceOrClass) ? instanceOrClass : instanceOrClass.constructor
  let fieldValue = (proto as any)[fieldName]
  // 0-{}, 1-[], 2-其他类型
  let valueType = isObject(fieldValue) ? 0 : (Array.isArray(fieldValue) ? 1 : 2)
  // 如果不是数组或者{}，则不需要在继承链上进行合并
  if(opts.merge==='none' || valueType===2){
      return fieldValue
  }

  const defaultValue = valueType===0 ? Object.assign({},opts.default) : (opts.default)

  let values = [fieldValue]

  // 依次读取继承链上的所有同名的字段值
  while (proto){
      proto = (proto as any).__proto__
      if((proto as any)[fieldName]){
          values.push((proto as any)[fieldName])
      }else{
          break
      }
  }
  // 进行合并
  let mergedResult = fieldValue
  if(valueType===0){// Object
      mergedResult =  values.reduce((result,item)=>{
          if(isObject(item)){        // 只能合并字典
              return opts.merge ==='merge' ? Object.assign({},defaultValue,item,result) : Object.assign({},defaultValue,item,result)
          }else{
              return result
          }
      },{})
  }else{  // 数组
      mergedResult =  values.reduce((result,item)=>{
          if(Array.isArray(item)){ // 只能合并数组
              result.push(...item)
          }
          return result
      },[])
  }
  // 删除数组中的重复项
  if(Array.isArray(mergedResult) && opts.merge==='uniqueMerge'){
      mergedResult = Array.from(new Set(mergedResult))
      // 如果提供defaultValue并且数组成员是一个{},则进行合并
      if(isObject(defaultValue)){
          mergedResult.forEach((value:any,index:number) =>{
              if(isObject(value)){
                  mergedResult[index] =  Object.assign({},defaultValue,value)
              }
          })
      }
  }
  return mergedResult || defaultValue
}

