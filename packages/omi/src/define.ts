/**
 * Defines a custom element.
 * @param name - The name of the custom element.
 * @param ctor - The constructor function for the custom element.
 */
export function define(name: string, ctor: CustomElementConstructor): void {
  if (customElements.get(name)) {
    console.warn(`Failed to execute 'define' on 'CustomElementRegistry': the name "${name}" has already been used with this registry`)
    return
  }

  customElements.define(name, ctor)
}

export function tag(name: string) {
  return function (target: CustomElementConstructor) {
    define(name, target)
  }
}
