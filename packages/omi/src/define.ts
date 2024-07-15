import { default as formAssociatedHook } from './hooks/formAssociated'
import { executeComponentHooks, installHook } from './utils'

/**
 * Defines a custom element.
 * @param tagName - The tagName of the custom element.
 * @param ctor - The constructor function for the custom element.
 */
export function define(tagName: string, ctor: CustomElementConstructor): void {
  // 重复定义也需要挂载 tagName，防止重复定义时候被使用没有 tagName 当作函数
  Object.defineProperty(ctor, 'tagName', { value: tagName, writable: false })
  if (customElements.get(tagName)) {
    console.warn(
      `Failed to execute 'define' on 'CustomElementRegistry': the tag name "${tagName}" has already been used with this registry`,
    )
    return
  }
  customElements.define(tagName, ctor)
}

export function tag(tagName: string,options?: {formAssociated?:boolean}) {
  const {formAssociated} = Object.assign({
    formAssociated:false
  },options)
  return function (target: CustomElementConstructor) {
    if(formAssociated ){
      if(formAssociated){
        installHook(target,formAssociatedHook as any)
        // @ts-ignore
        target.formAssociated=true 
      }      
      executeComponentHooks(target,'define')       
    }
    define(tagName, target)
  }
}

export const webcomponent = tag