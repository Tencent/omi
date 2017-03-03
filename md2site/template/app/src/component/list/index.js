import Omi from 'omi';

const tpl = require('./index.html');
const css = require('./index.css');

class List extends Omi.Component {
    constructor(data) {
        super(data);
        Omi.mixIndexToArray(this.data.list);
        this.data.currentIndex = 0;
        var self = this;
        this.data.isCurrent = function () {
            return (this.index === self.data.currentIndex) && self.data.active;
        }
    }

    goto(name, index) {

        Omi.get('content').data.name = name;
        Omi.get('content').update();
        this.data.currentIndex = index;
        this.parent.children.forEach((child,index) => {
            child.data.active = false;
            if (child.id === this.id) {
                Omi.get('pager').activeIndex = index;
                child.data.active = true;
            }
            child.update();
        });
        Omi.get('pager').currentIndex = index;
        Omi.get('pager').update();

    }

    render() {
        return tpl;
    }

    style() {
        return css;
    }
}

export default List;
