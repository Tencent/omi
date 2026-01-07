import { render } from '@testing-library/vue'
import Vue from 'vue'
import { define, Component, h as hOmi } from 'omi'
import { omiVue2ify } from '../src'

// 配置 Vue 忽略所有自定义元素（Web Components）
// 使用通用正则匹配所有包含 '-' 的标签名（自定义元素规范）
Vue.config.ignoredElements = [/^[a-z]+-/]

const oriEventToOmi = (oriEvent) => {
  const eventName = oriEvent.slice(2);
  return eventName[0].toLowerCase() + eventName.slice(1);
}

const isKebabString = (v) => {
  return v.includes('-');
}

const camelToKebab = (omiEvent) => {
  return omiEvent.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

const kebabToCamel = (str) => {
  return str.replace(/-([a-z])/g, (_match, p1) => p1.toUpperCase());
}

// Generate unique component tag name
function generateNodeName() {
  return `my-el-${Math.random().toString(36).substring(2, 8)}`
}

// Create test Omi component
class TestComponent extends Component {
  static propTypes = {
    name: String,
    complexData: Object,
  }

  testMethod() {
    return 'test-result'
  }

  fireEvent() {
    this.fire('testEvent', { data: 'test' })
  }

  render(props) {
    return hOmi('div', { class: 'test-component' }, [
      hOmi('span', { class: 'name' }, props.name || ''),
      hOmi('span', { class: 'complex-data', id: 'complex-data' },
        props.complexData ? `complex-data-${props.complexData.value}` : ''),
      hOmi('button', {
        onClick: this.fireEvent.bind(this),
        id: 'event-button'
      }, 'Fire Event'),
      hOmi('slot', null),
      hOmi('slot', { name: 'named' }, null)
    ])
  }
}

const nodeName = generateNodeName()
define(nodeName, TestComponent)

describe('helper functions', () => {
  it('should convert oriEvent to omiEvent', () => {
    expect(oriEventToOmi('onFileSelect')).toBe('fileSelect')
    expect(oriEventToOmi('onClick')).toBe('click')
    expect(oriEventToOmi('onDragStart')).toBe('dragStart')
  })

  it('should detect kebab-case strings', () => {
    expect(isKebabString('file-select')).toBe(true)
    expect(isKebabString('fileSelect')).toBe(false)
    expect(isKebabString('file-')).toBe(true)
    expect(isKebabString('-file')).toBe(true)
  })

  it('should convert camelCase to kebab-case', () => {
    expect(camelToKebab('fileSelect')).toBe('file-select')
    expect(camelToKebab('fileSelectAaa')).toBe('file-select-aaa')
    expect(camelToKebab('file')).toBe('file')
    expect(camelToKebab('FILE')).toBe('file')
    expect(camelToKebab('fileURL')).toBe('file-url')
  })

  it('should convert kebab-case to camelCase', () => {
    expect(kebabToCamel('file-select')).toBe('fileSelect')
    expect(kebabToCamel('file-select-aaa')).toBe('fileSelectAaa')
    expect(kebabToCamel('file')).toBe('file')
    expect(kebabToCamel('-file')).toBe('File')
  })
})

describe('omiVue2ify', () => {
  it('should create a Vue component from an Omi component', () => {
    const TestVue = omiVue2ify(nodeName, { methodNames: [] })

    const { html } = render(TestVue, {
      propsData: { name: 'test' }
    })

    expect(html()).toContain('test')
  })

  it('should pass props from Vue to Omi component', async () => {
    const TestVue = omiVue2ify(nodeName, { methodNames: [] })

    const { container } = render(TestVue, {
      propsData: {
        name: 'test',
        complexData: { value: 'complex' }
      }
    })

    await Vue.nextTick()

    const webComponent = container.querySelector(nodeName)
    expect(webComponent).not.toBeNull()
    expect(webComponent?.getAttribute('name')).toBe('test')
    expect(webComponent).toBeTruthy()
  })

  it('should transform camelCase props to kebab-case for primitives', async () => {
    const TestVue = omiVue2ify(nodeName, { methodNames: [] })

    const { container } = render(TestVue, {
      propsData: {
        camelCaseProp: 'camel-case-value'
      }
    })

    await Vue.nextTick()

    const element = container.querySelector(nodeName)
    expect(element?.getAttribute('camel-case-prop')).toBe('camel-case-value')
  })

  it('should handle null and undefined prop values', async () => {
    const TestVue = omiVue2ify(nodeName, { methodNames: [] })

    const { container } = render(TestVue, {
      propsData: {
        name: null,
        complexData: undefined
      }
    })

    await Vue.nextTick()

    const webComponent = container.querySelector(nodeName)
    expect(webComponent).not.toBeNull()
    expect(webComponent?.getAttribute('name')).toBe(null)
  })
})

describe('events', () => {
  it('should forward events from Omi component to Vue component', async () => {
    const handleEvent = jest.fn()
    const TestVue = omiVue2ify(nodeName, { methodNames: [] })

    const { container } = render({
      components: { TestComponent: TestVue },
      template: '<test-component @test-event="onTestEvent" />',
      methods: {
        onTestEvent(e) {
          handleEvent(e.detail)
        }
      }
    })

    await Vue.nextTick()

    const webComponent = container.querySelector(nodeName)
    const button = webComponent.shadowRoot.querySelector('#event-button')
    button.click()

    await Vue.nextTick()

    expect(handleEvent).toHaveBeenCalledTimes(1)
    expect(handleEvent).toHaveBeenCalledWith({ data: 'test' })
  })

  it('should clean up event listeners when component unmounts', async () => {
    const handleEvent = jest.fn()
    const TestVue = omiVue2ify(nodeName, { methodNames: [] })

    const { unmount, container } = render({
      components: { TestComponent: TestVue },
      template: '<test-component @test-event="handler" />',
      data() {
        return { handler: handleEvent }
      }
    })

    await Vue.nextTick()

    const webComponent = container.querySelector(nodeName)
    const button = webComponent.shadowRoot.querySelector('#event-button')

    unmount()
    await Vue.nextTick()

    button.click()
    await Vue.nextTick()

    expect(handleEvent).not.toHaveBeenCalled()
  })

  it('should ignore non-kebab-case events', async () => {
    class NonKebabEventComponent extends Component {
      static propTypes = {}

      fireEvent() {
        this.fire('myevent', { data: 'test' })
      }

      render() {
        return hOmi('div', {
          onClick: this.fireEvent.bind(this),
          id: 'non-kebab-event'
        }, 'Non Kebab Event Component')
      }
    }

    const nonKebabNodeName = generateNodeName()
    define(nonKebabNodeName, NonKebabEventComponent)

    const handleEvent = jest.fn()
    const NonKebabVue = omiVue2ify(nonKebabNodeName, { methodNames: [] })

    const { container } = render({
      components: { NonKebabComp: NonKebabVue },
      template: '<non-kebab-comp @myevent="handler" />',
      data() {
        return { handler: handleEvent }
      }
    })

    await Vue.nextTick()

    const webComponent = container.querySelector(nonKebabNodeName)
    webComponent.fire('myevent', { data: 'test' })

    await Vue.nextTick()
    expect(handleEvent).not.toHaveBeenCalled()
  })
})

describe('slots', () => {
  it('should render default slot content', () => {
    const TestVue = omiVue2ify(nodeName, { methodNames: [] })

    const { html } = render({
      components: {
        TestComponent: TestVue
      },
      template: '<test-component><div class="default-slot">Default Slot</div></test-component>'
    })

    expect(html()).toContain('Default Slot')
  })

  it('should render named slot content', () => {
    const TestVue = omiVue2ify(nodeName, { methodNames: [] })

    const { html } = render({
      components: {
        TestComponent: TestVue
      },
      template: '<test-component><template v-slot:named><div class="named-slot">Named Slot</div></template></test-component>'
    })

    expect(html()).toContain('Named Slot')
  })

  it('should handle multiple slot items', () => {
    const TestVue = omiVue2ify(nodeName, { methodNames: [] })

    const { html } = render({
      components: {
        TestComponent: TestVue
      },
      template: `
        <test-component>
          <div class="item-1">Item 1</div>
          <div class="item-2">Item 2</div>
        </test-component>
      `
    })

    expect(html()).toContain('Item 1')
    expect(html()).toContain('Item 2')
  })
})

describe('methods', () => {
  it('should expose methods from Omi component to Vue component', async () => {
    class MethodComponent extends Component {
      static propTypes = {
        testProp: String
      }

      testMethod() {
        return 'test-result'
      }

      render() {
        return hOmi('div', null, 'Method Component')
      }
    }

    const methodNodeName = generateNodeName()
    define(methodNodeName, MethodComponent)

    const MethodVue = omiVue2ify(methodNodeName, {
      methodNames: ['testMethod']
    })

    let methodResult = null
    render({
      components: {
        MethodTest: MethodVue
      },
      template: '<method-test ref="methodComp"></method-test>',
      mounted() {
        methodResult = this.$refs.methodComp.testMethod()
      }
    })

    await Vue.nextTick()

    expect(methodResult).toBe('test-result')
  })

  it('should handle methods with parameters', async () => {
    class ParameterMethodComponent extends Component {
      static propTypes = {}

      echo(message) {
        return `Echo: ${message}`
      }

      sum(a, b) {
        return a + b
      }

      render() {
        return hOmi('div', null, 'Parameter Method Component')
      }
    }

    const paramMethodNodeName = generateNodeName()
    define(paramMethodNodeName, ParameterMethodComponent)

    const ParamMethodVue = omiVue2ify(paramMethodNodeName, {
      methodNames: ['echo', 'sum']
    })

    let echoResult = null
    let sumResult = null

    render({
      components: {
        ParamMethodTest: ParamMethodVue
      },
      template: '<param-method-test ref="methodComp"></param-method-test>',
      mounted() {
        echoResult = this.$refs.methodComp.echo('hello')
        sumResult = this.$refs.methodComp.sum(5, 7)
      }
    })

    await Vue.nextTick()

    expect(echoResult).toBe('Echo: hello')
    expect(sumResult).toBe(12)
  })
})

describe('complex data types', () => {
  it('should properly handle complex data types', async () => {
    class ComplexDataComponent extends Component {
      static propTypes = {
        complexObj: Object
      }

      getComplexData() {
        const props = this.props;
        return props.complexObj;
      }

      render() {
        return hOmi('div', null, 'Complex Data Component')
      }
    }

    const complexNodeName = `complex-${Math.random().toString(36).substr(2, 5)}`
    define(complexNodeName, ComplexDataComponent)

    const ComplexVue = omiVue2ify(complexNodeName, {
      methodNames: ['getComplexData']
    })

    const complexData = { nested: { value: 'test' }, array: [1, 2, 3] }
    let retrievedData = null

    const { container } = render({
      components: { ComplexComp: ComplexVue },
      template: '<complex-comp ref="comp" :complex-obj="complexData" />',
      data() {
        return { complexData }
      },
      mounted() {
        retrievedData = this.$refs.comp.getComplexData()
      }
    })

    await Vue.nextTick()

    const webComponent = container.querySelector(complexNodeName)
    expect(webComponent).not.toBeNull()
    expect(retrievedData).toEqual(complexData)
    expect(retrievedData.nested.value).toBe('test')
    expect(retrievedData.array).toEqual([1, 2, 3])
  })
})

describe('dynamic prop updates', () => {
  it('should update Omi component when Vue component props change', async () => {
    const TestVue = omiVue2ify(nodeName, { methodNames: [] })

    let vmRef = null
    const { container } = render({
      components: { TestComponent: TestVue },
      template: '<test-component :name="name" :complex-data="complexData" />',
      data() {
        return {
          name: 'initial',
          complexData: { value: 'initial' }
        }
      },
      mounted() {
        vmRef = this
      }
    })
    await Vue.nextTick()

    const webComponent = container.querySelector(nodeName)
    expect(webComponent?.getAttribute('name')).toBe('initial')

    // Update data via component instance
    vmRef.name = 'updated'
    vmRef.complexData = { value: 'updated' }

    await Vue.nextTick()

    expect(webComponent?.getAttribute('name')).toBe('updated')

    const complexDataSpan = webComponent.shadowRoot.querySelector('#complex-data')
    expect(complexDataSpan.textContent).toBe('complex-data-updated')
  })
})

describe('lifecycle hooks', () => {
  it('should initialize Omi component when Vue component is mounted', async () => {
    let installCalled = false

    class LifecycleComponent extends Component {
      install() {
        installCalled = true
      }

      render() {
        return hOmi('div', null, 'Lifecycle Component')
      }
    }

    const lifecycleNodeName = generateNodeName()
    define(lifecycleNodeName, LifecycleComponent)

    const LifecycleVue = omiVue2ify(lifecycleNodeName, { methodNames: [] })

    render({
      components: { LifecycleComp: LifecycleVue },
      template: '<lifecycle-comp />'
    })

    await Vue.nextTick()
    expect(installCalled).toBe(true)
  })

  it('should clean up Omi component when Vue component is unmounted', async () => {
    let uninstallCalled = false

    class CleanupComponent extends Component {
      uninstall() {
        uninstallCalled = true
      }

      render() {
        return hOmi('div', null, 'Cleanup Component')
      }
    }

    const cleanupNodeName = generateNodeName()
    define(cleanupNodeName, CleanupComponent)

    const CleanupVue = omiVue2ify(cleanupNodeName, { methodNames: [] })

    const { unmount } = render({
      components: { CleanupComp: CleanupVue },
      template: '<cleanup-comp />'
    })

    unmount()
    await Vue.nextTick()
    expect(uninstallCalled).toBe(true)
  })
})

describe('ref forwarding', () => {
  it('should correctly forward Vue component ref to Omi component instance', async () => {
    const TestVue = omiVue2ify(nodeName, { methodNames: ['testMethod'] })

    let omiInstance = null

    render({
      components: { TestComponent: TestVue },
      template: '<test-component ref="omiComp" />',
      mounted() {
        omiInstance = this.$refs.omiComp
      }
    })

    await Vue.nextTick()

    expect(typeof omiInstance.testMethod).toBe('function')
    expect(omiInstance.testMethod()).toBe('test-result')
  })
})
