import Omi from '../../src/index.js';

class TreeNode extends Omi.Component {

    render(){
        return `
                <li>
                    <div>{{name}}</div>
                    <ul>
                        <tree-node o-repeat="child in children" group-data="data.children"></tree-node>
                    </ul>
                </li>
            `
        }
    }


export default  TreeNode