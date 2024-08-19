import { ComponentInstance } from './base-material'
import { ButtonComponent } from './instance/button'
import { SingleLayout } from './layout/single-layout'

const componentMap: Record<string, any> = {
  'button': ButtonComponent,
  'layout': SingleLayout,
  // Add other mappings as needed
}

export function createComponent(instance: ComponentInstance): JSX.Element {
  const ComponentClass = componentMap[instance.type]

  if (ComponentClass) {
    const componentInstance = new ComponentClass()
    componentInstance.instance = instance
    return componentInstance.render()
  }

  return <div>Unknown component type: {instance.type}</div>
}
