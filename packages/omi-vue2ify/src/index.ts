import type { ComponentOptions, VNode, CreateElement } from 'vue'
import type Vue from 'vue'

// ============ 类型定义 ============
interface OmiVue2ifyOptions {
  methodNames?: string[]
}

interface ComponentData {
  elRef: HTMLElement | null
  eventHandlers: Map<string, (e: Event) => void>
  processedFunctions: Map<string, (...args: any[]) => any>
}

type OmiComponent = Vue & ComponentData & {
  omiEvents: string[]
  [key: string]: any
}

// ============ 工具函数 ============
/**
 * 检查字符串是否为 kebab-case 格式
 */
function isKebabCase(str: string): boolean {
  return str.includes('-')
}

/**
 * 将 camelCase 转换为 kebab-case
 */
function camelToKebab(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * 将 kebab-case 转换为 camelCase
 */
function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_match, p1) => p1.toUpperCase())
}

/**
 * 解包并格式化属性，分离函数属性、对象属性和普通属性
 */
function processAttrs(attrs: Record<string, any>) {
  const normalAttrs: Record<string, any> = {}
  const objectAttrs: Map<string, any> = new Map()
  const functionAttrs: Map<string, (...args: any[]) => any> = new Map()

  Object.entries(attrs).forEach(([key, value]) => {
    // 跳过事件监听器（由 $listeners 处理）
    if (key.match(/^on[A-Z]/)) {
      return
    }

    if (typeof value === 'function') {
      functionAttrs.set(kebabToCamel(key), value)
    }
    else if (value && typeof value === 'object') {
      // 对象类型需要通过 DOM 属性传递，不能通过 HTML attrs
      objectAttrs.set(kebabToCamel(key), value)
    }
    else {
      // 基本类型使用 kebab-case
      normalAttrs[camelToKebab(key)] = value
    }
  })

  return { normalAttrs, objectAttrs, functionAttrs }
}

// ============ 主函数 ============
/**
 * 将 Omi Web Component 转换为 Vue 2 组件
 * @param tagName - Web Component 标签名
 * @param options - 配置选项
 * @returns Vue 2 组件配置对象
 */
export function omiVue2ify(
  tagName: string,
  options: OmiVue2ifyOptions = {},
): ComponentOptions<any> {
  const { methodNames = [] } = options

  // 预先创建方法代理
  const createMethodProxies = (elRef: HTMLElement | null) => {
    const methods: Record<string, (...args: any[]) => any> = {}
    methodNames.forEach((methodName) => {
      methods[methodName] = (...args: any[]) => {
        if (elRef && typeof (elRef as any)[methodName] === 'function') {
          return (elRef as any)[methodName](...args)
        }
        console.warn(`Method "${methodName}" not found on element`)
      }
    })
    return methods
  }

  // 将 kebab-case 转换为 PascalCase 并添加前缀，避免与 tagName 冲突
  // Vue 会将 PascalCase 组件名和 kebab-case 标签名视为同一组件，因此添加一个前缀
  const componentName = 'OmiWrapper' + tagName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')

  return {
    name: componentName,
    inheritAttrs: false,

    data(): ComponentData {
      return {
        elRef: null,
        eventHandlers: new Map(),
        processedFunctions: new Map(),
      }
    },

    computed: {
      // 获取所有事件名称
      omiEvents(this: OmiComponent): string[] {
        return Object.keys(this.$listeners)
      },
    },

    mounted(this: OmiComponent) {
      const elRef = (this.$refs.elRef as HTMLElement) || null

      if (!elRef) {
        console.warn(`Element ref not found for ${tagName}`)
        return
      }

      this.elRef = elRef

      // 设置事件监听器
      this.omiEvents.forEach((eventName: string) => {
        const camelEventName = kebabToCamel(eventName)
        const kebabEventName = camelToKebab(eventName)

        if (!isKebabCase(kebabEventName) && eventName !== kebabEventName) {
          return
        }

        const handler = (e: Event) => {
          this.$emit(kebabEventName, e)
        }

        this.eventHandlers.set(camelEventName, handler)
        elRef.addEventListener(camelEventName, handler)
      })

      // 设置函数属性和对象属性
      const { objectAttrs, functionAttrs } = processAttrs(this.$attrs)

      // 对象属性通过 DOM 属性传递
      objectAttrs.forEach((value: any, key: string) => {
        (elRef as any)[key] = value
      })

      // 函数属性
      functionAttrs.forEach((fn: (...args: any[]) => any, key: string) => {
        (elRef as any)[key] = fn
        this.processedFunctions.set(key, fn)
      })

      // 暴露方法到组件实例
      if (methodNames.length > 0) {
        const proxiedMethods = createMethodProxies(elRef)
        Object.assign(this, proxiedMethods)
      }
    },

    updated(this: OmiComponent) {
      const elRef = this.elRef
      if (!elRef) {
        return
      }

      // 更新对象属性
      const { objectAttrs, functionAttrs } = processAttrs(this.$attrs)

      objectAttrs.forEach((value: any, key: string) => {
        (elRef as any)[key] = value
      })

      functionAttrs.forEach((fn: (...args: any[]) => any, key: string) => {
        (elRef as any)[key] = fn
      })
    },

    beforeDestroy(this: OmiComponent) {
      const elRef = this.elRef

      if (!elRef) {
        return
      }

      this.eventHandlers.forEach((handler: (e: Event) => void, camelEventName: string) => {
        elRef.removeEventListener(camelEventName, handler)
      })
      this.eventHandlers.clear()

      this.processedFunctions.forEach((_: (...args: any[]) => any, key: string) => {
        delete (elRef as any)[key]
      })
      this.processedFunctions.clear()

      this.elRef = null
    },

    render(this: OmiComponent, h: CreateElement): VNode {
      const children: VNode[] = []

      // 收集默认 slot
      if (this.$slots.default) {
        children.push(...this.$slots.default)
      }

      // 收集具名 slot
      Object.keys(this.$slots).forEach((slotName) => {
        if (slotName === 'default') {
          return
        }

        const vnodes = this.$slots[slotName]
        if (!vnodes) {
          return
        }

        vnodes.forEach((vnode: any) => {
          if (vnode && typeof vnode === 'object') {
            if (!vnode.data) {
              vnode.data = {}
            }
            if (!vnode.data.attrs) {
              vnode.data.attrs = {}
            }
            vnode.data.attrs.slot = slotName
            children.push(vnode)
          }
        })
      })

      // 处理属性（不使用响应式）
      const { normalAttrs } = processAttrs(this.$attrs)

      return h(
        tagName,
        {
          ref: 'elRef',
          attrs: normalAttrs,
        },
        children,
      )
    },
  } as ComponentOptions<any>
}
