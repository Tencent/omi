import Omi from '../../../src/index.js';

class SubSubHello extends Omi.Component {
    constructor(data) {
        super(data);
    }
    render() {
        return `
    <div>
    <div ref="abcd"></div>
        i am SubSubHello's instance{{name}}!
        </div>
         `;
    }
}

Omi.makeHTML('SubSubHello', SubSubHello);

export default SubSubHello;