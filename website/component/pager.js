import Omi from '../../src/index.js';
import config from '../js/config.js';

class Pager extends Omi.Component {
    constructor (data) {
        super(data);
        this.activeIndex = 0;
        this.currentIndex = 0;
    }

    updatePager() {
        this.data.preMd = null;
        this.data.preName = null;
        this.data.nextMd = null;
        this.data.nextName = null;
        let item = config.menus[this.data.lan][this.activeIndex];

        let pre = item.list[this.currentIndex - 1];
        if (pre) {
            this.data.preMd = pre.md;
            this.data.preName = pre.name;
        }
        let next = item.list[this.currentIndex + 1];
        if (next) {
            this.data.nextMd = next.md;
            this.data.nextName = next.name;
        }


    }

    goto(name , dir){
        let sidebar = Omi.get('sidebar');
        if(dir ==='next'){
            sidebar.children[this.activeIndex].goto(name,++this.currentIndex);
        }else{
            sidebar.children[this.activeIndex].goto(name,--this.currentIndex);
        }
        this.update();
    }

    render () {
        this.updatePager();
        return `
    <div class="pager">
      {{#preName}} <a class="pre" href="#" onclick="goto('{{preMd}}','pre')">←{{preName}}</a>{{/preName}}
      {{#nextName}}<a class="next" href="#"  onclick="goto('{{nextMd}}','next')">{{nextName}}→</a> {{/nextName}}
    </div>`;
    }

    style () {
        return `

        .pager {
            width:85%;
            height:80px;
            line-height:80px;
            position: relative;
            font-size:16px;
        }

        @media only screen and (max-width: 768px) {
            .pager {
                width:100%;
            }
        }

        .pre{
            position: absolute;
            left:10px;
            top:10px;
        }
         .next{
            position: absolute;
            right:10px;
            top:10px;
        }
        `;
    }

}

export default Pager;