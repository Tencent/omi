import Omi from '../../../src/index.js';

import SubHello from './sub_hello.js';
import World from './world.js';

class Hello extends Omi.Component {
    constructor(data) {
        super(data);

    }
    style () {
        return  `
           h1{
             cursor:pointer;
           }
         `;
    }
    handleClick(dom){
        alert(dom.innerHTML);
    }
    render() {
        return  `
        <div>
            <h1 onclick="handleClick(this)">Omi</h1>
            <World omi-id="world" data-name="abcd"   />
            <div>
                Hello {{name}}!
                <SubHello omi-id="sh" name="list" />

            </div>
        </div>
        `;

    }
}

Omi.makeHTML(Hello);

export default Hello;