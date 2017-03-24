import Omi from '../../src/index.js';
import Test from './test.js';
Omi.makeHTML('Test', Test);

class List extends Omi.Component {
    constructor(data) {
        super(data)
    }

    render () {
        return ` <div>
                    <Test data-name="abc"/>
                    <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>
                </div>`
    }
}

export default List;
