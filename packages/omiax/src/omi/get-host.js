export function getHost(component) {
  let base = component.base
  if (base) {
    while (base.parentNode) {
      if (base.parentNode._component) {
        return base.parentNode._component
      } else {
        base = base.parentNode
      }
    }
  }
}