import Omi from '../../src/index.js'

import Tree from './tree.js'



class App extends Omi.Component {
    render() {
        return <div>
            <div> {this.data.demoName}</div>
            <Tree root={this.data.rootNode}></Tree>
        </div>
    }
}

Omi.render(new App({
    demoName: 'Omi Tree Demo (support drag and drop to move the node)',
    rootNode: {
        name: 'Root',
        nodes: [
            {
                name: 'A',
                id: 1,
                nodes: [
                    { id: 4, name: 'A1', nodes: [] },
                    { id: 7, name: 'A2', nodes: [] }
                ]
            },
            {
                name: 'B',
                id: 2,
                nodes: [
                ]
            }
        ]
    }
}), '#container')
