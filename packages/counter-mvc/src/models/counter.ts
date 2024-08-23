import { signal, bind } from 'omi'

export class CounterModel {
  countSignal = signal(0)

  @bind
  increment() {
    this.countSignal.value++
  }

  @bind
  decrement() {
    this.countSignal.value--
  }
}

export const counterModel = new CounterModel()