export const extention = {}

export function extend(name, options) {
	extention[name] = options
}

export function set(origin, path, value) {
	const arr = path.replace(/]/g, '').replace(/\[/g, '.').split('.')
	let current = origin
	for (let i = 0, len = arr.length; i < len; i++) {
			if (i === len - 1) {
					current[arr[i]] = value
			} else {
					current = current[arr[i]]
			}
	}
}

export function get(origin, path) {
	const arr = path.replace(/]/g, '').replace(/\[/g, '.').split('.')
	let current = origin
	for (let i = 0, len = arr.length; i < len; i++) {
		current = current[arr[i]]
	}

	return current
}
