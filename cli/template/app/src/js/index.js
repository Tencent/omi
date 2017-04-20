import Root from './config.js';
import Omi from 'omi';

import Header from '../component/header/index.js';
import Footer from '../component/footer/index.js';

Omi.tag('header', Header);
Omi.tag('footer', Footer);

class Main extends Omi.Component {
    constructor (data) {
        super(data);
    }

    style () {
        return `
        .main{
            position:fixed;
            height:45px;
            line-height: 145px;
            text-align:center;
            width:100%;
            background-color:blue;
            z-index:100;
        }
        `;
    }

    render () {
        return `
    <div class="main">
        <header></header>
        <div>Main Content</div>
        <footer></footer>
    </div>`;
    }
}

Omi.render(new Main({ lan : "en" }),'body',true);