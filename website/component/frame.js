import Omi from '../../src/index.js';
import Context from './content.js';
import Sidebar from './sidebar.js';
import Head from './head.js';

Omi.makeHTML(Context);
Omi.makeHTML(Sidebar);
Omi.makeHTML(Head);

class Frame extends Omi.Component {
    constructor(data) {
        super(data);
    }

    install() {
        this.data.height = window.innerHeight - 45;
        this.data.width = window.innerWidth - 220;

        window.onresize = ()=> {
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
        //1,5-6,8
        let mapping = {3: '6', 6: '5', 9: '3,9,34', 14: '22', 17: '6-12'}
        let pres = document.querySelectorAll("pre");
        for (let key in mapping) {
            pres[key].setAttribute("data-line", mapping[key]);
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