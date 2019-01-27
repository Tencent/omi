import { WeElement, define, render } from 'omi'
import state from '../../src/step'


define('my-app', class extends WeElement {

  itemsA = [
    { name: 'Finished', description: 'This is a description.', state: state.DONE },
    { name: 'In Progress', description: 'This is a description.', state: state.DOING },
    { name: 'Waiting', description: 'This is a description.', state: state.TODO }
  ]

  itemsB = [
    { name: 'Finished', description: 'This is a description.', state: state.DONE },
    { name: 'Error', description: 'This is a description.', state: state.ERROR },
    { name: 'Waiting', description: 'This is a description.', state: state.TODO }
  ]

  itemsC = [
    { name: 'Finished', description: 'This is a description.', state: state.DONE },
    { name: 'Finished', description: 'This is a description.', state: state.DONE },
    { name: 'Finished', description: 'This is a description.', state: state.DONE },
  ]

  render() {
    return (
      <div>
        <o-step items={this.itemsA} />
        <o-step items={this.itemsB} />
        <o-step items={this.itemsC} />
      </div>

    )
  }
})

render(<my-app />, 'body')
