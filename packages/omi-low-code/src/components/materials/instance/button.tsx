import { tag  , signal } from 'omi';
import { BaseMaterial, ComponentInstance } from '../base-material';

@tag('button-component')
export class ButtonComponent extends BaseMaterial {
  renderComponent(): JSX.Element {
    console.log("button Component render",this.instance)
    console.log("parse_json",this.parse_json())

    console.log("parse_code",this.parse_code())

    // 渲染按钮组件
    return (
      <button {...this.instance.props} onclick={this.instance.events?.onClick} >
        {this.instance.props.label}
      </button>
    );
  }
}
