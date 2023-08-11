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
      resolve()
    }, 20)
  })
}

class Store {
  constructor() {
    this.init()
  }

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

@tag('my-element')
class extends WeElement {
  static css = `
    .bar {
      display: inline-block;
      margin-left: 1px;
      background: #777;
      width: 10px; 
    }
    
    .active{
      background: red;
    }`

  installed() {
    this.store.ui = this
  }

  render(prop, store) {
    return (
      <div>
        <div>
          {store.data.arr.map((item, index) => (
            <div class={classNames('bar', {
              'active': index === store.data.indexA || index === store.data.indexB
            })} style={{ height: item * 10 }}></div>
          ))}
        </div>

        <button disabled={store.data.sorting} onClick={store.sort}>Start Bubble Sort</button>
        <button style="margin-left: 5px" disabled={store.data.sorting} onClick={store.reset}>Reset</button>
      </div>
    )
  }
}

render(<my-element />, 'body', new Store)