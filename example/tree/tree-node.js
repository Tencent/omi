import Omi from '../../src/index.js'

class TreeNode extends Omi.Component {

    dropHandler(evt) {
        this.getRootInstance(this.parent).moveNode(parseInt(evt.dataTransfer.getData("node-id")), parseInt(evt.target.dataset['nodeId']))
        this.node && this.node.classList.remove('drag-over')
        evt.stopPropagation()
        evt.preventDefault()

    }

    getRootInstance(parent){
        if(parent.moveNode){
            return parent
        }else{
            return this.getRootInstance(parent.parent)
        }

    }

    dragOverHandler(evt){
        this.node.classList.add('drag-over')
        evt.stopPropagation()
        evt.preventDefault()
    }

    dragLeaveHandler(){
        this.node.classList.remove('drag-over')
    }

    dragStartHandler(evt){
        evt.dataTransfer.setData("node-id",this.data.id)
        evt.stopPropagation()
    }

    style(){
        return `
            .drag-over{
                border:1px dashed black;
            }
        `
    }

    render(){
        return `
                <li data-node-id="{{id}}"  draggable="true"  ondragstart="dragStartHandler" ondragleave="dragLeaveHandler"  ondrop="dropHandler" ondragover="dragOverHandler" >
                    <div data-node-id="{{id}}">{{name}}</div>
                    <ul data-node-id="{{id}}" o-if="children.length > 0">
                        <tree-node o-repeat="child in children" group-data="data.children"></tree-node>
                    </ul>
                </li>
            `
        }
    }


export default  TreeNode