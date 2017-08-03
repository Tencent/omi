import Omi from 'omi';
import OmiFinger from 'omi-finger';

const tpl = require('./index.html');
const css = require('./index.css');

OmiFinger.init();

class Head extends Omi.Component {
    constructor (data,option) {
        super(data,option);
    }

    install(){

        document.body.addEventListener('touchend',()=>{
            setTimeout(()=>{
                this.removeClass(Omi.get('sidebar').node,'show');
            },300);
        },false);
    }

    beforeRender(){
        this.data.isEnLan = this.$store.data.lan === 'en';
    }

    toggleMenus(evt){
        this.toggleClass(Omi.get('sidebar').node,'show');
        evt.stopPropagation();
    }

    handleTouchEnd(evt){
        evt.stopPropagation();
    }

    toggleClass(element, className) {
        if (!element || !className) {
            return;
        }

        var classString = element.className, nameIndex = classString.indexOf(className);
        if (nameIndex == -1) {
            classString += ' ' + className;
        }
        else {
            classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
        }
        element.className = classString;
    }

    removeClass(element, className) {
        var classString = element.className, nameIndex = classString.indexOf(className);
        if (nameIndex !== -1) {
            classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
        }
        element.className = classString;
    }

    style () {
        return css;
    }

    render () {
        return tpl;
    }
}

export default Head;