/*
 * obaa 2.1.0
 * By dntzhang
 * Github: https://github.com/Tencent/omi/tree/master/packages/obaa
 * MIT Licensed.
 */


// $_r_: root
// $_c_: prop change callback
// $_p_: path

function obaa(target, arr, callback) {

	var eventPropArr = []
	if (isArray(target)) {
		if (target.length === 0) {
			target.$_o_ = {
				$_r_: target,
				$_p_: '#'
			}
		}
		mock(target, target)
	}
	if (target && typeof target === 'object' && Object.keys(target).length === 0) {
		track(target)
		target.$_o_.$_r_ = target
	}
	for (var prop in target) {
		if (target.hasOwnProperty(prop)) {
			if (callback) {
				if (isArray(arr) && isInArray(arr, prop)) {
					eventPropArr.push(prop)
					watch(target, prop, null, target)
				} else if (isString(arr) && prop == arr) {
					eventPropArr.push(prop)
					watch(target, prop, null, target)
				}
			} else {
				eventPropArr.push(prop)
				watch(target, prop, null, target)
			}
		}
	}
	if (!target.$_c_) {
		target.$_c_ = []
	}
	var propChanged = callback ? callback : arr
	target.$_c_.push({
		all: !callback,
		propChanged: propChanged,
		eventPropArr: eventPropArr
	})
}

var triggerStr = [
	'concat',
	'copyWithin',
	'fill',
	'pop',
	'push',
	'reverse',
	'shift',
	'sort',
	'splice',
	'unshift',
	'size'
].join(',')

var methods = [
	'concat',
	'copyWithin',
	'entries',
	'every',
	'fill',
	'filter',
	'find',
	'findIndex',
	'forEach',
	'includes',
	'indexOf',
	'join',
	'keys',
	'lastIndexOf',
	'map',
	'pop',
	'push',
	'reduce',
	'reduceRight',
	'reverse',
	'shift',
	'slice',
	'some',
	'sort',
	'splice',
	'toLocaleString',
	'toString',
	'unshift',
	'values',
	'size'
]

function mock(target, root) {
	methods.forEach(function (item) {
		target[item] = function () {
			var old = Array.prototype.slice.call(this, 0)
			var result = Array.prototype[item].apply(
				this,
				Array.prototype.slice.call(arguments)
			)
			if (new RegExp('\\b' + item + '\\b').test(triggerStr)) {
				for (var cprop in this) {
					if (
						this.hasOwnProperty(cprop) &&
						!isFunction(this[cprop])
					) {
						watch(this, cprop, this.$_o_.$_p_, root)
					}
				}
				//todo
				onPropertyChanged(
					'Array-' + item,
					this,
					old,
					this,
					this.$_o_.$_p_,
					root
				)
			}
			return result
		}
		target[
			'pure' + item.substring(0, 1).toUpperCase() + item.substring(1)
		] = function () {
			return Array.prototype[item].apply(
				this,
				Array.prototype.slice.call(arguments)
			)
		}
	})
}

function watch(target, prop, path, root) {
	if (prop === '$_o_') return
	if (isFunction(target[prop])) return
	if (!target.$_o_) target.$_o_ = {
		$_r_: root
	}
	if (path !== undefined && path !== null) {
		target.$_o_.$_p_ = path
	} else {
		target.$_o_.$_p_ = '#'
	}

	var currentValue = (target.$_o_[prop] = target[prop])
	Object.defineProperty(target, prop, {
		get: function () {
			return this.$_o_[prop]
		},
		set: function (value) {
			var old = this.$_o_[prop]
			this.$_o_[prop] = value
			onPropertyChanged(
				prop,
				value,
				old,
				this,
				target.$_o_.$_p_,
				root
			)
		},
		configurable: true,
		enumerable: true
	})
	if (typeof currentValue == 'object') {
		if (isArray(currentValue)) {
			mock(currentValue, root)
			if (currentValue.length === 0) {
				track(currentValue, prop, path)
			}
		}
		if (currentValue && Object.keys(currentValue).length === 0) {
			track(currentValue, prop, path)
		}
		for (var cprop in currentValue) {
			if (currentValue.hasOwnProperty(cprop)) {
				watch(
					currentValue,
					cprop,
					target.$_o_.$_p_ + '-' + prop,
					root
				)
			}
		}
	}
}

function track(obj, prop, path) {
	if (obj.$_o_) {
		return
	}
	obj.$_o_ = {}
	if (path !== undefined && path !== null) {
		obj.$_o_.$_p_ = path + '-' + prop
	} else {
		if (prop !== undefined && prop !== null) {
			obj.$_o_.$_p_ = '#' + '-' + prop
		} else {
			obj.$_o_.$_p_ = '#'
		}
	}
}


function onPropertyChanged(prop, value, oldValue, target, path, root) {
	if (value !== oldValue && (!(nan(value) && nan(oldValue))) && root.$_c_) {
		var rootName = getRootName(prop, path)
		for (
			var i = 0, len = root.$_c_.length;
			i < len;
			i++
		) {
			var handler = root.$_c_[i]
			if (
				handler.all ||
				isInArray(handler.eventPropArr, rootName) ||
				rootName.indexOf('Array-') === 0
			) {
				handler.propChanged.call(target, prop, value, oldValue, path)
			}
		}
	}

	if (prop.indexOf('Array-') !== 0 && typeof value === 'object') {
		watch(target, prop, target.$_o_.$_p_, root)
	}
}

function isFunction(obj) {
	return Object.prototype.toString.call(obj) == '[object Function]'
}

function nan(value) {
	return typeof value === "number" && isNaN(value)
}

function isArray(obj) {
	return Object.prototype.toString.call(obj) === '[object Array]'
}

function isString(obj) {
	return typeof obj === 'string'
}

function isInArray(arr, item) {
	for (var i = arr.length; --i > -1;) {
		if (item === arr[i]) return true
	}
	return false
}


function getRootName(prop, path) {
	if (path === '#') {
		return prop
	}
	return path.split('-')[1]
}

obaa.add = function (obj, prop) {
	watch(obj, prop, obj.$_o_.$_p_, obj.$_o_.$_r_)
}

obaa.set = function (obj, prop, value) {
	if (obj[prop] === undefined) {
		watch(obj, prop, obj.$_o_.$_p_, obj.$_o_.$_r_)
	}
	obj[prop] = value
}

Array.prototype.size = function (length) {
	this.length = length
}

export default obaa
