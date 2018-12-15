import Omi from 'omi';
import OmiFinger from 'omi-finger';

OmiFinger.init();

class Pager extends Omi.Component {
    constructor (data,option) {
        super(data,option);
    }

    next(){
        this.$store.next();
    }

    pre(){
        this.$store.pre();
    }

    handleTap(evt){
        let dir = evt.target.getAttribute('data-dir');
        if(dir ==='next') {
            this.next()
        }else{
            this.pre()
        }
    }

    isMobile(){
        const browser={
            versions:function(){
                var u = navigator.userAgent, app = navigator.appVersion;
                return {//移动终端浏览器版本信息
                    trident: u.indexOf('Trident') > -1, //IE内核
                    presto: u.indexOf('Presto') > -1, //opera内核
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                    iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                    iPad: u.indexOf('iPad') > -1, //是否iPad
                    webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
                };
            }(),
            language:(navigator.browserLanguage || navigator.language).toLowerCase()
        }

        if(browser.versions.mobile || browser.versions.ios || browser.versions.android ||
            browser.versions.iPhone || browser.versions.iPad){
            return true;
        }
        return false;
    }

    render () {
        if(this.isMobile()) {
            return `
    <div class="pager">
      {{#preName}} <a class="pre" href="#" omi-finger tap="handleTap" data-dir="pre" data-name="{{preMd}}">←{{preName}}</a>{{/preName}}
      {{#nextName}}<a class="next" href="#" omi-finger tap="handleTap" data-dir="next" data-name="{{nextMd}}">{{nextName}}→</a> {{/nextName}}
    </div>`;
        }else{
            return`
    <div class="pager">
        {{#preName}} <a class="pre" href="#" onclick="pre('{{preMd}}','pre')">←{{preName}}</a>{{/preName}}
        {{#nextName}}<a class="next" href="#"  onclick="next('{{nextMd}}','next')">{{nextName}}→</a> {{/nextName}}
    </div>`;
        }
    }

    style () {
        return require('./index.css');
    }

}

export default Pager;