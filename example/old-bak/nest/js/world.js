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

    beforeUpdate(){
        console.log("world_b")
    }

    afterUpdate(){
        console.log("world_a")
    }



    installed(){
        console.log(0);
    }
}


Omi.makeHTML('World', World);

export default World;