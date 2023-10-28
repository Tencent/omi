/**
 * Defines a custom element.
 * @param tagName - The tagName of the custom element.
 * @param ctor - The constructor function for the custom element.
 */
export function define(tagName: string, ctor: CustomElementConstructor): void {
  if (customElements.get(tagName)) {
    console.warn(`Failed to execute 'define' on 'CustomElementRegistry': the tag name "${tagName}" has already been used with this registry`)
    return
  }
  Object.defineProperty(ctor, 'tagName', { value: tagName, writable: false })
  customElements.define(tagName, ctor)
}

export function tag(tagName: string) {
  return function (target: CustomElementConstructor) {
    define(tagName, target)
  }
}
