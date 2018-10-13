import { WeElement } from '../../src/omi'

class HelloElement extends WeElement {

    static get observedAttributes() { 
        return ['prop-from-parent']
    }

    onClick = (evt) => {
        console.log(this)
        //trigger CustomEvent
        this.fire('abc', { name : 'dntzhang', age: 12 })
        evt.stopPropagation()
    }

    css() {
        return `
         div{
             color: red;
         }`
    }

    render() {
        return (
            <div onClick={this.onClick}>
                Hello {this.props.msg} {this.props.propFromParent}
            </div>
        )
    }
    
}

customElements.define('hello-element', HelloElement)
