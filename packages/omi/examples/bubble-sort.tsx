import { Component, bind, signal, tag, render, h, classNames, mixin, SignalValue } from '@/index'

export default class Store {
  state: SignalValue<{
    arr?: number[]
    indexA?: number
    indexB?: number
    sorting?: boolean
  }>

  constructor() {
    this.state = signal({})
    this.init()
  }

  init() {
    this.state.value.arr = Array.from({ length: 30 }, () => this.randomInt())
    this.state.value.indexA = -1
    this.state.value.indexB = -1
    this.state.value.sorting = false
    this.state.update()
  }

  randomInt() {
    return Math.ceil(Math.random() * 25)
  }

  @bind
  reset() {
    this.init()
  }

  @bind
  sort() {
    this.state.value.sorting = true
    this.bubbleSort(this.state.value.arr!, {
      done: () => {
        this.state.value.indexA = -1
        this.state.value.indexB = -1
        this.state.value.sorting = false
        this.state.update()
      },
      check: (indexA: number, indexB: number) => {
        this.state.value.indexA = indexA
        this.state.value.indexB = indexB
        this.state.update()
      }
    })
  }


  async bubbleSort(arr: number[], options: { done: Function; check: Function }) {
    const max = arr.length - 1
    for (let j = 0; j < max; j++) {
      let done = true
      for (let i = 0; i < max - j; i++) {
        options.check(i, i + 1)
        if (arr[i] > arr[i + 1]) {
          await this.swap(arr, i, i + 1)
          done = false
        }
      }
      if (done) {
        options.done(arr)
        break
      }
    }
    return arr
  }

  async swap(arr: number[], indexA: number, indexB: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        const temp = arr[indexA]
        arr[indexA] = arr[indexB]
        arr[indexB] = temp
        resolve(true)
      }, 20)
    })
  }
}

mixin({
  store: new Store()
})


@tag('my-element')
class MyElement extends Component {
  static css = `
  .bar {
    display: inline-block;
    margin-left: 1px;
    background: #777;
    width: 10px;
  }
  
  .active {
    background: red;
  }
  `

  store: Store | undefined

  render() {
    const { state } = this.store as Store
    return (
      <div>
        <div>
          {state.value.arr?.map((item: number, index: number) => (
            <div class={classNames('bar', {
              'active': index === state.value.indexA || index === state.value.indexB
            })} style={{ height: item * 10 }}></div>
          ))}
        </div>

        <button disabled={state.value.sorting} onClick={this.store?.sort}>Start Bubble Sort</button>
        <button style="margin-left: 5px" disabled={state.value.sorting} onClick={this.store?.reset}>Reset</button>
      </div>
    )
  }
}

render(<my-element />, 'body')