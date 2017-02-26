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
    installed(){
        console.log(1);
    }

    beforeUpdate(){
        console.log("ssh_b")
    }

    afterUpdate(){
        console.log("ssh_a")
    }

}

Omi.makeHTML('SubSubHello', SubSubHello);

export default SubSubHello;