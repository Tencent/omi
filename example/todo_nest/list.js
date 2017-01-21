import Omi from '../../src/index.js';

class List extends Omi.Component {
    constructor(data) {
        super(data);
        this.data.items = [];
        console.log(11);
    }

    install (){
        console.log(22);
    }
    installed(){
        console.log(33);
    }

    render () {
        return ` <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`;
    }
}

export default List;
