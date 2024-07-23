import { countSignal } from '../stores/counter'
export * from '../stores/counter'

class CounterModel {
  increment() {
    countSignal.value++
  }
  decrement() {
    countSignal.value--
  }
}

export const counterModel = new CounterModel()