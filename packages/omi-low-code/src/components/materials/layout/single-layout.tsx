import { tag , signal } from 'omi';
import { BaseMaterial, ComponentInstance } from '../base-material';
import { createComponent } from '../renderer';


@tag('single-layout')
export class SingleLayout extends BaseMaterial {
  renderComponent(): JSX.Element {
    // 渲染布局组件，包含子组件的插槽
    // 需要额外考虑当前的状态，若没有children，是如何渲染的，是否需要渲染默认的slot
    return (
      <div {...this.instance.props}>
        {this.instance.children.map(child => createComponent(child))}
      </div>
    );
  }
}
