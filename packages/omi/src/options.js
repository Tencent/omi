function getGlobal() {
	if (
		typeof global !== "object" ||
		!global ||
		global.Math !== Math ||
		global.Array !== Array
	) {
		return (
			self ||
			window ||
			global ||
			(function() {
				return this
			})()
		)
	}
	return global
}

/** Global options
 *	@public
 *	@namespace options {Object}
 */
export default {
	store: null,
	root: getGlobal()
}
