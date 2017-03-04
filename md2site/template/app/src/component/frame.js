import Omi from 'omi';
import Content from './content.js';
import Sidebar from './sidebar.js';
import Head from './head/index.js';
import config from '../docs/config.js';
import Pager from './pager.js';

Omi.makeHTML('Content', Content);
Omi.makeHTML('Sidebar', Sidebar);
Omi.makeHTML('Head', Head);
Omi.makeHTML('Pager', Pager);

class Frame extends Omi.Component {
    constructor(data) {
        super(data);
    }

    install() {
        this.setViewport();
        window.onresize = ()=> {
            if(  window.innerWidth < 768) {
                this.refs.main.style.width = '100%';
            }else{
                this.refs.main.style.width = (window.innerWidth - 220)+'px';
            }
        }
    }

    setViewport (){
        if(  window.innerWidth < 768) {
            this.data.width = '100%';
        }else{
            this.data.width = (window.innerWidth - 220)+'px';
        }
    }

    style() {
        return `
    <style>
        .main{
            position: absolute;
            left:220px;
            top:45px;
            height:auto;
        }

        @media only screen and (max-width: 768px) {
            .main{
                left:0%;
            }
        }
    </style>
        `;
    }


    render() {
        return `<div>
                    <Head data-lan="{{lan}}" />
                    <div class="main" ref="main"  style="width:{{width}};">
                        <Content  omi-id="content" data-lan="{{lan}}" />
                        <Pager omi-id="pager" data-lan="{{lan}}" />
                    </div>
                    <Sidebar omi-id="sidebar" data-lan="{{lan}}" />
                </div>`;
    }
}

export default Frame;