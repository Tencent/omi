import { tag, Component, h } from 'omi'

@tag('user-info-container')
export default class UserInfoContainer extends Component {
  render() {
    return (
      <div class="bg-white p-6 rounded-lg shadow-lg mb-4">
        <div class="border-t border-gray-200 pt-4">
          {/* 插槽用于嵌套子组件 */}
          <slot></slot>
        </div>
      </div>
    )
  }
}
