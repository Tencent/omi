import { define, render, WeElement } from '../../src/omi'

define('my-node', class extends WeElement {
  static observe = true

  open = () => {
    this.data.open = !this.data.open
  }

  extend = () => {
    if (!this.data.children) {
      this.data.children = [{ name: 'new child' }]
    } else {
      this.addChild()
    }
    this.data.open = true
  }

  addChild = () => {
    this.data.children.push({ name: 'new child' })
  }

  install() {
    this.data = this.props.node
  }

  css() {
    return `
		.add, h4{
			cursor:pointer;
		}`
  }

  render(props, data) {
    const children = data.children
    const canOpen = children && children.length
    return (
      <li>
        <h4 onclick={this.open} ondblclick={this.extend}>
          {this.data.name}
          {canOpen && <span>[{data.open ? '-' : '+'}]</span>}
        </h4>

        {canOpen && data.open && (
          <ul>
            {children.map(child => {
              return <my-node node={child} />
            })}
            <li class="add" onclick={this.addChild}>
              +
            </li>
          </ul>
        )}
      </li>
    )
  }
})

define('my-tree', class extends WeElement {
  render(props) {
    return (
      <ul>
        <my-node node={props.node} />
      </ul>
    )
  }
})

const node = {
  name: 'my-tree',
  data: { x: 1 },
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
