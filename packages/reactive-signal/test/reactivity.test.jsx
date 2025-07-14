import { signal, computed, effect, batch, setActiveComponent, clearActiveComponent } from '@/index'

describe('signal', () => {

  it('should initialize with the correct value', () => {
    const testSignal = signal(10)
    expect(testSignal.peek()).toBe(10)
  })


  it('should update the value correctly', () => {
    const testSignal = signal(10)
    testSignal.value = 20
    expect(testSignal.peek()).toBe(20)
  })
})

describe('computed', () => {
  it('should compute the correct value', () => {
    const testSignal = signal(10)
    const computedSignal = computed(() => testSignal.value * 2)
    expect(computedSignal.peek()).toBe(20)
    testSignal.value = 20
    expect(computedSignal.peek()).toBe(40)
  })

  it('should compute the correct value with condition', () => {
    const conditionSignal = signal(true)
    const testSignal = signal(10)
    let effectTime = 0
    const computedSignal = computed(() => {
      effectTime++
      return conditionSignal.value ? 50 : testSignal.value * 2
    })
    expect(effectTime).toBe(1)
    expect(computedSignal.peek()).toBe(50)
    testSignal.value = 20
    expect(effectTime).toBe(1)
    conditionSignal.value = false
    expect(effectTime).toBe(2)
    expect(computedSignal.peek()).toBe(40)
    testSignal.value = 30
    expect(effectTime).toBe(3)
    expect(computedSignal.peek()).toBe(60)
  })

  it('should exec correct times', () => {

    const count = signal(0)
    // Create a computed signal
    const doubleCount = computed(() => count.value * 2)
    let times = 0
    // Create an effect
    effect(() => {
      times++
      console.log(` ${count.value} Double Count: ${doubleCount.value}`)
    })

    // Update the count signal
    count.value = 1
    expect(times).toBe(2)

  })


  it('should exec correct times', () => {

    const count = signal(0)
    // Create a computed signal
    const doubleCount = computed(() => count.value * 2)
    const doubleDoubleCount = computed(() => doubleCount.value * 2)
    let times = 0
    // Create an effect
    effect(() => {
      times++
      console.log(` ${count.value} Double Count: ${doubleCount.value}`)
    })

    // Update the count signal
    count.value = 1
    expect(times).toBe(2)

  })

  it('should not dead loop', () => {
    const todos = signal([
      { text: 'Learn OMI', completed: true },
    ])

    const completedCount = computed(() => {
      return todos.value.filter(todo => todo.completed)
    })

    function addTodo(text) {
      todos.value.push({ text, completed: false })
      todos.update()
    }

    const mockComponent = {
      render() {
        todos.value.map((todo, index) => { })
        return completedCount.value.length
      },

      queuedUpdate() {
        setActiveComponent(mockComponent)
        this.render()
        clearActiveComponent()
      },
    }

    mockComponent.queuedUpdate()
    addTodo()
    addTodo()

    expect(completedCount.value.length).toBe(1)
    expect(todos.value.length).toBe(3)
  })

  it('should get correct value', () => {
    const todos = signal([
      { text: 'Learn OMI', completed: true },
    ])

    const completedCount = computed(() => {
      return todos.value.filter(todo => todo.completed)
    })

    function addTodo(text) {
      todos.value.push({ text, completed: false })
      todos.update()
    }

    let effectTimes = 0
    const mockComponent = {
      render() {
        todos.value.map((todo, index) => { })
        return completedCount.value.length
      },

      update() {
        effectTimes++
      },

      installed() {
        setActiveComponent(mockComponent, 'update')
        this.render()
        clearActiveComponent()
      },
    }

    mockComponent.installed()
    addTodo()
    expect(effectTimes).toBe(2)
  })

  it('should get correct value', () => {
    const count = signal(0)
    const double = computed(() => count.value * 2)
    const triple = computed(() => count.value * 3)
    count.value = 1
    expect(double.value).toBe(2)
    expect(triple.value).toBe(3)
  })

  it('should get correct value', () => {
    const count = signal(0)
    const double = computed(() => count.value * 2)
    const triple = computed(() => count.value * 3)
    batch(() => {
      count.value = 1
    })
    expect(double.value).toBe(2)
    expect(triple.value).toBe(3)
  })

  it('should get correct value', async () => {
    const count = signal(0)
    const double = computed(() => count.value * 2)
    const triple = computed(() => count.value * 3)
    batch(() => {
      count.value = 1
    })
    await Promise.resolve()
    expect(double.value).toBe(2)
    expect(triple.value).toBe(3)
  })
})

describe('effect', () => {
  it('should run the effect function', () => {
    let testValue = 0
    effect(() => { testValue = 10 })
    expect(testValue).toBe(10)
  })


  it('should get correct value', () => {
    const name = signal('Dnt')
    const surname = signal('Zhang')
    const fullName = computed(() => name.value + ' ' + surname.value)

    let effectTimes = 0
    const dispose = effect(() => {
      fullName.value
      effectTimes++
    })
    dispose()
    name.value = 'John'
    expect(effectTimes).toBe(1)
  })


  it('should get correct value', () => {
    const name = signal('Dnt')
    const surname = signal('Zhang')
    const fullName = computed(() => name.value + ' ' + surname.value)

    let effectTimes = 0
    effect(() => {
      fullName.value
      effectTimes++
    })
    name.value = 'John'
    expect(effectTimes).toBe(2)

  })

  it('should get correct value', () => {
    const name = signal('Dnt')
    const surname = signal('Zhang')
    const fullName = computed(() => name.value + ' ' + surname.value)

    let effectTimes = 0
    effect(() => {
      effectTimes++
    })
    name.value = 'John'
    expect(effectTimes).toBe(1)
  })

  it('should get correct value', () => {
    const name = signal('Dnt')
    const surname = signal('Zhang')
    const fullName = computed(() => name.peek() + ' ' + surname.value)

    let effectTimes = 0
    effect(() => {
      fullName.value
      effectTimes++
    })

    name.value = 'John'
    expect(effectTimes).toBe(1)

  })

  it('should get correct value', () => {
    const name = signal('Dnt')
    const surname = signal('Zhang')
    const fullName = computed(() => name.value + ' ' + surname.value)

    let effectTimes = 0
    effect(() => {
      fullName.value
      effectTimes++
    })

    name.value = 'John'
    expect(effectTimes).toBe(2)

  })

  it('should get correct value', () => {
    const name = signal('Dnt')
    const surname = signal('Zhang')
    const fullName = computed(() => name.value + ' ' + surname.value)

    let effectTimes = 0
    effect(() => {
      fullName.value
      effectTimes++
    })

    name.value = 'John'
    surname.value = 'Smith'
    expect(effectTimes).toBe(3)

  })

  it('should get correct value', () => {
    const count = signal(1)
    const doubleCount = computed(() => count.value * 2)

    let effectTimes = 0
    effect(() => {
      count.value
      doubleCount.value
      effectTimes++
    })

    count.value = 2
    expect(doubleCount.value).toBe(4)
    expect(effectTimes).toBe(2)
  })

  it('should get correct value', () => {
    const count = signal(1)
    const doubleCount = computed(() => count.value * 2)

    let effectTimes = 0
    effect(() => {
      doubleCount.value
      effectTimes++
    })

    count.value = 2
    expect(doubleCount.value).toBe(4)
    expect(effectTimes).toBe(2)
  })

  it('should get correct value', () => {
    const count = signal(1)
    const doubleCount = computed(() => count.value * 2)

    let effectTimes = 0
    effect(() => {
      count.value
      effectTimes++
    })

    count.value = 2
    expect(doubleCount.value).toBe(4)
    expect(effectTimes).toBe(2)
  })

  it('should get the value correctly', () => {
    const testSignal = signal([1, 2, 3])
    let effectTimes = 0
    effect(() => {
      testSignal.value
      effectTimes++
    })
    testSignal.value.push(4)
    expect(effectTimes).toBe(1)
  })

  it('should get the value correctly', () => {
    const testSignal = signal([1, 2, 3])
    let effectTimes = 0
    effect(() => {
      testSignal.value
      effectTimes++
    })
    testSignal.value.push(4)
    // same as testSignal.value = testSignal.value
    testSignal.update()
    expect(effectTimes).toBe(2)
  })
})

describe('batch', () => {
  it('should get the value correctly', () => {
    const testSignal = signal(10)
    let effectTimes = 0
    effect(() => {
      testSignal.value
      effectTimes++
    })
    batch(() => {
      testSignal.value = 20
      testSignal.value = 30
      testSignal.value = 40
    })
    expect(effectTimes).toBe(2)
  })

  it('should get the value correctly', async () => {
    const testSignal = signal(10)
    let effectTimes = 0
    effect(() => {
      testSignal.value
      effectTimes++
    })
    batch(() => {
      testSignal.value = 20
      testSignal.value = 30
      testSignal.value = 40
    })
    await Promise.resolve()
    expect(effectTimes).toBe(2)
  })


  it('should get the value correctly', () => {
    const testSignal = signal(10)
    let effectTimes = 0
    effect(() => {
      testSignal.value
      effectTimes++
    })

    testSignal.value = 15

    batch(() => {
      testSignal.value = 20
      testSignal.value = 30
      testSignal.value = 40
    })
    expect(effectTimes).toBe(3)
  })

  it('should get the value correctly', () => {
    const testSignal = signal(10)
    let effectTimes = 0
    effect(() => {
      testSignal.value
      effectTimes++
    })
    // same as testSignal.value = testSignal.value
    testSignal.value = 10

    batch(() => {
      testSignal.value = 20
      testSignal.value = 30
      testSignal.value = 40
    })
    expect(effectTimes).toBe(2)
    expect(testSignal.value).toBe(40)
  })
})

describe('Reactivity for object and array signals', () => {
  it('should track reactivity for an object', () => {
    const obj = signal({ name: 'Dnt', age: 30 })
    let effectTimes = 0
    
    effect(() => {
      obj.value.name
      effectTimes++
    })

    obj.value.name = 'John'
    obj.update()
    expect(effectTimes).toBe(2)
  })

  it('should correctly track array updates', () => {
    const arr = signal([1, 2, 3])
    let effectTimes = 0
    
    effect(() => {
      arr.value.length
      effectTimes++
    })

    arr.value.push(4)
    arr.update()
    expect(effectTimes).toBe(2)
  })
})

describe('Complex dependency graph scenarios', () => {
  it('should handle multi-level nested computed dependencies', () => {
    const a = signal(1)
    const b = signal(2)
    const c = computed(() => a.value + 10)
    const d = computed(() => b.value * 2)
    const e = computed(() => c.value + d.value)
    
    expect(e.peek()).toBe(15) // 11 + 4 = 15
    
    a.value = 5
    expect(e.peek()).toBe(19) // 15 + 4 = 19
    
    b.value = 5
    expect(e.peek()).toBe(25) // 15 + 10 = 25
  })

  it('should handle conditional dependencies within effects', () => {
    const condition = signal(true)
    const a = signal(1)
    const b = signal(2)
    
    let effectValue = 0
    let effectTimes = 0
    
    effect(() => {
      effectTimes++
      effectValue = condition.value ? a.value : b.value
    })
    
    expect(effectTimes).toBe(1)
    expect(effectValue).toBe(1)
    
    a.value = 10
    expect(effectTimes).toBe(2)
    expect(effectValue).toBe(10)
    
    b.value = 20
    expect(effectTimes).toBe(2) 
    
    condition.value = false
    expect(effectTimes).toBe(3)
    expect(effectValue).toBe(20)

    a.value = 100
    expect(effectTimes).toBe(4)

    b.value = 40
    expect(effectTimes).toBe(5)
  })
})

describe('Component Integration', () => {
  it('should handle dependencies correctly on component update', () => {
    const count = signal(0)
    const double = computed(() => count.value * 2)
    
    const mockComponent = {
      renderTimes: 0,
      
      render() {
        this.renderTimes++
        return double.value
      },
      
      update() {
        setActiveComponent(mockComponent, 'update')
        this.render()
        clearActiveComponent()
      }
    }
    
    mockComponent.update()
    expect(mockComponent.renderTimes).toBe(1)
    
    count.value = 1
    expect(mockComponent.renderTimes).toBe(2)
    expect(double.peek()).toBe(2)
  })
})

describe('Error Handling and Edge Cases', () => {
  it('should throw an error when an error occurs inside an effect', () => {
    const count = signal(0)

    effect(() => {
      if (count.value > 0) {
        throw new Error('effect error')
      }
    })

    expect(() => {
      count.value = 1
    }).toThrow('effect error')
  })

  it('should handle disposal of effects', () => {
    const count = signal(0)
    let effectTimes = 0
    
    const dispose = effect(() => {
      count.value
      effectTimes++
    })
    
    count.value = 1
    expect(effectTimes).toBe(2)
    
    dispose()
    
    count.value = 2
    expect(effectTimes).toBe(2) 
  })
  
  it('should support multiple signal changes within a batch update', () => {
    const a = signal(1)
    const b = signal(2)
    const sum = computed(() => a.value + b.value)
    
    let effectTimes = 0
    effect(() => {
      sum.value
      effectTimes++
    })
    
    expect(effectTimes).toBe(1)
    
    batch(() => {
      a.value = 10
      b.value = 20
    })
    
    expect(effectTimes).toBe(2)
    expect(sum.peek()).toBe(30)
  })
})

describe('Advanced Features and Edge Cases', () => {
  it('computed should cache results and only recompute when dependencies change', () => {
    const a = signal(1)
    let computeTimes = 0
    const c = computed(() => {
      computeTimes++
      return a.value * 10
    })

    expect(c.value).toBe(10)
    expect(computeTimes).toBe(1)

    expect(c.value).toBe(10)
    expect(computeTimes).toBe(1)

    a.value = 2

    expect(computeTimes).toBe(2)

    expect(c.value).toBe(20)
    expect(computeTimes).toBe(2)
  })

  it('peek() should allow reading a value without creating a dependency', () => {
    const a = signal(1)
    const b = signal(10)
    let effectTimes = 0

    effect(() => {
      a.value 
      b.peek() 
      effectTimes++
    })

    expect(effectTimes).toBe(1)

    b.value = 20
    expect(effectTimes).toBe(1)

    a.value = 2
    expect(effectTimes).toBe(2)
  })

  it('should detect and throw an error for circular dependencies', () => {
    const enabled = signal(true)
    let c1, c2

    c1 = computed(() => (enabled.value ? 1 : c2.value + 1))
    c2 = computed(() => c1.value + 1)

    expect(c1.value).toBe(1)
    expect(c2.value).toBe(2)

    expect(() => {
      enabled.value = false
    }).toThrow()
  })

  it('should not trigger updates when the value has not changed', () => {
    const count = signal(0)
    let effectTimes = 0
    effect(() => {
      count.value
      effectTimes++
    })

    expect(effectTimes).toBe(1)

    count.value = 0
    expect(effectTimes).toBe(1)

    count.value = 1
    expect(effectTimes).toBe(2)
  })

  it('effect should be able to safely self-dispose during execution', () => {
    const count = signal(0)
    let effectTimes = 0
    let dispose

    dispose = effect(() => {
      count.value 
      effectTimes++

      if (dispose) {
        dispose()
      }
    })

    expect(effectTimes).toBe(1)

    count.value = 1
    expect(effectTimes).toBe(2)

    count.value = 2
    expect(effectTimes).toBe(2)
  })
})
