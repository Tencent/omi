import { cssToDom, nProps, isArray } from "./util"
import { diff } from "./vdom/diff"
import options from "./options"

export default class WeElement extends HTMLElement {
	constructor() {
		super()
		this.props = nProps(this.constructor.props)
		this.data = this.constructor.data || {}
	}

	connectedCallback() {
		if (!this.constructor.pure) {
			let p = this.parentNode
			while (p && !this.store) {
				this.store = p.store
				p = p.parentNode || p.host
			}
			if (this.store) {
				this.store.instances.push(this)
			}
		}

		this.install()
		options.afterInstall && options.afterInstall(this)
		const shadowRoot = this.attachShadow({ mode: "open" })

		this.css && shadowRoot.appendChild(cssToDom(this.css()))
		this.beforeRender()
		this.host = diff(
			null,
			this.render(
				this.props,
				!this.constructor.pure && this.store ? this.store.data : this.data
			),
			{},
			false,
			null,
			false
		)
		if (isArray(this.host)) { 
			this.host.forEach(function(item) {
				shadowRoot.appendChild(item)
			})
		} else {
			shadowRoot.appendChild(this.host)
		}
		this.installed()
		this._isInstalled = true
	}

	disconnectedCallback() {
		this.uninstall()
		if (this.store) {
			for (let i = 0, len = this.store.instances.length; i < len; i++) {
				if (this.store.instances[i] === this) {
					this.store.instances.splice(i, 1)
					break
				}
			}
		}
	}

	update() {
		this.beforeUpdate()
		this.beforeRender()
		diff(
			this.host,
			this.render(
				this.props,
				!this.constructor.pure && this.store ? this.store.data : this.data
			)
		)
		this.afterUpdate()
	}

	fire(name, data) {
		this.dispatchEvent(new CustomEvent(name, { detail: data }))
	}

	install() {}

	installed() {}

	uninstall() {}

	beforeUpdate() {}

	afterUpdate() {}

	beforeRender() {}
}
