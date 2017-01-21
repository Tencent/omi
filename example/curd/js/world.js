import Omi from '../../../src/index.js';

class World extends Omi.Component {
    constructor(data) {
        super(data);
    }
    render() {
        return `
     <div>
        i am World's instance2{{list}}!
     </div>`;
    }
}


Omi.makeHTML(World);

export default World;