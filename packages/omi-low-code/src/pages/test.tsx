import { tag } from 'omi';
import { BaseMaterial, ComponentInstance } from '../components/materials/base-material';
import {createComponent} from '../components/materials/renderer';
// 测试页面

@tag('my-page')
class MyPage extends BaseMaterial {
  // 初始化状态和方法
  state = {
    layoutInstance: {
      id: 'layout1',
      type: 'layout',
      props: {
        style: 'padding: 20px; border: 1px solid #ccc; margin-bottom: 20px;',
      },
      children: [] as ComponentInstance[],
    },
    counter: 0,
  };

  // 增加按钮实例的方法
  addButton = () => {
    const newButton: ComponentInstance = {
      id: `button-${Date.now()}`,
      type: 'button',
      props: {
        label: '自增按钮',
        style: 'margin: 5px; padding: 10px; border-radius: 5px; border: 1px solid #ccc; background-color: #f0f0f0; cursor: pointer;',
        click: 'handleClick'
      },
      events: {
        click:JSON.stringify(this.incrementCounter)
      },
      children: [],
    };

    const alertButton: ComponentInstance = {
      id: `button-${Date.now()}`,
      type: 'button',
      props: {
        label: '警告按钮',
        style: 'margin: 5px; padding: 10px; border-radius: 5px; border: 1px solid #ccc; background-color: #f0f0f0; cursor: pointer;',
        onclick:'alert("Hello world!")'
      },
      events: {
        click:'()=>alert("Hello world!")'
      },
      children: [],
    };


    this.state.layoutInstance.children.push(newButton);
    this.state.layoutInstance.children.push(alertButton);
    
    this.update();
  };

  // 计数器增加方法
  incrementCounter() {
    // this.state.counter += 1;
    const counterText = document.getElementById('counter-text');
    if (counterText) {
      counterText.textContent = `计数: ${this.state.counter}`;
    }
  }

  // 重写 `renderComponent` 方法
  renderComponent(): JSX.Element {
    return createComponent(this.state.layoutInstance);
  }

  // 渲染布局
  render() {
    return (
      <div style="text-align: center;">
        <h2>动态组件示例</h2>
        <button 
          onClick={this.addButton} 
          style="margin-bottom: 20px; padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;"
        >
          增加按钮
        </button>
        <div id="counter-text" style="margin-bottom: 20px;">计数: 0</div>
        <div style="display: flex; justify-content: center;">
          {this.renderComponent()}
        </div>
      </div>
    );
  }
}

export function Home() {
  return <my-page />
}
