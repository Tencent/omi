import Omi from '../../src/index.js'
import TreeNode from './tree-node.js'

Omi.tag('tree-node',TreeNode)

class Tree extends Omi.Component {


    render(){
        return `<ul>
                    <tree-node o-repeat="child in children" group-data="data.children"></tree-node>
                </ul>`
    }
}

export default  Tree