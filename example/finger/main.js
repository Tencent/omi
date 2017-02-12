import Omi from '../../src/index.js';

import OmiFinger from './omi-finger.js';

OmiFinger.init();

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    handleTap(evt){
        alert(11)

    }

    render() {
        return  `
        <div>
            <div omi-finger onTap="handleTap"  >ABCD</div>
        </div>
        `;

    }
}

Omi.render(new App(),"#container");