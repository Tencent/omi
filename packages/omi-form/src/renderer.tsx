import { h } from 'omi'
import { FormComponent } from './index'

type ChangeHandler = (component: FormComponent, value: string | boolean) => void

function input(component: FormComponent, handleChange: ChangeHandler) {
  const type = component.props?.type || 'text'
  return (
    <input
      type={type}
      placeholder={component.placeholder}
      value={component.value}
      onChange={(e) => handleChange(component, (e.target as HTMLInputElement).value)}
      {...component.props}
    />
  )
}

function select(component: FormComponent, handleChange: ChangeHandler) {
  return (
    <select
      value={component.value}
      onChange={(e) => handleChange(component, (e.target as HTMLInputElement).value)}
    >
      {component.options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}

function checkbox(component: FormComponent, handleChange: ChangeHandler) {
  return (
    <label class="text-base">
      <input
        type="checkbox"
        checked={component.value}
        onChange={(e) => handleChange(component, (e.target as HTMLInputElement).checked)}
      />
      {component.text}
    </label>
  )
}

function radio(component: FormComponent, handleChange: ChangeHandler) {
  return (
    <div>
      {component.options.map((option) => (
        <label>
          <input
            type="radio"
            name={component.name}
            value={option.value}
            checked={component.value === option.value}
            onChange={(e) =>
              handleChange(component, (e.target as HTMLInputElement).value)
            }
          />
          {option.label}
        </label>
      ))}
    </div>
  )
}

function textarea(component: FormComponent, handleChange: ChangeHandler) {
  return (
    <textarea
      value={component.value}
      onChange={(e) => handleChange(component, (e.target as HTMLInputElement).value)}
    ></textarea>
  )
}

function divider() {
  return <hr />
}

function img(component: FormComponent) {
  return <img src={component.src} alt={component.alt} />
}

function tooltip(component: FormComponent) {
  if (!component.tooltip) return null
  return (
    <span
      class="block relative"
      style={{ height: 20, width: 20, top: -1 }}
      title={component.tooltip}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#d1d5db"
        style={{
          width: 20,
          height: 20,
        }}
      >
        <path
          fill-rule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </span>
  )
}

export const defaultRenderer: Record<string, Function> = {
  input,
  select,
  checkbox,
  radio,
  textarea,
  divider,
  img,
  tooltip,
}

export function registerRenderer(type: string, rendererFunc: Function) {
  if (typeof rendererFunc !== 'function') {
    throw new Error('rendererFunc must be a function')
  }
  defaultRenderer[type] = rendererFunc
}

export function renderComponent(component: FormComponent, handleChange?: ChangeHandler) {
  const renderer = defaultRenderer[component.type]
  if (!renderer) {
    throw new Error(`No renderer for component type "${component.type}"`)
  }
  try {
    return renderer(component, handleChange)
  } catch (e) {
    console.error(e)
    return null
  }
}
