import { h, tag, Component, VNode } from 'omi'
import css from "./app.css?raw"
import { tailwind } from './tailwind'
import 'omi-suspense'

import { userData } from './store'
import UserInfoContainer from './user-info'
import UserProfile from './user-profile'

@tag('my-app')
export default class extends Component {
  static css = [tailwind, css]
  
  // 模拟异步数据获取
  fetchUserData = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 随机决定是否模拟错误
        if (Math.random() > 0.9) {
          reject(new Error('get user data failed'))
        } else {
          resolve({
            name: 'Jasper',
            age: 28,
            job: 'Frontend Developer'
          })
        }
      }, 1500) // 延迟1.5秒模拟网络请求
    })
  }

  handleError = (error: any) => {
    console.error('load failed:', error)
  }
  
  render() {
    return (
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-8">OMI Suspense Example</h1>
        
        <o-suspense
          imports={[import('./user-info')]}
          data={this.fetchUserData}
          minLoadingTime={500}
          onLoaded={(event: { detail: (any | null)[] }) => {
            userData.value = event.detail[1] // 获取data函数返回的结果
            console.log('data loaded:', userData.value)
          }}
          beforePending={async () => {
            console.log('start loading...')
            return new Promise(resolve => setTimeout(resolve, 200))
          }}
          pending={
            <div class="p-4 bg-blue-100 rounded animate-pulse">
              <p class="text-blue-800">loading user data...</p>
            </div>
          }
          fallback={(error: { message: string | number | boolean | object | VNode<any> | null | undefined }) => (
            <div class="p-4 bg-red-100 rounded">
              <p class="text-red-800">load failed: {error.message}</p>
              <button 
                class="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => this.update()}
              >
                retry
              </button>
            </div>
          )}
        >
          <UserInfoContainer>
            <UserProfile></UserProfile>
          </UserInfoContainer>
        </o-suspense>
      </div>
    )
  }
}

