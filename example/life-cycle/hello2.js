import Omi from '../../src/index.js';

class Hello extends Omi.Component {

    style(){
        return `div{
            cursor: pointer;
        }`
    }
    install(){
        console.log(111)
    }
    installed(){
        console.log(222)
    }
    clickHandler(evt){
        alert(evt.target.innerHTML)
    }

    render(){
        return `<div onclick="clickHandler">Hello, {{name}}</div>`
    }
}

export default  Hello