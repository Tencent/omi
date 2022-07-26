import { WeElement } from 'omi'

export default class Store {
  constructor() {
    this.init()
  }

  data

  ui: WeElement

  init() {
    this.data = {
      arr: Array.from({ length: 30 }, () => this.randomInt()),
      indexA: -1,
      indexB: -1,
      sorting: false
    }
  }

  randomInt() {
    return Math.ceil(Math.random() * 25)
  }

  reset = () => {
    this.init()
    this.ui.update()
  }

  sort = () => {
    this.data.sorting = true
    bubbleSort(this.data.arr, {
      done: () => {
        this.data.indexA = -1
        this.data.indexB = -1
        this.data.sorting = false
        this.ui.update()
      },
      check: (indexA, indexB) => {
        this.data.indexA = indexA
        this.data.indexB = indexB
        this.ui.update()
      }
    })
  }
}

async function bubbleSort(arr, options) {
  const max = arr.length - 1
  for (let j = 0; j < max; j++) {
    let done = true
    for (let i = 0; i < max - j; i++) {
      options.check(i, i + 1)
      if (arr[i] > arr[i + 1]) {
        await swap(arr, i, i + 1)
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

function swap(arr, indexA, indexB) {
  return new Promise(resolve => {
    setTimeout(() => {
      const temp = arr[indexA];
      arr[indexA] = arr[indexB]
      arr[indexB] = temp
      resolve(true)
    }, 20)
  })
}