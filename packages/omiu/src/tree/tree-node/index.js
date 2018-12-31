import { define, WeElement } from 'omi'
import css from './_index.css'

define('tree-node', class extends WeElement {

  dropHandler(evt) {
    this.getRootInstance(this.parent).moveNode(parseInt(evt.dataTransfer.getData("node-id")), parseInt(evt.target.dataset['nodeId']))
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
    evt.dataTransfer.setData("node-id", this.data.id)
    evt.stopPropagation()
  }

  css() {
    return css
  }

  toggle(evt, id) {
    this.getRootInstance(this.parent).toggle(id)
    evt.stopPropagation()
  }

  edit(evt) {
    evt.stopPropagation()
    evt.target.classList.add('editing')
    this.editIpt.value = this.editIpt.value
    this.editIpt.focus()
  }

  endEdit() {
    this.nodeTitle.classList.remove('editing')
    this.getRootInstance(this.parent).rename(this.nodeId, this.refs.editIpt.value)
  }

  render(props, data) {
    console.log(props.data)
    const { id, children, expand, type, name } = props.data
    console.log(name)
    this.nodeId = id
    return (
      <li class="node-root" data-node-id={id} draggable="true" ondragstart={this.dragStartHandler} ondragleave={this.dragLeaveHandler} ondrop={this.dropHandler} ondragover={this.dragOverHandler} >
        <div ondblclick={this.edit} ref={e => { this.nodeTitle = e }} class={`node-title arrow-${children.length > 0 ? (expand ? 'expand' : 'contract') : ''}`} data-node-id={id} onclick={e => this.toggle(e, { id })}>
          <i data-node-id={id}></i><span data-node-id={id} class={type}></span>
          <span data-node-id={id} class="name">{name}</span>
          <input data-node-id={id} onblur={this.endEdit} ref={e => { this.editIpt = e }} class="edit" value={name} type="text" />
        </div>
        {children.length > 0 && expand && <ul data-node-id={id} o-if="">
          {props.data.children.map(child => (
            <tree-node data={child}></tree-node>
          ))}
        </ul>}
      </li>
    )


  }
})
