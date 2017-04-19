import Omi from '../../src/index.js';

class Item extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render(){
        return `<div>Hello, {{text}}</div>`
    }

}


export default  Item