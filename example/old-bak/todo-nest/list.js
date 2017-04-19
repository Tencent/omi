import Omi from '../../src/index.js';

class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render () {
        return ` <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`;
    }
}

export default List;
