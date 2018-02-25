import Omi from '../../src/index.js'

class TreeNode extends Omi.Component {
    dropHandler(evt) {
        this.getRootInstance(this.parent).moveNode(parseInt(evt.dataTransfer.getData('node-id')), parseInt(evt.target.dataset['nodeId']))
        this.node && this.node.classList.remove('drag-over')
        evt.stopPropagation()
        evt.preventDefault()
    }

    getRootInstance(parent) {
        if (parent.moveNode) {
            return parent
        } else {
            return this.getRootInstance(parent.parent)
        }
    }

    dragOverHandler(evt) {
        this.node.classList.add('drag-over')
        evt.stopPropagation()
        evt.preventDefault()
    }

    dragLeaveHandler() {
        this.node.classList.remove('drag-over')
    }

    dragStartHandler(evt) {
        evt.dataTransfer.setData('node-id', this.data.root.id)
        evt.stopPropagation()
    }

    style() {
        return `
            .drag-over{
                border:1px dashed black;
            }
        `
    }

    render() {
        let list = this.data.root.nodes.map((child) =>
            <TreeNode root={child}></TreeNode>
        )

        return <li data-node-id={this.data.root.id} draggable="true" ondragstart={this.dragStartHandler.bind(this)} ondragleave={this.dragLeaveHandler.bind(this)} ondrop={this.dropHandler.bind(this)} ondragover={this.dragOverHandler.bind(this)} >
            <div data-node-id={this.data.root.id}>{this.data.root.name}</div>

            {list.length > 0 &&
                <ul data-node-id={this.data.root.id}>
                    {list}
                </ul>
            }
        </li>
    }
}

export default TreeNode
