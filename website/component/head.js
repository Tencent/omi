import Omi from '../../src/index.js';
import OmiFinger from '../common/omi-finger.js';

OmiFinger.init();

class Head extends Omi.Component {
    constructor (data) {
        super(data);
    }

    install(){
        this.data.isEnLan = this.data.lan === 'en';
        document.body.addEventListener('touchend',()=>{
            this.removeClass(Omi.get('sidebar').node,'show');
        },false);
    }

    toggleMenus(evt){
        this.toggleClass(Omi.get('sidebar').node,'show');
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
        return `
    <style>
        .head{
            position:fixed;
            height:45px;
            line-height: 45px;
            border-bottom: 1px solid #eee;
            width:100%;
            background-color:#303030;
            z-index:100;

        }
        ul,li{
            display: inline-block;
        }
        .logo_box{
            width:100px;
            display: inline-block;
            text-align:center;
            line-height: 60px;
        }
         .menu a,.logo_box a{
            display: inline-block;
            height:45px;
            color:#ddd;
        }
        .menu{
            position: absolute;
            right:20px;
        }
        .menu li{
            margin-left:15px;
        }
        .logo_box a{
            font-size: 34px;
            font-weight: bold;
            color: #00bff3;
            padding: 0px 15px;
            line-height: 45px;
            cursor: pointer;
        }
        .menu a:hover{
            color: white;
        }

        .m_menu{
          position:fixed;
            display:none;
        }

         @media only screen and (max-width: 768px) {
           .menu li{
             display:none;
           }
            .menu .m_show{
             display:block;
           }

           .logo_box{
            display:inline-block;
           }

           .head{
            text-align:center;
           }

           .m_menu{

            top:0;
            left:0;
            display:block;
            width:50px;
            height:50px;
            padding-top: 6px;
           }
           .m_menu img{
                width:30px;
           }

        }
    </style>
        `;
    }

    render () {
        return `
    <div class="head bord-btm">
        <div class="m_menu" omi-finger onTap="toggleMenus"> <img src="../asset/menu.png" alt="" /></div>
        <div class="logo_box">
            <a href="https://github.com/AlloyTeam/omi">Omi</a>
        </div>
        <ul class="menu">

            <li class="github_li"><a href="https://github.com/AlloyTeam/omi">Github</a>
            <li><a href="http://alloyteam.github.io/omi/example/playground/">Playground</a></li>
            <li><a href="https://github.com/AlloyTeam/omi/tree/master/docs">[Edit the Docs]</a></li>
             {{#isEnLan}}
                <li class="github_li m_show"><a href="docs.html">中文</a>
            {{/isEnLan}}
            {{^isEnLan}}
                <li class="github_li m_show"><a href="docs_en.html">English</a>
            {{/isEnLan}}
            </li>
        </ul>
    </div>`;
    }
}

export default Head;