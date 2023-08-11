import { define, OmiProps, h, render, WeElement } from 'omi'
import "../../../../src/button/index"

define('page-button', class extends WeElement {
  block: boolean = false;
  loading: boolean = false;
  disabled: boolean = false;
  ghost: boolean = false;

  static propTypes = {
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    ghost: Boolean,
  }

  render(props: {} | OmiProps<{}, any>, store: any) {
    return (
      <div style='padding:24px'>
        <div style="width:500px;margin:auto;">
          <t-button
            block={this.block}
            loading={this.loading}
            disabled={this.disabled}
            ghost={this.ghost}>你好呀</t-button>
        </div>
        <label>
          <input type="checkbox" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            this.block = target.checked;
            this.update()
          }} />block
        </label>
        <label>
          <input type="checkbox" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            this.loading = target.checked;
            this.update()
          }} />loading
        </label>
        <label>
          <input type="checkbox" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            this.disabled = target.checked;
            this.update()
          }} />disabled
        </label>
        <label>
          <input id="loading" type="checkbox" onChange={(e) => {
            const target = e.target as HTMLInputElement;
            this.ghost = target.checked;
            this.update()
          }} />ghost
        </label>
      </div>
    );
  }
})