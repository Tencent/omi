# Omi Suspense 演示示例

这个项目展示了如何使用 Omi 框架的 Suspense 组件来处理异步数据加载、组件懒加载以及错误处理。Suspense 组件让异步操作变得简单优雅，提升了用户体验。

## 项目简介

Omi Suspense 是 Omi 框架提供的一个强大组件，用于处理异步依赖。它可以：

- 优雅地处理异步数据加载
- 支持组件懒加载
- 提供加载状态和错误状态的处理
- 简化异步操作的代码结构

本示例展示了一个用户信息加载的场景，通过 Suspense 组件处理数据获取、加载状态和错误处理。

## 安装步骤

1. 克隆项目并安装依赖：

```bash
npm i
```

2. 启动开发服务器：

```bash
npm start
```

3. 构建项目：

```bash
npm run build
```

## 使用说明

本示例展示了如何：

1. 使用 Suspense 组件加载异步数据
2. 处理加载状态（显示加载指示器）
3. 处理错误状态（显示错误信息和重试按钮）
4. 在数据加载完成后更新 UI

## 示例代码解析

### 主应用组件

```tsx
@tag('my-app')
export default class extends Component {
  static css = [tailwind, css]
  
  // 模拟异步数据获取
  fetchUserData = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 随机决定是否模拟错误
        if (Math.random() > 0.9) {
          reject(new Error('获取用户数据失败'))
        } else {
          resolve({
            name: 'Jasper',
            age: 28,
            job: '前端开发工程师'
          })
        }
      }, 1500) // 延迟1.5秒模拟网络请求
    })
  }
  
  render() {
    return (
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-8">OMI Suspense 示例</h1>
        
        <o-suspense
          imports={[import('./components/user-info')]}
          data={this.fetchUserData}
          minLoadingTime={500}
          onLoaded={(event) => {
            userData.value = event.detail[1] // 获取data函数返回的结果
          }}
          pending={
            <div class="p-4 bg-blue-100 rounded animate-pulse">
              <p class="text-blue-800">加载用户数据中...</p>
            </div>
          }
          fallback={(error) => (
            <div class="p-4 bg-red-100 rounded">
              <p class="text-red-800">加载失败: {error.message}</p>
              <button 
                class="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => this.update()}
              >
                重试
              </button>
            </div>
          )}
        >
          <user-info-container>
            <user-profile></user-profile>
          </user-info-container>
        </o-suspense>
      </div>
    )
  }
}
```

### 用户信息容器组件

```tsx
@tag('user-info-container')
export default class UserInfoContainer extends Component {
  render() {
    return (
      <div class="bg-white p-6 rounded-lg shadow-lg mb-4">
        <div class="border-t border-gray-200 pt-4">
          <slot></slot>
        </div>
      </div>
    )
  }
}
```

### 用户资料组件

```tsx
@tag('user-profile')
class UserProfile extends Component {
  render() {
    const user = userData.value;
    
    if (!user) {
      return <div>无用户数据</div>;
    }
    
    return (
      <div class="p-4 border rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-2">用户信息</h2>
        <p>姓名: {user.name}</p>
        <p>年龄: {user.age}</p>
        <p>职业: {user.job}</p>
      </div>
    )
  }
}
```

## Suspense 组件的关键特性

### 1. 组件属性

| 属性 | 类型 | 描述 |
|------|------|------|
| `imports` | `Promise<unknown>[]` | 需要异步加载的组件模块 |
| `data` | `Function` | 返回 Promise 的数据获取函数 |
| `minLoadingTime` | `number` | 最小加载时间（毫秒），防止闪烁 |
| `onLoaded` | `Function` | 数据加载完成的回调函数 |
| `beforePending` | `Function` | 加载状态显示前的钩子函数 |
| `pending` | `VNode/Function` | 加载状态的渲染内容 |
| `fallback` | `VNode/Function` | 错误状态的渲染内容 |
| `customRender` | `Function` | 自定义渲染函数 |

### 2. 事件

- `pending`: 开始加载时触发
- `resolve`: 加载成功时触发
- `loaded`: 加载完成时触发，包含加载结果
- `data-loaded`: 数据加载完成时触发
- `fallback`: 加载失败时触发

## 如何处理异步加载和错误状态

### 异步加载状态

Suspense 组件提供了两种方式来处理加载状态：

1. **使用 `pending` 属性**：

```tsx
<o-suspense
  pending={
    <div class="loading-indicator">
      <p>加载中...</p>
    </div>
  }
>
  {/* 内容 */}
</o-suspense>
```

2. **使用命名插槽**：

```tsx
<o-suspense>
  <div slot="pending">加载中...</div>
  {/* 内容 */}
</o-suspense>
```

### 错误处理

同样，错误状态也有两种处理方式：

1. **使用 `fallback` 属性**：

```tsx
<o-suspense
  fallback={(error) => (
    <div class="error-container">
      <p>错误: {error.message}</p>
      <button onClick={() => this.update()}>重试</button>
    </div>
  )}
>
  {/* 内容 */}
</o-suspense>
```

2. **使用命名插槽**：

```tsx
<o-suspense>
  <div slot="fallback">加载失败，请重试</div>
  {/* 内容 */}
</o-suspense>
```

### 最小加载时间

为了防止加载状态闪烁（特别是在网络较快的情况下），可以设置最小加载时间：

```tsx
<o-suspense minLoadingTime={500}>
  {/* 内容 */}
</o-suspense>
```

### 自定义渲染

对于更复杂的渲染逻辑，可以使用 `customRender` 属性：

```tsx
<o-suspense
  customRender={(results) => {
    // 根据 results 自定义渲染逻辑
    return <div>{/* 自定义内容 */}</div>
  }}
>
  {/* 内容 */}
</o-suspense>
```

## 最佳实践

1. **合理设置 minLoadingTime**：避免加载状态闪烁
2. **提供友好的错误处理**：显示明确的错误信息和重试选项
3. **使用 beforePending 钩子**：在显示加载状态前执行过渡动画
4. **合理组织组件结构**：将异步加载的组件拆分为独立模块

## 许可证

MIT © OMI
