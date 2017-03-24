import Omi from '../../src/index.js';

class Test extends Omi.Component {
    constructor(data) {
        super(data)
    }

    render () {
        return ` <div> {{name}}</div>`
    }
}

export default Test;
