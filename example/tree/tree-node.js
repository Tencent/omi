import Omi from '../../src/index.js';

class TreeNode extends Omi.Component {

    dropHandler(evt){
        //swap node
        this.getRootInstance(this.parent).moveNode(parseInt( evt.dataTransfer.getData("node-id")),parseInt(evt.target.dataset['nodeId']))
        evt.stopPropagation()
        evt.preventDefault();
    }

    getRootInstance(parent){
        if(parent.moveNode){
            return parent
        }else{
            return this.getRootInstance(parent.parent)
        }

    }

    dragOverHandler(evt){
        //add active class

        this.node.classList.add('drag-over')
        //  console.log(this.node)
        evt.stopPropagation()
        evt.preventDefault();
    }

    dragLeaveHandler(evt){
        this.node.classList.remove('drag-over')
    }

    dragStartHandler(evt){
        //console.log(this.node)

        evt.dataTransfer.setData("node-id",this.data.id);
        evt.stopPropagation()
    }

    style(){
        return `
            .drag-over{
                border:1px dashed black;
            }

            li{
                cursor: move;
            }
        `
    }

    render(){
        return `
                <li data-node-id="{{id}}"  draggable="true"  ondragstart="dragStartHandler" ondragleave="dragLeaveHandler"  ondrop="dropHandler" ondragover="dragOverHandler" >
                    <div data-node-id="{{id}}">{{name}}</div>
                    <ul o-if="children.length>0">
                        <tree-node o-repeat="child in children" group-data="data.children"></tree-node>
                    </ul>
                </li>
            `
        }
    }


export default  TreeNode