import Omi from 'omi';
import config from '../docs/config.js';

function getMarkDown(name,lan) {
    let md = require("md-text!../docs/" + lan + "/" + name + ".md");
    return md;
    //return md.substring(0, md.length - 1).replace(/\\r\\n/g, "\r\n").replace(/\\n/g, "\n").replace(/\\t/g, "\t").replace('module.exports = "', "").replace(/\\"/g, '"').replace(/\\\\/g, '\\');
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
        this.md = new Remarkable();
    }

    installed(){
        this.initCodeStyle();
    }

    afterUpdate(){
        this.initCodeStyle();
    }

    initCodeStyle() {
        var codes = document.querySelectorAll("code");
        for (let i = 0, len = codes.length; i < len; i++) {
            hljs.highlightBlock(codes[i])
            console.log(codes[i])
        }

    }

    render () {
        this.data.html = this.md.render(getMarkDown(this.data.name, this.data.lan));
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