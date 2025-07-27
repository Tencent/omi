import { h, tag, render, Component, FormAssociatedComponent } from '@/index'
import forwardRef from '@/hooks/forwardRef'
import formAssociated from '@/hooks/formAssociated'

// 测试forwardRef钩子
describe('forwardRef hook', () => {
  describe('initial method', () => {
    it('should define ref property on component', () => {
      const mockComponent = {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        fire: jest.fn(),
        props: {},
      }

      forwardRef.initial(mockComponent)

      expect(mockComponent.ref).toBeDefined()
      expect(mockComponent.ref.current).toBeUndefined()
    })

    it('should create proxy ref that triggers events', () => {
      const mockComponent = {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        fire: jest.fn(),
        props: {},
      }

      forwardRef.initial(mockComponent)

      const mockElement = document.createElement('div')
      mockComponent.ref.current = mockElement

      expect(mockComponent.fire).toHaveBeenCalledWith(
        'refAttached',
        expect.objectContaining({
          ref: mockElement,
          target: mockComponent,
        }),
        { bubbles: true, composed: true },
      )
    })

    it('should add event listener for refAttached', () => {
      const mockComponent = {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        fire: jest.fn(),
        props: {},
      }

      forwardRef.initial(mockComponent)

      expect(mockComponent.addEventListener).toHaveBeenCalledWith(
        'refAttached',
        mockComponent._onRefAttached,
      )
    })
  })

  describe('disconnected method', () => {
    it('should remove event listener', () => {
      const mockComponent = {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        fire: jest.fn(),
        props: {},
        _onRefAttached: jest.fn(),
      }

      forwardRef.disconnected(mockComponent)

      expect(mockComponent.removeEventListener).toHaveBeenCalledWith(
        'refAttached',
        mockComponent._onRefAttached,
      )
    })
  })

  describe('ref forwarding behavior', () => {
    it('should forward ref from props when refAttached event occurs', () => {
      const mockComponent = {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        fire: jest.fn(),
        props: {
          ref: { current: null },
        },
      }

      forwardRef.initial(mockComponent)

      // 模拟refAttached事件
      const mockRef = document.createElement('input')
      const event = {
        detail: {
          ref: mockRef,
          target: {
            /* 其他组件 */
          },
        },
      }

      mockComponent._onRefAttached(event)

      expect(mockComponent.props.ref.current).toBe(mockRef)
    })
  })
})

// 测试formAssociated钩子
describe('formAssociated hook', () => {
  describe('define method', () => {
    it('should add formAssociatedCallback to component prototype', () => {
      const MockClass = class extends FormAssociatedComponent {}

      formAssociated.define(MockClass)

      expect(typeof MockClass.prototype.formAssociatedCallback).toBe('function')
    })
  })

  describe('initial method', () => {
    it('should initialize form-related methods', () => {
      const mockComponent = {
        shadowRoot: {
          querySelectorAll: jest.fn().mockReturnValue([]),
        },
        attachInternals: jest.fn().mockReturnValue({}),
      }

      formAssociated.initial(mockComponent)

      expect(typeof mockComponent.getFieldValue).toBe('function')
      expect(typeof mockComponent.resetFieldValue).toBe('function')
      expect(typeof mockComponent.handleFormData).toBe('function')
      expect(mockComponent._internals).toBeDefined()
    })

    it('should create getFieldValue method that extracts input values', () => {
      const mockInputs = [
        { name: 'field1', value: 'value1' },
        { name: 'field2', value: 'value2' },
      ]

      const mockComponent = {
        shadowRoot: {
          querySelectorAll: jest.fn().mockReturnValue(mockInputs),
        },
        attachInternals: jest.fn().mockReturnValue({}),
      }

      formAssociated.initial(mockComponent)

      const values = mockComponent.getFieldValue()

      expect(values).toEqual({
        field1: 'value1',
        field2: 'value2',
      })
    })

    it('should create resetFieldValue method that clears input values', () => {
      const mockInputs = [
        { name: 'field1', value: 'value1' },
        { name: 'field2', value: 'value2' },
      ]

      const mockComponent = {
        shadowRoot: {
          querySelectorAll: jest.fn().mockReturnValue(mockInputs),
        },
        attachInternals: jest.fn().mockReturnValue({}),
      }

      formAssociated.initial(mockComponent)

      mockComponent.resetFieldValue()

      expect(mockInputs[0].value).toBe('')
      expect(mockInputs[1].value).toBe('')
    })

    it('should create handleFormData method that appends field values', () => {
      const mockComponent = {
        shadowRoot: {
          querySelectorAll: jest.fn().mockReturnValue([]),
        },
        attachInternals: jest.fn().mockReturnValue({}),
        getFieldValue: jest.fn().mockReturnValue({
          'test-field': 'test-value',
          'another-field': 'another-value',
        }),
      }

      formAssociated.initial(mockComponent)

      const mockFormData = {
        append: jest.fn(),
      }

      mockComponent.handleFormData({ formData: mockFormData })

      expect(mockFormData.append).toHaveBeenCalledWith(
        'test-field',
        'test-value',
      )
      expect(mockFormData.append).toHaveBeenCalledWith(
        'another-field',
        'another-value',
      )
    })
  })

  describe('connected method', () => {
    it('should execute without errors', () => {
      const mockComponent = {}

      expect(() => {
        formAssociated.connected(mockComponent)
      }).not.toThrow()
    })
  })
})
