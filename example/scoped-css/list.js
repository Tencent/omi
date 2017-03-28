import Omi from '../../src/index.js';

class List extends Omi.Component {
    constructor(data,option) {
        super(data,option);
    }

    style(){
        return `ul{font-size:40px;}`
    }

    render () {
        return ` <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`;
    }
}

export default List;
