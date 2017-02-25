import Omi from '../../src/index.js';
import Content from './content.js';
import Sidebar from './sidebar.js';
import Head from './head.js';
import config from '../js/config.js';

Omi.makeHTML('Content', Content);
Omi.makeHTML('Sidebar', Sidebar);
Omi.makeHTML('Head', Head);

class Frame extends Omi.Component {
    constructor(data) {
        super(data);
    }

    install() {
        this.setViewport();
        window.onreszie = ()=>{
            this.setViewport();
            this.update();
        }
    }

    setViewport (){
        if(  window.innerWidth < 768) {
            this.data.width = '95%';
        }else{
            this.data.width = (window.innerWidth - 220)+'px';
        }
    }

    style() {
        return `
        .main{
            position: absolute;
            left:220px;
            top:45px;
            overflow-x:hidden;
            overflow-y:auto;
            -webkit-overflow-scrolling : touch;
        }

        @media only screen and (max-width: 768px) {
            .main{
                left:2%;
            }


        }
        `;
    }


    render() {
        return `<div>
                <Head data-lan="{{lan}}" />
                <div class="main"  style="width:{{width}};">
                  <Content  omi-id="content" data-lan="{{lan}}" />
                </div>
                <Sidebar omi-id="sidebar" data-lan="{{lan}}" />
                </div>`;
    }
}

export default Frame;