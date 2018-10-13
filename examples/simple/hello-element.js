import { WeElement } from '../../src/omi'

class HelloElement extends WeElement {

    static get props(){
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

    render(props) {
        return (
            <div onClick={this.onClick}>
                Hello {props.msg} {props.propFromParent}
            </div>
        )
    }
    
}

customElements.define('hello-element', HelloElement)
