import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {


  data = {
    count: 1
  }

  sub = () => {
    this.data.count--
    this.update()
  }

  add = () => {
    this.data.count++
    this.update()
  }

  render() {
    console.log(1)
    return (
      <div>
        {Math.random()}
        <button onClick={this.sub}>-</button>
        <span>{this.data.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
})



define('my-app', class extends WeElement {

  installed(){
    setTimeout(()=>{

      this.updateSelf()
    },1000)
  }

  render() {
    return (
      <div>
        <div>{Math.random()}</div>
        <my-counter></my-counter>
      </div>
    )
  }
})

render(<my-app />, 'body')
