import { cssToDom, nProps } from './util'
import { diff } from './vdom/diff';
import options from './options'

export default class WeElement extends HTMLElement {
    constructor() {
        super()
        this.props =  nProps(this.constructor.props)
        this.data = this.constructor.data || {}
    }

    connectedCallback() {
        this.store = options.store
        if(this.store){
            this.store.instances.push(this)
        }
        this.install()
        
        const shadowRoot = this.attachShadow({ mode: 'open' })

        this.css && shadowRoot.appendChild(cssToDom(this.css()))
        this.host = diff(null, this.render(this.props, (!this.constructor.pure && this.store) ? this.store.data : this.data), {}, false, null, false)
        shadowRoot.appendChild(this.host)

        this.installed()
    }

    disconnectedCallback() {
        this.uninstall()
    }

    update() {
        this.beforeUpdate()
        diff(this.host, this.render(this.props, (!this.constructor.pure && this.store) ? this.store.data : this.data))
        this.afterUpdate()
    }

    fire(name, data){
        this.dispatchEvent(new CustomEvent(name, { detail : data }))
    }

    install() {

    }

    installed() {

    }

    beforeUpdate() {

    }

    afterUpdate() {

    }
}
