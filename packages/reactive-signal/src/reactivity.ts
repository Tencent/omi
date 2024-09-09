type Subscriber = () => void

let activeEffect: Effect | null = null
let isBatching = false
let pendingSubscribers: Set<Subscriber> = new Set()

export interface Component {
  queuedUpdate: () => void
  [key: string]: any
  _tempActiveUpdateFnName?: string
}

let activeComponent: Component | null = null

export function setActiveComponent(
  component: Component,
  updateFnName?: string,
): void {
  activeComponent = component
  activeComponent._tempActiveUpdateFnName = updateFnName || 'queuedUpdate'
}

export function clearActiveComponent(): void {
  activeComponent = null
}

export function getActiveComponent(): Component | null {
  return activeComponent
}

export class Signal<T> {
  private _value: T
  private subscribers: Set<Subscriber> = new Set()
  depsComponents = new Set<Component>()
  private notifying = false

  constructor(value: T) {
    this._value = value
  }

  get value(): T {
    // 没有在通知，才能添加依赖，否则会导致循环依赖
    if (!this.notifying) {
      if (activeEffect) {
        // computed 内部触发的原始信号的 get value 不用加入原始信号的订阅
        if (activeEffect.run) {
          this.subscribe(activeEffect.run)
        }
        activeEffect.addDependency(this)
      }
    }

    const component = getActiveComponent()
    if (component) this.depsComponents.add(component)
    return this._value
  }

  set value(newValue: T) {
    // 修改前也有 hook？
    if (newValue !== this._value) {
      this._value = newValue
      this.update()
    }
  }

  peek(): T {
    return this._value
  }

  update(): void {
    this.notify()
    this.depsComponents.forEach(
      (component) => component[component._tempActiveUpdateFnName!]?.(),
    )
    // 信号值修改后 hook，重置已经执行的 effect
    this.subscribers.forEach((callback) => {
      // 重置计算属性的 subscribers，防止不依赖 signal 但依赖 computed的 effect不执行
      if ((callback as any).computedInstance) {
        ;(callback as any).computedInstance.subscribers.forEach(
          (cb: Subscriber) => {
            ;(cb as any).done = false
          },
        )
      }
      ;(callback as any).done = false
    })
  }

  subscribe(callback: Subscriber): void {
    this.subscribers.add(callback)
  }

  unsubscribe(callback: Subscriber): void {
    this.subscribers.delete(callback)
  }

  private notify(): void {
    if (isBatching) {
      this.subscribers.forEach((callback) => pendingSubscribers.add(callback))
    } else {
      this.notifying = true
      this.subscribers.forEach((callback) => {
        if (typeof callback === 'function' && !(callback as any).done) {
          ;(callback as any).done = true
          callback()
        }
      })
      this.notifying = false
    }
  }
}

export class Computed<T> {
  private computeFn: () => T
  private _value: T
  private dependencies: Set<Signal<any> | Computed<any>> = new Set()
  private subscribers: Set<Subscriber> = new Set()
  depsComponents = new Set<Component>()
  private notifying = false

  constructor(computeFn: () => T) {
    this.computeFn = computeFn
    this._value = this.compute()
  }

  get value(): T {
    if (!this.notifying) {
      if (activeEffect) {
        this.subscribe(activeEffect.run)
        activeEffect.addDependency(this)
      }
    }
    const component = getActiveComponent()
    if (component) this.depsComponents.add(component)
    return this._value
  }

  peek(): T {
    return this._value
  }

  private compute(): T {
    const previousEffect = activeEffect
    activeEffect = this as any
    const newValue = this.computeFn()
    activeEffect = previousEffect
    return newValue
  }

  private recompute = (): void => {
    const newValue = this.compute()
    if (newValue !== this._value) {
      this._value = newValue
      this.notify()
      this.depsComponents.forEach(
        (component) => component[component._tempActiveUpdateFnName!]?.(),
      )
    }
  }

  subscribe(callback: Subscriber): void {
    if (callback) {
      this.subscribers.add(callback)
    }
  }

  unsubscribe(callback: Subscriber): void {
    this.subscribers.delete(callback)
  }

  private notify(): void {
    if (isBatching) {
      this.subscribers.forEach((callback) => pendingSubscribers.add(callback))
    } else {
      this.notifying = true
      this.subscribers.forEach((callback) => {
        if (!(callback as any).done) {
          ;(callback as any).done = true
          callback()
        }
      })
      this.notifying = false
    }
  }

  addDependency(dep: Signal<any> | Computed<any>): void {
    this.dependencies.add(dep)
    // 订阅重新计算
    dep.subscribe(this.recompute)
    ;(this.recompute as any).computedInstance = this
  }
}

export class Effect {
  private effectFn: () => void
  private dependencies: Set<Signal<any> | Computed<any>> = new Set()
  private disposed = false

  constructor(effectFn: () => void) {
    this.effectFn = effectFn
    this.run()
  }

  run = (): void => {
    if (this.disposed) return
    const previousEffect = activeEffect
    activeEffect = this
    this.effectFn()
    activeEffect = previousEffect
  }

  addDependency(dep: Signal<any> | Computed<any>): void {
    if (this.disposed) return
    this.dependencies.add(dep)
    ;(this.run as any).effectInstance = this
    dep.subscribe(this.run)
  }

  private cleanup(): void {
    this.dependencies.forEach((dep) => dep.unsubscribe(this.run))
    this.dependencies.clear()
  }

  dispose(): void {
    this.cleanup()
    this.disposed = true
  }
}

// Factory functions
export function signal<T>(value: T): Signal<T> {
  return new Signal(value)
}

export function computed<T>(computeFn: () => T): Computed<T> {
  return new Computed(computeFn)
}

export function effect(effectFn: () => void): () => void {
  const eff = new Effect(effectFn)
  return () => eff.dispose()
}

export function batch(fn: () => void): void {
  isBatching = true
  try {
    fn()
  } finally {
    isBatching = false
    pendingSubscribers.forEach((callback) => {
      if (!(callback as any).done) {
        ;(callback as any).done = true
        callback()
      }
    })
    pendingSubscribers.forEach((callback) => {
      ;(callback as any).done = false
    })
    pendingSubscribers.clear()
  }
}

export type SignalObject<T> = {
  [K in keyof T]: Signal<T[K]>
}

export function signalObject<T>(initialValues: T): SignalObject<T> {
  const signals = Object.entries(initialValues as object).reduce(
    (acc, [key, value]) => {
      acc[key] = signal<T[keyof T]>(value as T[keyof T])
      return acc
    },
    {} as { [key: string]: Signal<T[keyof T]> },
  )

  return signals as SignalObject<T>
}
