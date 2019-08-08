import { h } from 'omis'
import './_index.css'

const Counter = (props, store) => {
  return (
    <div>
      <button onClick={store.sub}>-</button>
      <span>{store.count}</span>
      <button onClick={store.add}>+</button>

      <div onClick={store.clickHandle}>跳转</div>
    </div>
  )
}

Counter.store = _ => {
  return {
    count: 3,
    add() {
      this.count++
      this.update()
    },
    sub() {
      this.count--
      this.update()
    },
    clickHandle(){
      wx.navigateTo({
        url: '../log/index?id=1',
      })
    }
  }
}

export default Counter
