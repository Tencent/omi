import { Component } from './component'
import { isPrimitive } from './utils'

type EffectFn = () => void;
type ComputedFn<T> = () => T;

let activeEffect: EffectFn | null = null
let batchQueue: EffectFn[] = []

interface SignalValue<T> {
  value: T;
  peek: () => T;
  update: () => void;
}
let activeComponent: Component | null = null

export function setActiveComponent(component: Component | null): void {
  activeComponent = component
}

export function getActiveComponent(): Component | null {
  return activeComponent
}

/**
 * Creates a signal with an initial value.
 * @param initialValue - The initial value of the signal.
 * @returns A signal object with `value` and `peek` properties.
 */
export function signal<T>(initialValue: T): SignalValue<T> {
  let value = initialValue
  const deps = new Set<EffectFn>()
  const depsComponents = new Set<Component>()

  return new Proxy({} as SignalValue<T>, {
    get(_, prop: keyof SignalValue<T>) {
      if (prop === 'value') {
        if (activeEffect) {
          deps.add(activeEffect)
          // @ts-ignore
          activeEffect.deps.add({ deps, value })
        }
        const component = getActiveComponent()
        if (component) depsComponents.add(component)
        return value
      }
      if (prop === 'peek') return () => value
      if (prop === 'update') return () => {
        value = value
        deps.forEach(fn => fn())
        depsComponents.forEach(component => component.update())
      }
    },
    set(_, prop: keyof SignalValue<T>, newValue: T) {
      if (prop === 'value') {
        if(!isPrimitive(value) ||  !isPrimitive(newValue) || value !== newValue) {
          value = newValue
          deps.forEach(fn => fn())
          depsComponents.forEach(component => component.update())
        }    
        return true
      }
      return false
    }
  })
}

/**
 * Creates a computed signal based on a function.
 * @param fn - The function to compute the signal value.
 * @returns A computed signal object.
 */
export function computed<T>(fn: ComputedFn<T>): SignalValue<T> {
  const computedSignal = signal<T>(fn())
  effect(() => {
    computedSignal.value = fn()
  })
  return computedSignal
}

/**
 * Creates an effect based on a function.
 * @param fn - The function to create the effect.
 */
export function effect(fn: EffectFn): () => void {
  const deps = new Set<SignalValue<any>>()

  // Create a new effect function to collect dependencies and run the original function
  const effectFn = () => {
    activeEffect = effectFn
    fn()
    activeEffect = null
  }

  effectFn.deps = deps

  // Run the effect function for the first time
  effectFn()

  // Return a dispose function to cancel the effect
  return () => {
    deps.forEach(dep => {
      // @ts-ignore
      dep.deps.delete(effectFn)
    })
    deps.clear()
  }
}

/**
 * Batches multiple updates into a single update.
 * @param fn - The function to batch.
 */
export function batch(fn: EffectFn): void {
  batchQueue.push(fn)
  if (batchQueue.length === 1) {
    Promise.resolve().then(runBatch)
  }
}

/**
 * Runs all functions in the batch queue.
 */
export function runBatch(): void {
  while (batchQueue.length) {
    const fn = batchQueue.shift()
    if (fn) fn()
  }
}