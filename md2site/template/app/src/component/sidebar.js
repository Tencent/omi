import Omi from 'omi';
import List from './list/index.js';
import config from '../docs/config.js';

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
    <style>
        @media only screen and (max-width: 768px) {
            .list{
                transform: translateX(-100%);
                background-color:white;

                -moz-transition: all .6s ease;
                -o-transition: all .6s ease;
                -webkit-transition: all .6s ease;
                transition: all .6s ease;
            }

               .list.show {
                -moz-transform: translateX(0%) translateZ(0);
                -ms-transform: translateX(0%) translateZ(0);
                -o-transform: translateX(0%) translateZ(0);
                -webkit-transform: translateX(0%) translateZ(0);
                transform: translateX(0%) translateZ(0);
            }
        }

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
    </style>
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