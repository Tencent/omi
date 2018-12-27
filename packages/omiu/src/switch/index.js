import { define, WeElement } from 'omi'
import style from './_index.css'

define('o-switch', class extends WeElement {
  css() {
    return style 
  }

  onChange = ()=>{
    this.fire('change', this._ele.checked)
  }
  render(props) {

    if (props.checked) {
      return (

        <label for={`x_${this.elementId}`} class="weui-switch-cp">
          <input id={`x_${this.elementId}`} ref={(e)=>{this._ele = e}} class="weui-switch-cp__input" type="checkbox" onChange={this.onChange} checked="checked" />
          <div class="weui-switch-cp__box"></div>
        </label>
      )
    }


    return <input class="weui-switch" type="checkbox"  ref={(e)=>{this._ele = e}} onChange={this.onChange} ></input>



  }
})
