import { WeElement, define } from 'omi'

define('my-element', class extends WeElement {
  render() {
    return (
      <view>
        <text>Hello, {this.props.msg}!</text>
      </view>
    )
  }
})