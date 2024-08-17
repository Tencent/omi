import { tag } from 'omi';
import { BaseMaterial ,ComponentInstance } from '../components/materials/base-material';

// 测试页面

@tag('my-page')
class MyPage extends BaseMaterial {
    
  // 初始化状态和方法
  state = {
    layoutInstance: {
      id: 'layout1',
      type: 'layout',
      props: {
        style: 'padding: 20px; border: 1px solid #ccc;',
      },
      children: [] as ComponentInstance[],
    }
  };

  // 增加按钮实例的方法
  addButton = () => {
    const newButton: ComponentInstance = {
      id: `button-${Date.now()}`,
      type: 'button',
      props: {
        label: '新按钮',
        style: 'margin: 5px;border: 1px solid #ccc;',
      },
      children: [],
    };

    this.state.layoutInstance.children.push(newButton);
    this.update();
    console.log("now state",this.state)
  };

  // 重写 `renderComponent` 方法
  renderComponent(instance: ComponentInstance): JSX.Element {
    return this.createComponent(instance);
  }

  // 渲染布局
  render() {
    return (
      <div>
        <button onClick={this.addButton}>增加按钮</button>
        <div>{this.renderComponent(this.state.layoutInstance)}</div>
      </div>
    );
  }
}

export function Home() {
    return <my-page />
}

