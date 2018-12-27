import { define, WeElement } from 'omi'
import style from './_index.css'
import '../icon'
// import cellStyle from '../cells/_index.css'
// import '../icon/font-face.css'
// import fontStyle from '../icon/_font.scss'

define('o-selection', class extends WeElement {
  staticCss() {
    return style  
  }

  onTapMore = () => {
    this.fire('tapmore')
  }

  onSelectSingle = (index) => {
    this.fire('select', { index: index })
  }


  onSelect = (index) => {
    const cloneIdxs = this.props.selectedIndexs.slice(0)
    const position = this.props.selectedIndexs.indexOf(index)
    if(position===-1){
      cloneIdxs.push(index)
    }else{
      cloneIdxs.splice(position,1)
    }
    //Prevent repeated tap width setTimeout
    setTimeout(()=>{
      this.fire('select', { indexs: cloneIdxs })
    },600)
   
  }

  render(props) {
    if (props.single) {
      return (
        <div class="weui-cells weui-cells_radio">

          {props.items.map((item, index) => (
            <label class="weui-cell weui-check__label" for={`x_${this.elementId}_${index}`} onClick={() => {
              this.onSelectSingle(index)
            }}>
              <div class="weui-cell__bd">
                <p>{item.text}</p>
              </div>
              <div class="weui-cell__ft">
                <input type="radio" class="weui-check" checked={props.selectedIndex === index} name="radio1" id={`x_${this.elementId}_${index}`} />
                {props.selectedIndex === index&&<o-icon class='icon' type='check' scale='1' color='#07C160'></o-icon>}
              </div>
            </label>
          ))}

          {props.onTapMore && <a href="javascript:void(0);" ontap={this.onTapMore} class="weui-cell weui-cell_link">
            <div class="weui-cell__bd">添加更多</div>
          </a>}
        </div>
      )
    } else {
      return (
        <div class="weui-cells weui-cells_checkbox">
          {props.items.map((item, index) => (
            <label class="weui-cell weui-check__label" for={`x_${this.elementId}_${index}`} onClick={() => {
              this.onSelect(index)
            }}>
              <div class="weui-cell__hd">
                <input type="checkbox" class="weui-check" name="checkbox1" id={`x_${this.elementId}_${index}`} checked={props.selectedIndexs.indexOf(index)!==-1} />
                <o-icon class='icon' type={props.selectedIndexs.indexOf(index)!==-1?'check-square':'rect'} scale='1' color={props.selectedIndexs.indexOf(index)!==-1?'#07C160':'#ccc'}></o-icon> 
              </div>
              <div class="weui-cell__bd">
                <p>{item.text}</p>
              </div>
            </label>
          ))}
          {props.more && <a href="javascript:void(0);" class="weui-cell weui-cell_link">
            <div class="weui-cell__bd">添加更多</div>
          </a>}
        </div>
      )
    }

  }
})
