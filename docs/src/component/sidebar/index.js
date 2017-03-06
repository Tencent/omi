import Omi from 'omi';
import List from '../list/index.js';
import config from '../../docs/config.js';

Omi.makeHTML('List', List);

class Sidebar extends Omi.Component {
    constructor(data) {
        super(data);
    }

    install () {
        this.data.items = config['menus'][this.data.lan] ;
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