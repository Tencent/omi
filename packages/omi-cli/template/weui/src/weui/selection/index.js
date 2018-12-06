import { define, WeElement } from 'omi'
import style from './_index.css'
import cellStyle from '../cells/_index.css'
import '../icon/font-face.css'
import fontStyle from '../icon/_font.scss'

define('ow-selection', class extends WeElement {
  css() {
    return style + cellStyle + fontStyle
  }

  render(props) {

    if (props.single) {
      return (
        <div class="weui-cells weui-cells_radio">

          {props.items.map((item, index) => (
            <label class="weui-cell weui-check__label" for={`x_${this.__elementId}_${index}`}>
              <div class="weui-cell__bd">
                <p>{item.text}</p>
              </div>
              <div class="weui-cell__ft">
                <input type="radio" class="weui-check" name="radio1" id={`x_${this.__elementId}_${index}`} />
                <span class="weui-icon-checked"></span>
              </div>
            </label>
          ))}

           <a href="javascript:void(0);" class="weui-cell weui-cell_link">
            <div class="weui-cell__bd">添加更多</div>
          </a>
        </div>
      )
    } else {
      return (
        <div class="weui-cells weui-cells_checkbox">

          {props.items.map((item, index) => (

            <label class="weui-cell weui-check__label" for={`x_${this.__elementId}_${index}`}>
              <div class="weui-cell__hd">
                <input type="checkbox" class="weui-check" name="checkbox1" id={`x_${this.__elementId}_${index}`} checked="checked" />
                <i class="weui-icon-checked"></i>
              </div>
              <div class="weui-cell__bd">
                <p>standard is dealt for u.</p>
              </div>
            </label>
          ))}

          <a href="javascript:void(0);" class="weui-cell weui-cell_link">
            <div class="weui-cell__bd">添加更多</div>
          </a>
        </div>
      )
    }

  }
})
