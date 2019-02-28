import { WeElement, define } from 'omi'

define('my-element', class extends WeElement {
  a = 1

  data = {
    arr: ['arr test']
  }

  clickHandler = ()=> {
    console.log('clicked'+ this.a)
  }

  render() {
    return (
      <view>
        <text onClick={this.clickHandler}>Hello, {this.props.msg}!</text>
        <view>
          {this.data.arr[0]}
        </view>
      </view>
    )
  }
})
