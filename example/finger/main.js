import Omi from '../../src/index.js';

import OmiFinger from './omi-finger.js';

OmiFinger.init();

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    handleTap(evt){
        console.log(evt);
        console.log('tap');
    }

    handleSwipe(evt){
        console.log(evt);
        console.log('swipe');
    }

    render() {
        return  `
        <div>
            <div omi-finger onTap="handleTap"  onSwipe="handleSwipe" >ABCD</div>
        </div>
        `;

    }
}

Omi.render(new App(),"#container");