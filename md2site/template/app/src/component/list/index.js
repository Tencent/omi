import Omi from 'omi';

const tpl = require('./index.html');
const css = require('./index.css');

class List extends Omi.Component {
    constructor(data,option) {
        super(data,option);
    }

    goto(md,index){
        this.$store.goto(md,index)
    }

    render() {
        return tpl;
    }

    style() {
        return css;
    }
}

export default List;
