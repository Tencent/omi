import Omi from '../../src/index.js';
import List from './list.js';
import config from '../js/config.js';

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
        return `
        .list{
            width:200px;
            text-indent: 20px;
            border-right: 1px solid #eee;
            overflow-x: hidden;
            overflow-y: auto;
            position:fixed;
            top:45px;
        }
        .version{
            height:20px;
        }
        `;
    }

    render () {
        return `
        <div class="list" style="height:{{height}}px;">
           <div class="version"></div>
          {{#items}}<List group-data="data.items" /> {{/items}}
        </div>`;
    }
}

export default Sidebar;