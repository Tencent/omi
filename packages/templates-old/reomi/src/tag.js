import { define } from './define'

export function tag(name) {
  return function(target) {
    define(name, target)
  }
}
