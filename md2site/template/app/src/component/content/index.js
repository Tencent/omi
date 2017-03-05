import Omi from 'omi';
import config from '../../docs/config.js';
import highlightLines from './highlight-lines.js';

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

    getMarkDown(name,lan) {
        return require("md-text!../../docs/" + lan + "/" + name + ".md");
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
        this.data.html = this.md.render(this.getMarkDown(this.data.name, this.data.lan));
        return tpl;
    }

    style () {
        return css;
    }
}

export default Content;