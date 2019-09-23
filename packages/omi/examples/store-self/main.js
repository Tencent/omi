import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
 use(){
	 return [
    { count: 'count' }
  ]
 }

  add = () => this.store.add()
  sub = () => this.store.sub()

  addIfOdd = () => {
    if (this.using.count % 2 !== 0) {
      this.store.add()
    }
  }

  addAsync = () => {
    setTimeout(() => this.store.add(), 1000)
  }

  render() {
    return (
      <p>
        Clicked: {this.using.count} times
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.addIfOdd}>
          Add if odd
        </button>
        <button onClick={this.addAsync}>
          Add async
        </button>
				<div>{Math.random()}</div>
      </p>
    )
  }
})



define('my-app', _ =>(
  <div>
    <span onClick={_.store.random}>{_.store.data.msg}</span>
    <my-counter></my-counter>
  </div>
), {
  useSelf: ['msg']
})

render(<my-app />, 'body', new class Store{

		data = {
			msg: 'aaa',
			count: 0
		}
		sub = ()=> {
			this.data.count--
		}
		add = ()=>  {
			this.data.count++
		}
		random = ()=> {
			console.log(this)
			this.data.msg = Math.random()
		}

})
