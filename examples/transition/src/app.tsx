import { h, tag, signal, Component } from 'omi'
import css from "./app.css?raw"
import { tailwind } from './tailwind'
import 'omi-transition' // 导入 omi-transition

// 创建两个独立的信号用于分别控制基本元素和列表的显示/隐藏
const showBasic = signal(true)
const showList = signal(true)

@tag('my-app')
export default class extends Component {
  static css = [
    tailwind, 
    css,
    `
    /* 定义过渡动画样式 */
    .fade-leave-to,
    .fade-enter-from {
      opacity: 0;
      transform: translateX(15px);
    }

    .fade-leave-active,
    .fade-enter-active {
      transition: all 500ms ease-in;
    }

    /* 列表动画样式 */
    .list-item {
      display: inline-block;
      margin-right: 10px;
      padding: 10px 20px;
      background-color: #07c160;
      color: white;
      border-radius: 4px;
      margin-top: 10px;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }
    `
  ]
  
  // 列表项数据
  items = ['Item A', 'Item B', 'Item C', 'Item D']
  
  // 切换基本元素的显示/隐藏状态
  toggleBasic = () => {
    showBasic.value = !showBasic.value
  }
  
  // 切换列表的显示/隐藏状态
  toggleList = () => {
    showList.value = !showList.value
  }
  
  // 动画完成后的回调
  onAfterLeave = () => {
    console.log('animation end: element has left')
  }
  
  render() {
    return (
      <div class="container">
        <h1 class="text-4xl mb-6">Omi Transition Example</h1>
        
        {/* 基本过渡动画示例 */}
        <div class="mb-8">
          <h2 class="text-2xl mb-4">Basic Transition</h2>
          <button 
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={this.toggleBasic}
          >
            {showBasic.value ? 'Hide Element' : 'Show Element'}
          </button>
          
          <div 
            show={showBasic.value} 
            o-transition={{
              name: 'fade',
              afterLeave: this.onAfterLeave
            }}
            class="mt-4 p-4 bg-green-100 rounded"
          >
            <h3 class="text-xl text-green-800">Transition Element</h3>
            <p>This element will have a fade in and out and a shift effect</p>
          </div>
        </div>
        
        {/* 列表过渡动画示例 */}
        <div>
          <h2 class="text-2xl mb-4">List Transition</h2>
          <button 
            class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={this.toggleList}
          >
            {showList.value ? 'Hide List' : 'Show List'}
          </button>
          
          <div class="mt-4">
            {this.items.map((item, index) => (
              <div
                class="list-item"
                show={showList.value}
                o-transition={{
                  name: 'fade',
                  delay: (index + 1) * 150 // 为每个项添加递增延迟，创建级联效果
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

