import { counterModel, countSignal } from '../models/counter'
import { tag, h, Component } from 'omi'

@tag('counter-app')
export default class extends Component {
  render() {
    return (
      <>
        <button onClick={counterModel.decrement}>-</button>
        <span>{countSignal.value}</span>
        <button onClick={counterModel.increment}>+</button>        
      </>
    )
  }
}

