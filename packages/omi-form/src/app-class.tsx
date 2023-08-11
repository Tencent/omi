class unit {
	constructor(items: Array<Object>, value?: Object, canReset?: Boolean, onSubmit?: any) {
		this.items = items;
		this.value = value || {},
			this.canReset = canReset || true,
			this.onSubmit = onSubmit || null
	}
	items: Array<any>
	value: any
	canReset: Boolean
	onSubmit: any

}

export { unit }