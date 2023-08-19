import { OmiProps, WeElement, define, h, tag } from "omi";

import '../../../../../src/input'
import observable from "../../../../../src/utils/observable";

@tag('page-input')
export default class extends WeElement {

  static css = '';

  inputValue = ''

  render(props: {} | OmiProps<{}, any>, store: any) {

    return (
      <div style="padding:24px">
        <div style="display:flex;">
          <div style="width:500px;margin:auto;text-align:center;">
            <t-input
              status="error"
              tips="这是 tips 文本信息"
              align="center"
              value={this.inputValue}
              onChange={
                (val: any) => {
                  this.inputValue = val
                  // this.update()
                }
              }
            />
          </div>
          <div>
            {this.inputValue}
          </div>
        </div>
      </div>

    );
  }
}