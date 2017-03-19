import Omi from 'omi';
import List from '../list/index.js';


Omi.makeHTML('List', List);

class Sidebar extends Omi.Component {
    constructor(data) {
        super(data);
    }

    storeToData(){
        this.data.height = window.innerHeight -45;
    }

    style () {
        return require('./index.css');
    }

    render () {
        return require('./index.html');
    }
}

export default Sidebar;