import Omi from '../../../src/index.js';

class SubSubHello extends Omi.Component {
    constructor(data) {
        super(data);
    }
    render() {
        return `
    <div>
        i am SubSubHello's instance{{name}}!
        </div>
         `;
    }
}

Omi.makeHTML(SubSubHello);

export default SubSubHello;