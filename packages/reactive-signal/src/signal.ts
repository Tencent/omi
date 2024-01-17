import {
  signal,
  computed,
  effect,
  batch,
  setActiveComponent,
  getActiveComponent,
} from './reactivity'

export class Signal<T> {
  private _value: T
  private _signal: ReturnType<typeof signal>

  constructor(initialValue: T) {
    this._value = initialValue as unknown as T
    this._signal = signal(initialValue)
  }

  get value() {
    return this._signal.value as T
  }

  set value(newValue: T) {
    this._signal.value = newValue
  }

  peek() {
    return this._signal.peek()
  }

  computed(fn: () => T): Signal<T> {
    return computed(fn) as Signal<T>
  }

  effect(fn: () => void) {
    return effect(fn)
  }

  batch(fn: () => void) {
    return batch(fn)
  }

  setActiveComponent(component: any) {
    return setActiveComponent(component)
  }

  getActiveComponent() {
    return getActiveComponent()
  }

  update(fn?: (value: T) => void) {
    fn && fn(this._value)
    this.value = this.value
  }
}
