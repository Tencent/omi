import { render, tag, Component, h } from '@/index'

// 内部按钮组件 - 定义了可以被外部样式化的部分
@tag('inner-button')
class InnerButton extends Component {
  static css = `
    .btn {
      padding: 10px 20px;
      border: 2px solid #007bff;
      background: #007bff;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: inherit;
      font-size: 14px;
    }
    .btn:hover {
      background: #0056b3;
      border-color: #0056b3;
    }
    .icon {
      margin-right: 8px;
      font-size: 16px;
    }
  `

  render() {
    return (
      <button class="btn" part="button">

        <span class="icon" part="icon">🚀</span>

        <span part="text">{this.props.children || 'Click me'}</span>
      </button>
    )
  }
}

// 卡片组件 - 使用 exportparts 将内部组件的 parts 暴露出来
@tag('card-component')
class CardComponent extends Component {
  static css = `
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      margin: 10px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      background: white;
    }
    .title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #333;
    }
  `

  render() {
    return (
      <div class="card" part="card">

        <h3 class="title" part="title">{this.props.title || 'Card Title'}</h3>

        {/* 使用 exportparts 将 inner-button 的 parts 暴露出来 */}
        <inner-button exportparts="button, icon, text">
          {this.props.buttonText || 'Action'}
        </inner-button>
      </div>
    )
  }
}

// 外部容器组件 - 可以通过 ::part() 选择器样式化嵌套组件的部分
@tag('app-container')
class AppContainer extends Component {
  static css = `
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    
    /* 通过 ::part() 选择器样式化嵌套组件的部分 */
    card-component::part(card) {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
    }
    
    card-component::part(title) {
      color: #fff;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    }
    
    /* 样式化通过 exportparts 暴露的按钮部分 */
    card-component::part(button) {
      background: #ff6b6b;
      border-color: #ff6b6b;
      border-radius: 25px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    card-component::part(button):hover {
      background: #ff5252;
      border-color: #ff5252;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(255, 107, 107, 0.3);
    }
    
    card-component::part(icon) {
      font-size: 20px;
      animation: bounce 2s infinite;
    }
    
    card-component::part(text) {
      font-weight: bold;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-3px);
      }
      60% {
        transform: translateY(-1px);
      }
    }
    
    .demo-section {
      margin-bottom: 30px;
    }
    
    .demo-title {
      font-size: 24px;
      margin-bottom: 15px;
      color: #333;
      border-bottom: 2px solid #667eea;
      padding-bottom: 5px;
    }
    
    .description {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 5px;
      margin-bottom: 20px;
      border-left: 4px solid #667eea;
    }
  `

  render() {
    return (
      <div class="container">
        <div class="demo-section">
          <h1 class="demo-title">Omi ExportParts 示例</h1>

          
          <div class="description">
            <p><strong>ExportParts</strong> 允许 Web Components 将内部组件的 CSS parts 暴露给外部，
            使得父组件可以通过 <code>::part()</code> 选择器来样式化嵌套组件的特定部分。</p>
            
            <p>在这个示例中：</p>
            <ul>
              <li><code>inner-button</code> 定义了 <code>button</code>、<code>icon</code>、<code>text</code> 三个 parts</li>
              <li><code>card-component</code> 通过 <code>exportparts="button, icon, text"</code> 将这些 parts 暴露出来</li>
              <li><code>app-container</code> 可以通过 <code>card-component::part(button)</code> 等选择器来样式化这些部分</li>
            </ul>
          </div>
          
          <card-component 
            title="自定义样式卡片" 
            buttonText="点击我">
          </card-component>
          
          <card-component 
            title="另一个卡片" 
            buttonText="执行操作">
          </card-component>

        </div>
      </div>
    )
  }
}


render(<app-container />, document.body)

