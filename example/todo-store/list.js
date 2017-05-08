import Omi from '../../src/index.js';

class List extends Omi.Component {
    render () {
        return ` <ul>  <li o-repeat="item in items">{{item}}</li></ul>`
    }
}

export default List;
