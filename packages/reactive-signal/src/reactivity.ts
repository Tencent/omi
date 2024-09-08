type Subscriber = () => void;

let activeEffect: Effect | null = null;
let isBatching = false;
let pendingSubscribers: Set<Subscriber> = new Set();

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
  private _value: T;
  private subscribers: Set<Subscriber> = new Set();
  depsComponents = new Set<Component>()
  constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    // 没有在通知，才能添加依赖，否则会导致循环依赖
    if (!this.notifying) {
      if (activeEffect) {
        // computed 内部触发的原始信号的 get value 不用加入原始信号的订阅
        if (activeEffect.run) {
          this.subscribe(activeEffect.run);
        }
        activeEffect.addDependency(this);
      }
    }

    const component = getActiveComponent()
    if (component) this.depsComponents.add(component)
    return this._value;
  }

  set value(newValue: T) {
    // 修改前也有 hook？
    if (newValue !== this._value) {
      this._value = newValue;
      this.notify();

      this.depsComponents.forEach(
        (component) => component[component._tempActiveUpdateFnName!]?.(),
      )
      // 信号值修改后 hook，重置已经执行的 effect
      this.subscribers.forEach(callback => {
        // 重置计算属性的 subscribers，防止不依赖 signal 但依赖 computed的 effect不执行
        // @ts-ignore
        if (callback.computedInstance) {
          // @ts-ignore
          callback.computedInstance.subscribers.forEach(callback => {
            callback.done = false;
          });
        }
        // @ts-ignore
        callback.done = false;
      });
    }
  }

  peek() {
    return this._value;
  }

  update() {
    // 需要对齐 set value？
    this.notify();
  }

  subscribe(callback: Subscriber) {
    this.subscribers.add(callback);
  }

  unsubscribe(callback: Subscriber) {
    this.subscribers.delete(callback);
  }

  private notifying = false;
  private notify() {
    if (isBatching) {
      this.subscribers.forEach(callback => pendingSubscribers.add(callback));
    } else {
      this.notifying = true;
      this.subscribers.forEach(callback => {
        // @ts-ignore
        if (typeof callback === 'function' && !callback.done) {
          // @ts-ignore
          callback.done = true;
          callback();
        }
      });
      this.notifying = false;
    }
  }
}

export class Computed<T> {
  private computeFn: () => T;
  private _value: T;
  private dependencies: Set<Signal<any> | Computed<any>> = new Set();
  private subscribers: Set<Subscriber> = new Set();

  depsComponents = new Set<Component>()

  constructor(computeFn: () => T) {
    this.computeFn = computeFn;
    this._value = this.compute();
  }

  get value(): T {
    if (!this.notifying) {
      if (activeEffect) {
        this.subscribe(activeEffect.run);
        activeEffect.addDependency(this);
      }
    }
    const component = getActiveComponent()
    if (component) this.depsComponents.add(component)
    return this._value;
  }

  peek() {
    return this._value;
  }

  private notifying = false;
  private compute(): T {

    const previousEffect = activeEffect;
    // @ts-ignore
    activeEffect = this;
    const newValue = this.computeFn();
    activeEffect = previousEffect;

    return newValue;
  }

  private recompute = () => {
    const newValue = this.compute();
    if (newValue !== this._value) {
      this._value = newValue;
      this.notify();
      this.depsComponents.forEach(
        (component) => component[component._tempActiveUpdateFnName!]?.(),
      )
    }
  }

  subscribe(callback: Subscriber) {
    if (callback) {
      this.subscribers.add(callback);
    }
  }

  unsubscribe(callback: Subscriber) {
    this.subscribers.delete(callback);
  }

  private notify() {
    if (isBatching) {
      this.subscribers.forEach(callback => pendingSubscribers.add(callback));
    } else {
      this.notifying = true;
      this.subscribers.forEach(callback => {
        // @ts-ignore
        if (!callback.done) {
          // @ts-ignore
          callback.done = true;
          callback();
        }
      });
      this.notifying = false;
    }
  }

  addDependency(dep: Signal<any> | Computed<any>) {
    this.dependencies.add(dep);
    // 订阅重新计算
    dep.subscribe(this.recompute);
    // @ts-ignore
    this.recompute.computedInstance = this;
  }
}

export class Effect {
  private effectFn: () => void;
  private dependencies: Set<Signal<any> | Computed<any>> = new Set();
  private disposed = false;

  constructor(effectFn: () => void) {
    this.effectFn = effectFn;
    this.run();
  }

  run = () => {
    if (this.disposed) return;
    const previousEffect = activeEffect;
    activeEffect = this;
    this.effectFn();
    activeEffect = previousEffect;
  }

  addDependency(dep: Signal<any> | Computed<any>) {
    if (this.disposed) return;
    this.dependencies.add(dep);
    // @ts-ignore
    this.run.effectInstance = this;
    dep.subscribe(this.run);
  }

  private cleanup() {
    this.dependencies.forEach(dep => dep.unsubscribe(this.run));
    this.dependencies.clear();
  }

  dispose() {
    this.cleanup();
    this.disposed = true;
  }
}

// Factory functions
export function signal<T>(value: T): Signal<T> {
  return new Signal(value);
}

export function computed<T>(computeFn: () => T): Computed<T> {
  return new Computed(computeFn);
}

export function effect(effectFn: () => void): () => void {
  const eff = new Effect(effectFn);
  return () => eff.dispose();
}

export function batch(fn: () => void) {
  isBatching = true;
  try {
    fn();
  } finally {
    isBatching = false;
    pendingSubscribers.forEach(callback => {
      // @ts-ignore
      if (!callback.done) {
        // @ts-ignore
        callback.done = true;
        callback();
      }
    });
    pendingSubscribers.forEach(callback => {
      // @ts-ignore
      callback.done = false;
    });
    pendingSubscribers.clear();
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
