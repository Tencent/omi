import Omi from '../../src/index.soda.js';

class Hello extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render(){
        return `<div>Hello, {{name}}</div>`
    }

}

Omi.tag('hello', Hello)

export default  Hello