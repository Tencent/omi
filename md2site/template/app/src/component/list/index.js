import Omi from 'omi';

const tpl = require('./index.html');
const css = require('./index.css');

class List extends Omi.Component {
    constructor(data) {
        super(data,{
            useLocalData: true
        });
    }

    goto(md,index){
        Omi.store.goto(md,index)
    }

    render() {
        return tpl;
    }

    style() {
        return css;
    }
}

export default List;
