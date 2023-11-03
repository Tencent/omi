/**
 * An object containing registered directives.
 */
export const directives: { [key: string]: Function } = {}

/**
 * Registers a directive with the specified name and handler.
 * @param name - The name of the directive.
 * @param handler - The handler function for the directive.
 */
export function registerDirective(name: string, handler: Function) {
  directives['o-' + name] = handler
}