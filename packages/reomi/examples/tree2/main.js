import { define, render, WeElement } from '../../src/omi'


define('my-tree', class extends WeElement {
  open = (path) => {
    const node = this.getNodeByPath(path)
    node.open = !node.open
    this.update()
  }

  getNodeByPath(path) {
    if (path === '#') {
      return this.props.node
    }
    const arr = path.split('-')
    arr.shift()
    let current = this.props.node
    let item
    while (item = arr.pop()) {
      current = current.children[item]
    }
    return current
  }

  extend(path) {
    const node = this.getNodeByPath(path)
    if (!node.children) {
      node.children = [{
        name: 'new child'
      }]
    } else {

      node.children.push({
        name: 'new child'
      })
    }
    node.open = true
    this.update()
  }

  addChild = (path) => {
    const node = this.getNodeByPath(path)
    node.children.push({ name: 'new child' })
    this.update()
  }

  render(props) {
    return (
      <ul>
        {this.createNode(props.node, '#')}
      </ul>
    )
  }

  static css = `
  h4{
    cursor:pointer;
  }
  
  .add{
    cursor:pointer;
  }
  `

  createNode(node, path) {

    const children = node.children
    const canOpen = children && children.length
    return (
      <li>
        <h4 ondblclick={e => this.extend(path)}>
          {node.name}
          {canOpen && <span onclick={e => this.open(path)}>[{node.open ? '-' : '+'}]</span>}
        </h4>

        {canOpen && node.open && (
          <ul>
            {children.map((child, index) => {
              return this.createNode(child, path + '-' + index)
            })}
            <li class="add" onclick={e => this.addChild(path)}>
              +
            </li>
          </ul>
        )}
      </li>
    )
  }
})

const node = {
  name: 'my-tree',
  data: { x: 1 },
  open: true,
  children: [
    {
      name: 'a-1'
    },
    {
      name: 'a-2',
      children: [
        {
          name: 'a-2-1'
        }
      ]
    }
  ]
}

render(<my-tree node={node} />, 'body')
