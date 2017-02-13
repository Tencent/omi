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
        this.data.height = window.innerHeight - 45;
        this.data.width = window.innerWidth - 220;

        window.onresize = ()=> {
            this.data.height = window.innerHeight - 45;
            this.data.width = window.innerWidth - 220;
            this.update();
        }
    }

    installed() {
        this.highlightBlock(true);
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
        }`;
    }

    afterUpdate() {
        this.highlightBlock();
    }

    _$$(expr, con) {
        return Array.prototype.slice.call((con || document).querySelectorAll(expr));
    }

    highlightBlock(lh) {
        var codes = document.querySelectorAll("code");
        for (let i = 0, len = codes.length; i < len; i++) {
            //innerText bug£¿ie11 remove the \r\n??
            // detail:  http://www.cnblogs.com/fsjohnhuang/p/4319635.html
            // so textContent
            var html = Prism.highlight(codes[i].textContent, Prism.languages.javascript);
            codes[i].innerHTML = html;
            codes[i].classList.add('language-js');
        }

        let pres = document.querySelectorAll("pre");
        let highlight = config.highlight;

        for (let key in config.highlight) {
            pres[key].setAttribute("data-line", highlight[key]);
        }

        this._$$('pre').forEach((item)=> {
            item.classList.add('language-js');
        })

        if (!lh)lineHighLight();
    }

    render() {
        return `<div>
                <Head />
                <div class="main"  style="height:{{height}}px;width:{{width}}px;">
                  <Content data-lan="{{lan}}" />
                </div>
                <Sidebar data-lan="{{lan}}" />
                </div>`;
    }
}

export default Frame;