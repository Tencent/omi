import Omi from '../../src/index.js';
import config from '../js/config.js';

function getMarkDown(name,lan) {
    let md = require("md-text!../../docs/" + lan + "_" + name + ".md");
    return md.substring(0, md.length - 1).replace(/\\r\\n/g, "\r\n").replace(/\\n/g, "\n").replace(/\\t/g, "\t").replace('module.exports = "', "").replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}

function getMarkDownByArr(arr , lan) {
    let md = "";
    arr.forEach((item)=> {
        md += getMarkDown(item, lan)+"\r\n \r\n";
    })

    return md;
}

class Content extends Omi.Component {
    constructor(data) {
        data = Object.assign({
            lan:'cn',
            name: 'installation'
        },data);
        super(data);

        //document.onclick= ()=>{
        //   var a =  getMarkDown('form','en');
        //    console.log(a);
        //}
    }

    installed(){
        this.initCodeStyle();
    }

    afterUpdate(){
        this.initCodeStyle();
    }

    initCodeStyle(lh) {

        var codes = document.querySelectorAll("code");
        for (let i = 0, len = codes.length; i < len; i++) {
            //innerText bug£¿ie11 remove the \r\n??
            // detail:  http://www.cnblogs.com/fsjohnhuang/p/4319635.html
            // so textContent
            var html = Prism.highlight(codes[i].textContent, Prism.languages.javascript);
            codes[i].innerHTML = html;
            codes[i].classList.add('language-js');
        }
        Omi.$$('pre').forEach((item)=> {
            item.classList.add('language-js');
        })

        if(window.innerWidth>640) {
            let pres = document.querySelectorAll("pre");
            let highlight = this.getHighLight();

            if (highlight) {
                for (let key in highlight) {
                    pres[key] && pres[key].setAttribute("data-line", highlight[key]);
                }
                if (!lh)lineHighLight();
            }
        }
    }

    getHighLight(){
        let hl = null;
         config.menus[this.data.lan].forEach((menu)=>{
             menu.list.forEach((item)=>{
                if(item.md === this.data.name){
                    hl = item.highlight;
                }
            })
        })
        return hl;
    }

    installed(){

    }

    render () {
        this.data.html = marked(getMarkDown(this.data.name, this.data.lan));
        return `
        <div class="content">
            {{{html}}}
        </div>
        `;
    }

    style () {
        return `
    <style>
        .content{
             width: 80%;
        }
        h3{
            color:#444444;
        }
        pre{
            border: 1px solid #eee;
            width: 100%;
        }
        li{
            text-indent: 20px;
            list-style:disc inside ;
        }

         @media only screen and (max-width: 768px) {
           .content{
             width: 100%;
           }
        }
     </style>
        `;
    }
}

export default Content;