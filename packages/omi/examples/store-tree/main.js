import { render, WeElement, define } from '../../src/omi'

function generateTree() {
  let tree = {
    0: {
      id: 0,
      counter: 0,
      childIds: []
    }
  }

  for (let i = 1; i < 1000; i++) {
    let parentId = Math.floor(Math.pow(Math.random(), 2) * i)
    tree[i] = {
      id: i,
      counter: 0,
      childIds: []
    }
    tree[parentId].childIds.push(i)
  }

  return tree
}

const tree = generateTree()

define('tree-node', class extends WeElement {
  static use = [
    'tree'
  ]

  handleIncrementClick = () => {
    this.store.increment(this.props.id)
  }

  handleAddChildClick = e => {
    e.preventDefault()

    const { id } = this.props
    const childId = this.store.createNode().id
    this.store.addChild(id, childId)
  }

  handleRemoveClick = e => {
    e.preventDefault()

    const { parentId, id } = this.props
    this.store.removeChild(parentId, id)
    this.store.deleteNode(id)
  }

  renderChild = childId => {
    const { id } = this.props
    return (
      <li key={childId}>
        <tree-node id={childId} parentId={id} />
      </li>
    )
  }

  render(props) {
    const { counter, childIds } = this.store.data.tree[props.id]
    const parentId = props.parentId

    return (
      <div>
        Counter: {counter}
        {' '}
        <button onClick={this.handleIncrementClick}>
          +
      </button>
        {' '}
        {typeof parentId !== 'undefined' &&
          <a href="#" onClick={this.handleRemoveClick} // eslint-disable-line jsx-a11y/anchor-is-valid
            style={{ color: 'lightgray', textDecoration: 'none' }}>
            ×
        </a>
        }
        <ul>
          {childIds.map(this.renderChild)}
          <li key="add">
            <a href="#" // eslint-disable-line jsx-a11y/anchor-is-valid
              onClick={this.handleAddChildClick}
            >
              Add child
          </a>
          </li>
        </ul>
      </div>
    )
  }
})

render(<tree-node id={0} />, 'body', {
  data: {
    tree
  },
  increment(id) {
    this.data.tree[id].counter++
  },
  id: 1000,
  createNode() {
    const id = this.id++
    this.data.tree[id] = {
      id: id,
      counter: 0,
      childIds: []
    }
    return this.data.tree[id]
  },
  addChild(id, childId) {
    const parent = this.data.tree[id]
    parent.childIds.indexOf(childId) === -1 && parent.childIds.push(childId)
  },
  removeChild(parentId, childId) {
    const parent = this.data.tree[parentId]
    parent.childIds = parent.childIds.filter(id => id !== childId)
  },
  deleteNode(id) {
    delete this.data.tree[id]
  }
})