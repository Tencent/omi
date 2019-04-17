import { WeElement, define } from 'omi'

define('my-element', class extends WeElement {
  a = 1

  data = {
    arr: ['item1', 'item2']
  }

  clickHandler = () => {
    console.log('clicked' + this.a)

    this.data.arr[0] = Math.random()
    this.data.arr[1] = Math.random()
    this.update()
    //上面代码等同于，注意 h5 不支持下面方式更新
    // this.update({
    //   'arr[0]': Math.random(),
    //   "arr[1]": Math.random()
    // })
  }

  install(){
    this.data.changedMsg = this.props.msg + " changed"
  }

  render() {
    const { msg } = this.props
    const { arr, changedMsg } = this.data
    return (
      <view>
        <view>Hello, {msg}!</view>
        <view>Hello, {changedMsg}</view>
        <button onClick={this.clickHandler}>点击我</button>
        <view>{arr[0]}</view>
        <view>{arr[1]}</view>
      </view>
    )
  }
})
