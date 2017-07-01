import Omi from '../../src/index.js';
import HE from './hello2.js';
Omi.tag('aa',HE)
class Hello extends Omi.Component {

    style(){
        return `div{
            cursor: pointer;
        }`
    }

    install(){
        console.log(11)
    }
    installed(){
        console.log(22)
    }
    clickHandler(evt){
        alert(evt.target.innerHTML)
    }

    render(){
        return `<div onclick="clickHandler">Hello, {{name}}<aa></aa></div>`
    }
}

export default  Hello