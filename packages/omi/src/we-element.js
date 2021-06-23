import {
	cssToDom,
	isArray,
	getUse,
	hyphenate,
	getValByPath,
	removeItem
} from './util'
import { diff } from './vdom/diff'
import options from './options'
import { getPath } from './util'

let id = 0

export default class WeElement extends HTMLElement {
	static is = 'WeElement'

	constructor() {
		super()
		this.props = Object.assign({}, this.constructor.defaultProps)
		this.elementId = id++
		this.computed = {}
	}

	connectedCallback() {
		let p = this.parentNode
		while (p && !this.store) {
			this.store = p.store
			p = p.parentNode || p.host
		}

		this.attrsToProps()

		if (this.props.use) {
			this.use = this.props.use
		}

		if (this.props.useSelf) {
			this.use = this.props.useSelf
		}

		if (this.use) {
			const use = typeof this.use === 'function' ? this.use() : this.use

			if (options.isMultiStore) {
				let _updatePath = {}
				let using = {}
				for (let storeName in use) {
					_updatePath[storeName] = {}
					using[storeName] = {}
					getPath(use[storeName], _updatePath, storeName)
					getUse(this.store[storeName].data, use[storeName], using, storeName)
					this.store[storeName].instances.push(this)
				}
				this.using = using
				this._updatePath = _updatePath
			} else {
				this._updatePath = getPath(use)
				this.using = getUse(this.store.data, use)
				this.store.instances.push(this)
			}
		}
		if (this.useSelf) {
			const use =
				typeof this.useSelf === 'function' ? this.useSelf() : this.useSelf
			if (options.isMultiStore) {
				let _updatePath = {}
				let using = {}
				for (let storeName in use) {
					getPath(use[storeName], _updatePath, storeName)
					getUse(this.store[storeName].data, use[storeName], using, storeName)
					this.store[storeName].updateSelfInstances.push(this)
				}
				this.usingSelf = using
				this._updateSelfPath = _updatePath
			} else {
				this._updateSelfPath = getPath(use)
				this.usingSelf = getUse(this.store.data, use)
				this.store.updateSelfInstances.push(this)
			}
		}

		if (this.compute) {
			for (let key in this.compute) {
				this.computed[key] = this.compute[key].call(
					options.isMultiStore ? this.store : this.store.data
				)
			}
		}

		this.beforeInstall()
		this.install()
		this.afterInstall()

		let shadowRoot
		if (this.constructor.isLightDom) {
			shadowRoot = this
		} else {

			if (!this.shadowRoot) {
				shadowRoot = this.attachShadow({
					mode: 'open'
				})
			} else {
				shadowRoot = this.shadowRoot
				let fc
				while ((fc = shadowRoot.firstChild)) {
					shadowRoot.removeChild(fc)
				}
			}
		}

		if (this.constructor.css) {
			if (typeof this.constructor.css === 'string') {
				console.log(1111)
				this.styleSheet = new CSSStyleSheet()
				this.styleSheet.replaceSync(this.constructor.css)
			} else {
				console.log(this.constructor.css)
				this.styleSheet = this.constructor.css
			}
			shadowRoot.adoptedStyleSheets = [this.styleSheet]
		}

		if (this.css) {
			shadowRoot.appendChild(
				cssToDom(typeof this.css === 'function' ? this.css() : this.css)
			)
		}

		this.beforeRender()
		options.afterInstall && options.afterInstall(this)

		const rendered = this.render(this.props, this.store)

		this.rootNode = diff(null, rendered, null, this)
		this.rendered()

		if (this.props.css) {
			this._customStyleElement = cssToDom(this.props.css)
			this._customStyleContent = this.props.css
			shadowRoot.appendChild(this._customStyleElement)
		}

		if (isArray(this.rootNode)) {
			this.rootNode.forEach(function (item) {
				shadowRoot.appendChild(item)
			})
		} else {
			this.rootNode && shadowRoot.appendChild(this.rootNode)
		}
		this.installed()
		this._isInstalled = true
	}

	disconnectedCallback() {
		this.uninstall()
		this._isInstalled = false
		if (this.store) {
			if (options.isMultiStore) {
				for (let key in this.store) {
					const current = this.store[key]
					removeItem(this, current.instances)
					removeItem(this, current.updateSelfInstances)
				}
			} else {
				removeItem(this, this.store.instances)
				removeItem(this, this.store.updateSelfInstances)
			}
		}
	}

	update(ignoreAttrs, updateSelf) {
		this._willUpdate = true
		this.beforeUpdate()
		this.beforeRender()
		//fix null !== undefined
		if (this._customStyleContent != this.props.css) {
			this._customStyleContent = this.props.css
			this._customStyleElement.textContent = this._customStyleContent
		}
		this.attrsToProps(ignoreAttrs)

		const rendered = this.render(this.props, this.store)
		this.rendered()

		this.rootNode = diff(
			this.rootNode,
			rendered,
			this.constructor.isLightDom ? this : this.shadowRoot,
			this,
			updateSelf
		)
		this._willUpdate = false
		this.updated()
	}

	forceUpdate() {
		this.update(true)
	}

	updateProps(obj) {
		Object.keys(obj).forEach(key => {
			this.props[key] = obj[key]
			if (this.prevProps) {
				this.prevProps[key] = obj[key]
			}
		})
		this.forceUpdate()
	}

	updateSelf(ignoreAttrs) {
		this.update(ignoreAttrs, true)
	}

	removeAttribute(key) {
		super.removeAttribute(key)
		//Avoid executing removeAttribute methods before connectedCallback
		this._isInstalled && this.update()
	}

	setAttribute(key, val) {
		if (val && typeof val === 'object') {
			super.setAttribute(key, JSON.stringify(val))
		} else {
			super.setAttribute(key, val)
		}
		//Avoid executing setAttribute methods before connectedCallback
		this._isInstalled && this.update()
	}

	pureRemoveAttribute(key) {
		super.removeAttribute(key)
	}

	pureSetAttribute(key, val) {
		super.setAttribute(key, val)
	}

	attrsToProps(ignoreAttrs) {
		if (options.ignoreAttrs || ignoreAttrs) return
		const ele = this
		ele.props['css'] = ele.getAttribute('css')
		const attrs = this.constructor.propTypes
		if (!attrs) return
		Object.keys(attrs).forEach(key => {
			const type = attrs[key]
			const val = ele.getAttribute(hyphenate(key))
			if (val !== null) {
				switch (type) {
					case String:
						ele.props[key] = val
						break
					case Number:
						ele.props[key] = Number(val)
						break
					case Boolean:
						if (val === 'false' || val === '0') {
							ele.props[key] = false
						} else {
							ele.props[key] = true
						}
						break
					case Array:
					case Object:
						if (val[0] === ':') {
							ele.props[key] = getValByPath(val.substr(1), Omi.$)
						} else {
							ele.props[key] = JSON.parse(
								val
									.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4')
									.replace(/'([\s\S]*?)'/g, '"$1"')
									.replace(/,(\s*})/g, '$1')
							)
						}
						break
				}
			} else {
				if (
					ele.constructor.defaultProps &&
					ele.constructor.defaultProps.hasOwnProperty(key)
				) {
					ele.props[key] = ele.constructor.defaultProps[key]
				} else {
					ele.props[key] = null
				}
			}
		})
	}

	fire(name, data) {
		this.dispatchEvent(
			new CustomEvent(name, {
				detail: data
			})
		)
	}

	beforeInstall() { }

	install() { }

	afterInstall() { }

	installed() { }

	uninstall() { }

	beforeUpdate() { }

	updated() { }

	beforeRender() { }

	rendered() { }

	receiveProps() { }
}
