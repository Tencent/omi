import Omi from '../../src/index.js'
import TreeNode from './tree-node.js'

Omi.tag('tree-node',TreeNode)

class Tree extends Omi.Component {


    moveNode(id, parentId){

        console.log(id,parentId)
       // if(id===parentId)return;
        let parent = this.getChildById(parentId,this.data.children)
        let child = this.removeChildById(id,this.data.children)

        parent.children.push(child)
        console.log(JSON.stringify(this.data.children))
        this.update()
    }

    removeChildById(id,children) {

        for (let i = 0, len = children.length; i < len; i++) {
            let child = children[i]
            if (child.id === id) {
                children.splice(i, 1)
                return child
            }

           let target = this.removeChildById(id, child.children)
            if(target){
                return target
            }

        }
    }

    getChildById(id,children) {
        let target = null

        for (let i = 0, len = children.length; i < len; i++) {
            let child = children[i]
            if (child.id === id) {
                target = child
                break
            }

            target = this.getChildById(id, child.children)

            if(target)break
        }


        return target
    }

    render(){
        return `<ul>
                    <tree-node o-repeat="child in children" group-data="data.children"></tree-node>
                </ul>`
    }
}

export default  Tree