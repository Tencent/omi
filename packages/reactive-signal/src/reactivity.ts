import { isPrimitive } from './utils'

type EffectFn = () => void
type ComputedFn<T> = () => T

let activeEffect:
  | (EffectFn & { deps?: Set<{ value: any; deps: Set<EffectFn> }> })
  | null = null
let batchQueue: Set<EffectFn> = new Set()
let effectsToRun: Set<EffectFn> = new Set()
let inBatch = false // Add a flag to check if we are in batch

export interface SignalValue<T> {
  value: T
  peek: () => T
  update: () => void
}

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
          activeEffect.deps?.add({ value, deps }) // Add the dependency to the active effect
        }
        const component = getActiveComponent()
        if (component) depsComponents.add(component)
        return value
      }
      if (prop === 'peek') return () => value
      if (prop === 'update')
        return () => {
          // prevent duplicate effect execution caused by computed
          batch(() => {
            value = value
            deps.forEach((fn) => (inBatch ? effectsToRun.add(fn) : fn()))
            depsComponents.forEach(
              (component) => component[component._tempActiveUpdateFnName!]?.(),
            )
          })
        }
    },
    set(_, prop: keyof SignalValue<T>, newValue: T) {
      if (prop === 'value') {
        if (
          !isPrimitive(value) ||
          !isPrimitive(newValue) ||
          value !== newValue
        ) {
          // prevent duplicate effect execution caused by computed
          batch(() => {
            value = newValue
            deps.forEach((fn) => (inBatch ? effectsToRun.add(fn) : fn()))
            depsComponents.forEach(
              (component) => component[component._tempActiveUpdateFnName!]?.(),
            )
          })
        }
        return true
      }
      return false
    },
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
  const deps = new Set<{ value: any; deps: Set<EffectFn> }>()
  let isRunning = false // Add a flag to check if the effect function is currently running

  // Create a new effect function to collect dependencies and run the original function
  const effectFn = Object.assign(
    () => {
      if (isRunning) return // If the effect function is already running, return directly
      isRunning = true // Start running the effect function
      activeEffect = effectFn
      fn()
      activeEffect = null
      isRunning = false // Finish running the effect function
    },
    { deps },
  )

  // Run the effect function for the first time, which will collect dependencies
  effectFn()

  // Return a dispose function to cancel the effect
  return () => {
    deps.forEach((dep) => dep.deps.delete(effectFn)) // Remove the effect function from the dependencies
  }
}

/**
 * Batches multiple updates into a single update.
 * @param fn - The function to batch.
 */
export function batch(fn: EffectFn): void {
  inBatch = true // Start batch
  batchQueue.add(fn)
  if (batchQueue.size === 1) {
    runBatch()
  }
}

/**
 * Runs all functions in the batch queue.
 */
export function runBatch(): void {
  while (batchQueue.size) {
    const fn = batchQueue.values().next().value
    if (fn) {
      fn()
      batchQueue.delete(fn)
    }
  }

  effectsToRun.forEach((effectFn) => effectFn())
  effectsToRun.clear()
  inBatch = false // End batch
}

export type SignalObject<T> = {
  [K in keyof T]: SignalValue<T[K]>
}

export function signalObject<T>(initialValues: T): SignalObject<T> {
  const signals = Object.entries(initialValues as object).reduce(
    (acc, [key, value]) => {
      acc[key] = signal<T[keyof T]>(value as T[keyof T])
      return acc
    },
    {} as { [key: string]: SignalValue<T[keyof T]> },
  )

  return signals as SignalObject<T>
}
