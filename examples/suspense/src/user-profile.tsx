import { h, tag, Component } from 'omi'
import { userData } from './store'

// 模拟用户组件
@tag('user-profile')
export default class UserProfile extends Component {
  render() {
    const user = userData.value;
    
    if (!user) {
      return <div>no user data</div>;
    }
    
    return (
      <div class="p-4 border rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-2">User Info</h2>
        <p>name: {user.name}</p>
        <p>age: {user.age}</p>
        <p>job: {user.job}</p>
      </div>
    )
  }
}
