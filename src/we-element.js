import { vdToDom, cssToDom, npn } from './util'
import { diff } from './vdom/diff';


export default class WeElement extends HTMLElement {
    constructor() {
        super()
        this.props = {}
        this.data = {}
    }

    connectedCallback() {
        this.install()
        const names = this.getAttributeNames()

        names.forEach(name => {
            this.props[npn(name)] = this.getAttribute(name)
        })
        this._vd = this.render()
        this._css = this.css()

        const shadowRoot = this.attachShadow({ mode: 'open' })

        shadowRoot.appendChild(cssToDom(this._css))
        this.host = vdToDom(this._vd)
        shadowRoot.appendChild(this.host)

        this.installed()
    }

    //chain transfer through this method
    attributeChangedCallback(name, pre, current) {
        this.props[npn(name)] = current
        this.update()
    }

    disconnectedCallback() {
        this.uninstall()
    }

    update() {
        diff(this.host, this.render())
    }

    install() {

    }

    installed() {

    }
}
