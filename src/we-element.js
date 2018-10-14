import { cssToDom, npn, isArray, nProps } from './util'
import { diff } from './vdom/diff';


export default class WeElement extends HTMLElement {
    constructor() {
        super()
        this.props =  nProps(this.constructor.props)
        this.data = this.constructor.data || {}
    }

    static get observedAttributes() { 
        if(!this.props) return
        if(isArray(this.props)){
            return this.props
        } else {
            return Object.keys(this.props)
        }
    }

    connectedCallback() {
        this.install()
        
        const shadowRoot = this.attachShadow({ mode: 'open' })

        this.css && shadowRoot.appendChild(cssToDom(this.css()))
        this.host =  diff(null, this.render(this.props, this.data), {}, false, null, false)
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
        this.beforeUpdate()
        diff(this.host, this.render(this.props, this.data))
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
