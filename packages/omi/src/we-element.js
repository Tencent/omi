import { cssToDom, nProps, isArray } from './util'
import { diff } from './vdom/diff'
import options from './options'
import { proxyUpdate } from './observe'

export default class WeElement extends HTMLElement {
  static is = 'WeElement'

  constructor() {
    super()
    this.props = Object.assign(
      nProps(this.constructor.props),
      this.constructor.defaultProps
    )
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

    !this._isInstalled && this.install()
    let shadowRoot
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

    this.css && shadowRoot.appendChild(cssToDom(this.css()))
    !this._isInstalled && this.beforeRender()
    options.afterInstall && options.afterInstall(this)
    if (this.constructor.observe) {
      proxyUpdate(this)
    }
    this.host = diff(
      null,
      this.render(this.props, this.data, this.store),
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
    !this._isInstalled && this.installed()
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
    diff(this.host, this.render(this.props, this.data, this.store))
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
