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
    demoName : 'Omi Tree Demo (support drag and drop to move the node)',
    rootNode: {
        name: 'Root',
        children: [
            {name: 'A', id: 1, children: [{id: 4, name: 'A1', children: []}, {id: 7, name: 'A2', children: []}]},
            {name: 'B', id: 2, children: [{id: 5, name: 'B1', children: []}, {id: 8, name: 'B2', children: []}]},
            {name: 'C', id: 3, children: [{id: 6, name: 'C1', children: []}, {id: 9, name: 'C2', children: []}]}
        ]
    }
}),"#container");