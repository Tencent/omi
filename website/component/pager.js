import Omi from '../../src/index.js';
import config from '../js/config.js';
import OmiFinger from '../common/omi-finger.js';

OmiFinger.init();

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

    handleTap(evt){
        let dir = evt.target.getAttribute('data-dir');
        let name= evt.target.getAttribute('data-name');
        this.goto(name,dir);
    }

    render () {
        this.updatePager();
        if(config.isMobile) {
            return `
    <div class="pager">
      {{#preName}} <a class="pre" href="#" omi-finger tap="handleTap" data-dir="pre" data-name="{{preMd}}">←{{preName}}</a>{{/preName}}
      {{#nextName}}<a class="next" href="#" omi-finger tap="handleTap" data-dir="next" data-name="{{nextMd}}">{{nextName}}→</a> {{/nextName}}
    </div>`;
        }else{
            return`
    <div class="pager">
        {{#preName}} <a class="pre" href="#" onclick="goto('{{preMd}}','pre')">←{{preName}}</a>{{/preName}}
        {{#nextName}}<a class="next" href="#"  onclick="goto('{{nextMd}}','next')">{{nextName}}→</a> {{/nextName}}
    </div>`;
        }
    }

    style () {
        return `
    <style>
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
    </style>
        `;
    }

}

export default Pager;