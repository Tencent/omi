import { WeElement, define } from 'omi'

define('my-element', class extends WeElement {
  a = 1

  data = {
    arr: ['item1', 'item2']
  }

  clickHandler = () => {
    console.log('clicked' + this.a)

    // this.data.arr[0] = Math.random()
    // this.data.arr[1] = Math.random()
    // this.update()
    //上面代码等同于:
    this.update({
      'arr[0]': Math.random(),
      "arr[1]": Math.random()
    })
  }

  render() {
    return (
      <view>
        <view>Hello, {this.props.msg}!</view>
        <button onClick={this.clickHandler}>点击我</button>
        <view>{this.data.arr[0]}</view>
        <view>{this.data.arr[1]}</view>
      </view>
    )
  }
})
