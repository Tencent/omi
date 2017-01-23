import Omi from '../../src/index.js';

function getMarkDown(name,lan) {
    let md = require("md-text!../../docs/" + lan + "_" + name + ".md");
    return md.substring(0, md.length - 1).replace(/\\r\\n/g, "\r\n").replace(/\\n/g, "\n").replace('module.exports = "', "").replace(/\\"/g, '"').replace(/\\\\/g, '\\');
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
        super(data);
    }

    install() {
        this.data.html = marked(getMarkDownByArr(['installation', 'hello_world', 'components', 'lifecycle', 'events', 'condition', 'loop', 'form', 'inherit', 'template', 'thinking_in_omi'], 'cn'));
    }

    style () {
        return `
        .content{
             width: 80%;
        }
        h2{
            padding-top:20px;
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
        `;
    }

    render () {
        return `
        <div class="content">
            {{{html}}}
        </div>
        `;
    }
}

export default Content;