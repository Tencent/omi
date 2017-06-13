import Omi from '../../src/index.js';

class List extends Omi.Component {
    constructor(data) {
        super(data)
    }

    render () {
        return ` <div>
                    <ul>
                        <li o-repeat="item in items">{{item}}</li>
                    </ul>
                </div>`
    }
}

export default List;
