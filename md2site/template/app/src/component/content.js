import Omi from 'omi';
import config from '../docs/config.js';

// Iterates through `array`, running `callback` for each `array` element.
function forEach(array, callback) {
    var i = -1, length = array ? array.length : 0;
    while (++i < length) {
        callback(array[i]);
    }
}

function indexOf(array, elem) {
    var i = -1, length = array ? array.length : 0;
    while (++i < length) {
        if (array[i] === elem) {
            return i;
        }
    }
}
function initialize() {


    // TODO: mark as parsed.
    forEach(document.querySelectorAll('pre code'), function(element) {
        // Trim whitespace if the `data-trim` attribute is present.
        if (element.hasAttribute('data-trim') && typeof element.innerHTML.trim == 'function') {
            element.innerHTML = element.innerHTML.trim();
        }

        // Highlight code using highlight.js.
        hljs.highlightBlock(element);

        // Split highlighted code into lines.
        var openTags = [], reHtmlTag = /<(\/?)span(?:\s+(?:class=(['"])hljs-.*?\2)?\s*|\s*)>/g;
        element.innerHTML = element.innerHTML.replace(/(.*?)\r?\n/g, function(_, string) {
            if (!string) {
                return '<span class=line>&nbsp;</span>';
            }
            var openTag, stringPrepend;
            // Re-open all tags that were previously closed.
            if (openTags.length) {
                stringPrepend = openTags.join('');
            }
            // Match all HTML `<span>` tags.
            reHtmlTag.lastIndex = 0;
            while (openTag = reHtmlTag.exec(string)) {
                // If it is a closing tag, remove the opening tag from the list.
                if (openTag[1]) {
                    openTags.pop();
                }
                // Otherwise if it is an opening tag, push it to the list.
                else {
                    openTags.push(openTag[0]);
                }
            }
            // Close all opened tags, so that strings can be wrapped with `span.line`.
            if (openTags.length) {
                string += Array(openTags.length + 1).join('</span>');
            }
            if (stringPrepend) {
                string = stringPrepend + string;
            }
            return '<span class=line>' + string + '</span>';
        });
    });

}

class Content extends Omi.Component {
    constructor(data) {
        data = Object.assign({
            lan:'cn',
            name: 'installation'
        },data);
        super(data);
        this.md = new Remarkable({html:true});
    }
    getMarkDown(name,lan) {
        return require("md-text!../docs/" + lan + "/" + name + ".md");
    }

    installed(){
        this.initCodeStyle();
    }

    afterUpdate(){
        this.initCodeStyle();
    }

    initCodeStyle() {
        let codes = Omi.$$("code");
        let codeHlNumArr = [];
        codes.forEach(code => {
            hljs.highlightBlock(code);
            let arr = code.className.match(/{\S*}/);
            let hllNums = null;
            if (arr) {
                let numArr = arr[0].replace(/[{|}]/g, '').split(',');
                hllNums = this._arrToNumber(numArr);
            }
            codeHlNumArr.push(hllNums);
        })

        initialize();

        codes.forEach((code, index) => {
            this._hll(code, codeHlNumArr[index])
        })
    }

    _arrToNumber (numArr){
        let arr = [];
        numArr.forEach(item=>{
            if(item.indexOf('-')!==-1){
                const tempArr = item.split('-');
                const begin = Number(tempArr[0]);
                const end = Number(tempArr[1]);
                for(let i=begin;i<end+1;i++){
                    arr.push(i);
                }
            }else{
                arr.push(Number(item));
            }
        })
        return arr;
    }

    _hll(code, hllNums){
        let spans = Omi.$$('.line',code);
        hllNums&&hllNums.forEach(num =>{
            spans[num]&&spans[num].classList.add('highlight');
        })
    }

    render () {
        this.data.html = this.md.render(this.getMarkDown(this.data.name, this.data.lan));
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