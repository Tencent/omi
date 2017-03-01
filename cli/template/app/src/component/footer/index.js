import Omi from 'omi';

const tpl = require('./index.html');
const css = require('./index.css');

class Footer extends Omi.Component {
    constructor (data) {
        super(data);
    }

    style () {
        return css;
    }

    render () {
        return tpl;
    }
}

export default Footer;