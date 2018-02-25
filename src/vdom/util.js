export function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}

export function isObject(x) {
    return typeof x === 'object' && x !== null
}
