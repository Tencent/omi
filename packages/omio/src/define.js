import options from './options'

export function define(name, ctor) {
  options.mapping[name] = ctor
}
