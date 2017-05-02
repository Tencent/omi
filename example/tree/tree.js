import Omi from '../../src/index.js'
import TreeNode from './tree-node.js'

Omi.tag('tree-node',TreeNode)

class Tree extends Omi.Component {


    moveNode(id, parentId) {
        if (id === parentId) {
            return
        }

        if(this.check(parentId, id)) {
            let parent = this.getChildById(parentId, this.data.children)
            let child = this.removeChildById(id, this.data.children)
            parent.children.push(child)
            this.update()
        }
    }

    check(parentId, childId){
        let current = this.getChildById(childId, this.data.children),
            children = current.children
        for (let i = 0, len = children.length; i < len; i++) {
            let child = children[i]
            if (child.id === parentId) {
                return false
            }

            let errorIds = this.check(parentId, child.id )
            if (!errorIds) {
                return false
            }
        }

        return true
    }

    removeChildById(id, children) {

        for (let i = 0, len = children.length; i < len; i++) {
            let child = children[i]
            if (child.id === id) {
                children.splice(i, 1)
                return child
            }

            let target = this.removeChildById(id, child.children)
            if (target) {
                return target
            }

        }
    }

    getChildById(id, children) {

        for (let i = 0, len = children.length; i < len; i++) {
            let child = children[i]
            if (child.id === id) {
                return child
            }

            let target = this.getChildById(id, child.children)
            if (target) {
                return target
            }
        }
    }

    render() {
        return `<ul>
                    <tree-node o-repeat="child in children" group-data="data.children"></tree-node>
                </ul>`
    }
}

export default  Tree