import Root from './config.js';
import Omi from 'omi';

import Header from '../component/header/header.js';
import Footer from '../component/footer/Footer.js';

Omi.makeHTML('Header', Header);
Omi.makeHTML('Footer', Footer);

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
        <Header />
        <div>Main Content</div>
        <Footer />
    </div>`;
    }
}

Omi.render(new Main({ lan : "en" }),'body',true);