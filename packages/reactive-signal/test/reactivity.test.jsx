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
    expect(double.value).toBe(0)
    expect(triple.value).toBe(0)
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
    expect(effectTimes).toBe(1)
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
    expect(effectTimes).toBe(2)
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
    expect(effectTimes).toBe(1)
  })
})
