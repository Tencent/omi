import { define, WeElement } from 'omi'
import css from './_index.css'
import '../../icon'

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

  toggle = (evt, id) => {
    this.props.root.toggle(id)
    this.props.root.update()
    evt.stopPropagation()
  }

  clickNode = (evt, id) => {
    this.props.root.props.onNodeClick && this.props.root.props.onNodeClick(id, evt)
  }

  render(props) {
    const { id, children, expand, name } = props.data
    return (
      <li class="node-root" data-node-id={id} draggable="true" ondragstart={this.dragStartHandler} ondragleave={this.dragLeaveHandler} ondrop={this.dropHandler} ondragover={this.dragOverHandler} >
        <div ref={e => { this.nodeTitle = e }} class={`node-title arrow-${children.length > 0 ? (expand ? 'expand' : 'contract') : ''}`} data-node-id={id} >
          {children.length > 0 && <o-icon onClick={e => this.toggle(e, id)} scale={1} color='#171717' class='icon' path={expand ? 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z' : 'M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z'}></o-icon>}
          <span onClick={e => this.clickNode(e, id)} class="name">{name}</span>
        </div>
        {children.length > 0 && expand && <ul data-node-id={id}>
          {props.data.children.map(child => (
            <tree-node data={child} root={this.props.root}></tree-node>
          ))}
        </ul>}
      </li>
    )


  }
})
