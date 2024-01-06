import { Component, classNames, h, tag } from 'omi'
import Joi, { Schema, ValidationResult, ValidationError } from 'joi'
// @ts-ignore
import formTheme from './theme.css?raw'
import { localeErrorMessages } from './locale'
export { registerLocale } from './locale'
import { renderComponent, defaultRenderer } from './renderer'
export { registerRenderer } from './renderer'
import { DEFAULT_LABEL_WIDTH, PRIMARY_COLOR, LIST_LEVEL_INDENT } from './constants'
import { hexToHsl, deepCopy, extractValues, addPxIfNeeded } from './utils'

interface FormProps {
  config: FormConfig
}

export interface FormComponent {
  type: string
  name?: string
  items?: FormComponent[]
  components?: FormComponent[]
  value?: any
  error?: string | null
  itemTemplate?: FormComponent
  dependsOn?:
    | string
    | ((values: Record<string, any>) => boolean)
    | { name: string; value: any }
  column?: number // 1-12
  text?: string
  component?: string
  props?: Record<string, any>
  label?: string
  tooltip?: string
  description?: string
  placeholder?: string
  options?: { value: string; label: string }[]
  src?: string
  alt?: string
}

interface FormConfig {
  primaryColor?: string
  components: FormComponent[]
  submitButton: boolean
  resetButton: boolean
  labelStyle: {
    width: string | number
    align: 'left' | 'right' | 'top'
  }
  validate?: (joi: typeof Joi) => Schema
  locale?: string
  error?: ValidationError | null
  style?: Record<string, string>
}

@tag('o-form')
export class Form extends Component<FormProps> {
  static css = formTheme

  config: FormConfig = {
    components: [],
    submitButton: true,
    resetButton: true,
    labelStyle: {
      width: DEFAULT_LABEL_WIDTH,
      align: 'right', // left, right, top
    },
  }
  values: Record<string, any> = {}

  install() {
    Object.assign(this.config, this.props.config)

    this.resetValues(this.props.values)
  }

  joiSchema?: Schema

  receiveProps(props: FormProps) {
    Object.assign(this.config, props.config)
    this.initPrimaryColor()
    this.joiSchema = props.config?.validate?.(Joi)
  }

  validate(): ValidationResult | undefined {
    this.values = extractValues(this.props.config.components)
    const value = this.joiSchema?.validate(this.values, {
      abortEarly: false,
      errors: { language: this.props.config.locale || 'en' },
      // @ts-ignore
      messages: localeErrorMessages,
    })
    this.resetErrors(this.config.components)

    if (value) {
      value.error?.details?.forEach((detail) => {
        const field = this.findFieldByName(this.config.components, detail.path[0])
        if (field) {
          field.error = detail.message
        }
      })

      this.config.error = value.error as ValidationError

      return value
    }
  }

  resetErrors = (components: FormComponent[]) => {
    for (const component of components) {
      component.error = null
      if (component.type === 'list') {
        component.items?.forEach((item) => this.resetErrors(item.components || []))
      } else if (component.type === 'group') {
        this.resetErrors(component.components || [])
      }
    }
  }

  onSubmit = (e: Event) => {
    e.preventDefault()

    const value = this.validate()

    if (value?.error) {
      this.update()
    } else {
      this.fire('submit', {
        values: this.values,
        nativeEvent: e,
      })
    }
  }

  resetComponent = (component: FormComponent) => {
    component.value = undefined
    component.error = null
    if (component.type === 'list') {
      component.items = []
    } else if (component.type === 'group') {
      component.components?.forEach((childComponent) =>
        this.resetComponent(childComponent)
      )
    }
  }

  onReset = () => {
    this.config.error = null
    for (const component of this.config.components) {
      this.resetComponent(component)
    }
    this.update()
  }

  addListItem = (component: FormComponent, index?: number) => {
    if (!component.itemTemplate) {
      throw new Error('itemTemplate is required for list')
    }

    if (!component.items) {
      component.items = []
    }

    if (index !== undefined) {
      component.items.splice(index + 1, 0, deepCopy(component.itemTemplate))
    } else {
      component.items.push(deepCopy(component.itemTemplate))
    }

    this.values = extractValues(this.config.components)
    this.resetValues(this.values)
    this.update()
  }

  removeListItem = (component: FormComponent, index: number) => {
    component.items?.splice(index, 1)
    this.update()
    this.values = extractValues(this.config.components)
  }

  handleChange = (component: FormComponent, value: string | boolean) => {
    component.value = value
    this.validate()
    this.resetValues(this.values)
    this.update()

    this.fire('change', {
      values: this.values,
    })
  }

  findFieldByName = (
    components: FormComponent[],
    name: string | number
  ): FormComponent | null => {
    for (const component of components) {
      if (component.name === name) {
        return component
      } else if (component.type === 'list' || component.type === 'group') {
        if (component.components) {
          const foundField = this.findFieldByName(component.components, name)
          if (foundField) {
            return foundField
          }
        }
      }
    }
    return null
  }

  getValueFromNestedStructure = (path: string, values: any): any => {
    if (!path) {
      return undefined
    }
    const pathParts = path.split('.')
    let currentValue = values

    for (const part of pathParts) {
      if (currentValue === undefined || currentValue === null) {
        return undefined
      }

      if (Array.isArray(currentValue) && /^\d+$/.test(part)) {
        currentValue = currentValue[parseInt(part, 10)]
      } else {
        currentValue = currentValue[part]
      }
    }

    return currentValue
  }

  renderComponent = (
    component: FormComponent,
    components: FormComponent[],
    level: number
  ) => {
    if (component.dependsOn) {
      let dependsOnFunc
      if (typeof component.dependsOn === 'string') {
        dependsOnFunc = new Function('values', `return ${component.dependsOn}`)
      } else if (typeof component.dependsOn === 'function') {
        dependsOnFunc = component.dependsOn
      }

      if (dependsOnFunc) {
        const formValues = this.config.components.reduce(
          (values: Record<string, any>, f) => {
            f.name && (values[f.name] = f.value)
            return values
          },
          {}
        )
        if (!dependsOnFunc(formValues)) {
          this.resetComponent(component)
          return null
        }
      } else {
        const dependsOnField = this.findFieldByName(
          components,
          (component.dependsOn as { name: string; value: any }).name
        )
        if (
          dependsOnField &&
          dependsOnField.value !==
            (component.dependsOn as { name: string; value: any }).value
        ) {
          this.resetComponent(component)
          return null
        }
      }
    }

    let element
    switch (component.type) {
      case 'input':
      case 'select':
      case 'checkbox':
      case 'radio':
      case 'textarea':
        element = renderComponent(component, this.handleChange)
        break

      case 'list':
        element = (
          <div
            class="relative"
            style={{
              marginLeft: level * LIST_LEVEL_INDENT,
            }}
          >
            {component.items?.map((item, i) => (
              <div
                class={classNames('relative hover:[&>i]:opacity-100', {
                  'mt-2': i > 0,
                })}
              >
                {this.renderComponent(
                  item,
                  // @ts-ignore
                  component.items,
                  level + 1
                )}
                <i
                  class="minus icon rounded-full absolute inline-block cursor-pointer bg-white opacity-0"
                  onClick={() => this.removeListItem(component, i)}
                ></i>
                <i
                  class="add icon rounded-full absolute inline-block cursor-pointer bg-white opacity-0"
                  onClick={() => this.addListItem(component, i)}
                ></i>
              </div>
            ))}
            <i
              class="add icon rounded-full inline-block cursor-pointer bg-white relative"
              onClick={() => this.addListItem(component)}
            ></i>
          </div>
        )
        break

      case 'group':
        element = (
          <div class="grid">
            {component.components?.map((childComponent, i) => {
              return (
                <div
                  class={classNames(`col-span-${childComponent.span || 12}`, {
                    [`sm:col-span-${childComponent.sm}`]: childComponent.sm,
                    [`md:col-span-${childComponent.md}`]: childComponent.md,
                    [`lg:col-span-${childComponent.lg}`]: childComponent.lg,
                    [`xl:col-span-${childComponent.xl}`]: childComponent.xl,
                    [`xxl:col-span-${childComponent.xxl}`]: childComponent.xxl,
                  })}
                >
                  <div class="w-full">
                    {component.components &&
                      this.renderComponent(
                        childComponent,
                        component.components,
                        level + 1
                      )}
                  </div>
                </div>
              )
            })}
          </div>
        )
        break

      case 'custom':
        // @ts-ignore
        element = <component.component {...component.props} />
        break

      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
      case 'p':
      case 'span':
        return <component.type>{component.text}</component.type>

      case 'divider':
      case 'img':
        return renderComponent(component)
      default:
        const renderer = defaultRenderer[component.type]
        if (renderer) {
          if (renderer.isFormComponent) {
            element = renderComponent(component, this.handleChange)
          } else {
            return renderComponent(component, this.handleChange)
          }
        } else {
          throw new Error(`Unsupported type: ${component.type}`)
        }
    }

    // 只有最外层的表单用 config.labelStyle
    const labelAlign = level ? component.labelStyle?.align : this.config.labelStyle.align
    const labelWidth = level ? component.labelStyle?.width : this.config.labelStyle.width
    return (
      <div
        class={classNames({
          flex: labelAlign !== 'top',
        })}
      >
        {(component.label || (level === 0 && labelAlign !== 'top')) && (
          <div
            class={classNames('inline-block items-center h-8 leading-8 text-sm pr-6', {
              'text-right': labelAlign === 'right',
              'text-left': labelAlign !== 'right',
            })}
            style={{
              width: labelAlign !== 'top' ? addPxIfNeeded(labelWidth) : undefined,
            }}
          >
            <div class="inline-block whitespace-nowrap">
              <label class="flex items-center gap-1">
                <span>{component.label}</span>
                {renderComponent({
                  type: 'tooltip',
                  tooltip: component.tooltip,
                })}
              </label>
            </div>
          </div>
        )}
        <div class="flex-1">
          {element}
          {component.description && (
            <div class="text-6b7280 text-sm mt-1.5" style={'grid-column: span 12'}>
              {component.description}
            </div>
          )}
          {component.error && <div class="text-ef4444 text-sm">{component.error}</div>}
        </div>
      </div>
    )
  }

  initPrimaryColor() {
    const hsl = hexToHsl(this.props.config.primaryColor || PRIMARY_COLOR)
    if (this.shadowRoot) {
      const style = (this.shadowRoot.host as HTMLElement).style
      style.setProperty('--omi-form-primary-hue', hsl[0] + '')
      style.setProperty('--omi-form-primary-saturation', hsl[1] + '%')
      style.setProperty('--omi-form-primary-lightness', hsl[2] + '%')
      style.setProperty(
        '--omi-form-primary-saturation-hover',
        Math.min(100, hsl[1] + 15) + '%'
      )
      style.setProperty(
        '--omi-form-primary-saturation-active',
        Math.max(0, hsl[1] - 15) + '%'
      )
    }

    return hsl
  }

  installed() {
    this.initPrimaryColor()
    this.joiSchema = this.props.config?.validate?.(Joi)
  }

  initValue = (component: FormComponent, level: number, path: string = '', values) => {
    // Build the path for the current component
    const currentPath = path
      ? component.name
        ? `${path}.${component.name}`
        : path
      : component.name

    // Get the value from the nested values structure using the current path
    const formValue = this.getValueFromNestedStructure(currentPath, values)

    // Use the form-wide value if available, otherwise fallback to component.defaultValue
    const value = formValue !== undefined ? formValue : component.defaultValue

    // Update the component's value with the merged value
    component.value = value

    switch (component.type) {
      case 'list':
        component.items?.forEach((item, i) =>
          this.initValue(item, level + 1, `${currentPath}.${i}`, values)
        )

        break

      case 'group':
        component.components?.forEach((childComponent) => {
          this.initValue(childComponent, level + 1, currentPath, values)
        })
        break
    }
  }

  resetValues(values) {
    this.config.components.forEach((component) =>
      this.initValue(component, 0, '', values)
    )
  }

  render(props: FormProps) {
    const marginStyle = {
      marginLeft:
        this.config.labelStyle.align === 'top'
          ? 0
          : addPxIfNeeded(this.config.labelStyle.width),
    }
    return (
      <form
        onSubmit={this.onSubmit}
        onReset={this.onReset}
        class="grid"
        style={props.config.style}
      >
        {this.config.components.map((component, index) => {
          return (
            <div
              class={classNames(`col-span-${component.span || 12}`, {
                [`sm:col-span-${component.sm}`]: component.sm,
                [`md:col-span-${component.md}`]: component.md,
                [`lg:col-span-${component.lg}`]: component.lg,
                [`xl:col-span-${component.xl}`]: component.xl,
                [`xxl:col-span-${component.xxl}`]: component.xxl,
              })}
            >
              {this.renderComponent(component, this.config.components, 0)}
            </div>
          )
        })}

        {this.config.error && (
          <div
            style={{
              'grid-column': 'span 12',
              ...marginStyle,
            }}
          >
            {' '}
            {this.config.error.details.map((detail) => {
              if (detail.path.length === 0) {
                return <div class="text-ef4444 text-sm">* {detail.message}</div>
              }
            })}{' '}
          </div>
        )}

        <div class="flex gap-2" style={marginStyle}>
          {this.config.submitButton && (
            <button class="button submit-button" type="submit">
              Submit
            </button>
          )}
          {this.config.resetButton && (
            <button class="button reset-button" type="reset">
              Reset
            </button>
          )}
        </div>
      </form>
    )
  }
}
