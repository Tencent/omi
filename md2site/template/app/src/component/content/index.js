import Omi from 'omi';
import config from '../../docs/config.js';
import highlightLines from './highlight-lines.js';
import proj_config from '../../../project.js';

const tpl = require('./index.html');
const css = require('./index.css');

class Content extends Omi.Component {
    constructor(data) {
        data = Object.assign({
            lan:'cn',
            name: 'installation'
        },data);
        super(data);
        this.md = new Remarkable({html:true});
    }

    asyncUpdate() {
        this.loadMarkdown("../../docs/" + this.data.lan + "/" + this.data.name + ".md",(md)=>{
            this.data.html = this.md.render(md);
            this.update();
        })
    }

    installed(){
        this.initCodeStyle();
    }

    install(){
        if(proj_config.async) {
            this.asyncUpdate();
        }
    }

    afterUpdate(){
        this.initCodeStyle();
    }

    getMarkDown(name,lan){
        return require("../../docs/" + lan + "/" + name + ".md");
    }

     loadMarkdown(url,callback) {

         var xobj = new XMLHttpRequest();
         //xobj.overrideMimeType("application/json");
         xobj.open('GET', url, true); // Replace 'my_data' with the path to your file
         xobj.onreadystatechange = function () {
             if (xobj.readyState == 4 && xobj.status == "200") {
                 // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                 callback(xobj.responseText);
             }
         };
         xobj.send(null);
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

        highlightLines();

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
        if(!proj_config.async) {
            this.data.html = this.md.render(this.getMarkDown(this.data.name, this.data.lan));
        }
        return tpl;
    }

    style () {
        return css;
    }
}

export default Content;