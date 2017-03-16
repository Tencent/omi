import Omi from '../../src/index.js';
import store from './todo-data.js';

class List extends Omi.Component {
    constructor(data) {
        super(data);
        this.data = store.data;
    }

    render () {
        return ` <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`;
    }
}

export default List;
