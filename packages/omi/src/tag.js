import { define } from './define'

export function tag(name, pure) {
	return function (target) {
		target.pure = pure
		define(name, target)
	}
}