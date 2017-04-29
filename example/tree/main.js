import Omi from '../../src/index.js';

import Tree from './tree.js'

Omi.tag('tree', Tree)

class App extends Omi.Component {
    render(){
        return `<div>
                    <div>{{demoName}}</div>
                    <tree data="data.rootNode"></tree>
                </div>`
    }
}

Omi.render(new App( {
    demoName : 'Omi Tree Demo',
    rootNode: {
        name: 'Root',
        children: [
            {name: 'A', children: [{name: 'A1', children: []}, {name: 'A2', children: []}]},
            {name: 'B', children: [{name: 'B1', children: []}, {name: 'B2', children: []}]},
            {name: 'C', children: [{name: 'C1', children: []}, {name: 'C2', children: []}]}
        ]
    }
}),"#container");