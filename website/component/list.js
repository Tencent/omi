import Omi from '../../src/index.js';

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
        return `
        <ul>
            <li class="title">{{title}}</li>
            {{#list}}
            <li>
                <a href="#"  onclick="goto('{{md}}',{{index}})" {{#isCurrent}}class="current"{{/isCurrent}}>{{name}}</a>
            </li>
            {{/list}}
        </ul>`;
    }

    style() {
        return `
        li.title{
            font-size: 16px;
            font-weight: bold;
            margin-bottom:10px;
            margin-top:10px;
            text-indent: 23px;
        }
        li{
            margin-bottom:3px;
            text-indent: 33px;
        }
        li a{
            display:block;
            font-size:14px;
            height:20px;
            line-height:20px;
            color: #666;
        }
        li a.current{
            background-color:#c3d4fc;
            color:white;
        }
        li a:hover{
            background-color:#b3d4fc;
            color:white;
        }
        `;
    }
}

export default List;
