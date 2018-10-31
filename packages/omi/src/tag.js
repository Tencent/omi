import { define } from './define'
import WeElement from './we-element'
export function tag(name, pure) {
	return function(target) {
		target.pure = pure
		define(name, target)
	}
}
