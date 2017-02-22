import Omi from 'omi';

class Footer extends Omi.Component {
    constructor (data) {
        super(data);
    }

    style () {
        return `
        .footer{
            position:fixed;
            height:45px;
            line-height: 45px;
            width:100%;
            bottom:0;
            color:white;
            background-color:black;
            z-index:100;
        }
        `;
    }

    render () {
        return `
    <div class="footer">
       I am footer
    </div>`;
    }
}

export default Footer;