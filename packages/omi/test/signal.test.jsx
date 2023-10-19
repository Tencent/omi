import { Signal } from '@/index'

describe('Signal', () => {
  it('should initialize with the correct value', () => {
    const testSignal = new Signal(10)
    expect(testSignal.peek()).toBe(10)
  })

  it('should update the value correctly', () => {
    const testSignal = new Signal(10)
    testSignal.value = 20
    expect(testSignal.peek()).toBe(20)
  })

  it('should compute the correct value', () => {
    const testSignal = new Signal(10)
    const computedSignal = testSignal.computed(() => testSignal.value * 2)
    expect(computedSignal.peek()).toBe(20)
    testSignal.value = 20
    expect(computedSignal.peek()).toBe(40)
  })

  it('should run the effect function', () => {
    let testValue = 0
    const testSignal = new Signal(10)
    testSignal.effect(() => { testValue = testSignal.value })
    testSignal.value = 20
    expect(testValue).toBe(20)
  })

  it('should batch multiple updates into a single update', () => {
    const testSignal = new Signal(10)
    let testValue = 0
    testSignal.effect(() => { testValue = testSignal.value })
    // Promise.resolve
    testSignal.batch(() => {
      testSignal.value = 20
      testSignal.value = 30
    })
    expect(testValue).toBe(10)
  })

  it('should set and get active component correctly', () => {
    const testSignal = new Signal(10)
    const testComponent = { update: () => {} }
    testSignal.setActiveComponent(testComponent)
    expect(testSignal.getActiveComponent()).toBe(testComponent)
  })

  it('should call update function and update value', () => {
    const testSignal = new Signal(10)
    let testValue = 0
    testSignal.update((value) => { testValue = value * 2 })
    expect(testValue).toBe(20)
    expect(testSignal.peek()).toBe(10)
  })
})