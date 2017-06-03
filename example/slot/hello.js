import Omi from '../../src/index.js';

class Hello extends Omi.Component {

    style(){
        return `div{
            cursor: pointer;
        }`
    }

    clickHandler(evt){
        alert(evt.target.innerHTML)
    }

    render(){
        return `
        <div onclick="clickHandler">
            <div>Hello, {{name}}</div>
            <slot></slot>
            <slot></slot>
        </div>`
    }
}

export default  Hello