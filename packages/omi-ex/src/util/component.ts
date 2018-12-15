import {define, WeElementConstructor} from 'omi'
import {IOmiComponent} from './IOmiComponent'

export const COMPONENT_PREFIX = 'oc-'

export function component(name: string, pure?: boolean) {
  return function (target: WeElementConstructor) {
    const t = target as any as IOmiComponent & {
      pure?: boolean
    }
    t.__omiComponentName = COMPONENT_PREFIX + name
    t.pure = pure
    define(t.__omiComponentName, target)
  }
}
