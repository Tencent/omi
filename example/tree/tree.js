import Omi from '../../src/index.js'
import TreeNode from './tree-node.js'



class Tree extends Omi.Component {

    beforeRender(){
        this.data.nodes = this.data.root.nodes
    }

    moveNode(id, parentId) {
        if (id === parentId) {
            return
        }

        if (this.check(parentId, id)) {
            let parent = this.getChildById(parentId, this.data.nodes)
            let child = this.removeChildById(id, this.data.nodes)
            parent.nodes.push(child)

            this.update()
        }
    }

    check(parentId, childId) {
        let current = this.getChildById(childId, this.data.nodes),
            nodes = current.nodes
        for (let i = 0, len = nodes.length; i < len; i++) {
            let child = nodes[i]
            if (child.id === parentId) {
                return false
            }

            let errorIds = this.check(parentId, child.id)
            if (!errorIds) {
                return false
            }
        }

        return true
    }

    removeChildById(id, nodes) {
        for (let i = 0, len = nodes.length; i < len; i++) {
            let child = nodes[i]
            if (child.id === id) {
                nodes.splice(i, 1)
                return child
            }

            let target = this.removeChildById(id, child.nodes)
            if (target) {
                return target
            }
        }
    }

    getChildById(id, nodes) {
        for (let i = 0, len = nodes.length; i < len; i++) {
            let child = nodes[i]
            if (child.id === id) {
                return child
            }

            let target = this.getChildById(id, child.nodes)
            if (target) {
                return target
            }
        }
    }

    render() {
        return <ul>
            {this.data.root.nodes.map((child) =>
                <TreeNode root={child}></TreeNode>
            )}
        </ul>
    }
}

export default Tree
