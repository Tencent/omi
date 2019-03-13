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
  renderChild = childId => {
    const { id } = this.props
    return (
      <li key={childId}>
        <tree-node id={childId} parentId={id} />
      </li>
    )
  }

  render() {

    const { counter, childIds } = this.store.data.tree[this.props.id]

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
    tree: tree
  }
})