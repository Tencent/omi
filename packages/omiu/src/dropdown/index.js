import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'

define('o-dropdown', class extends WeElement {

  static css = css

  onSelect = (index) => {
    this.props.onSelect && this.props.onSelect(index)
  }

  onToggle = (index) => {
    this.props.onToggle && this.props.onToggle(index)
  }

  render(props) {
    return (
      <div {...extractClass(props, "o-dropdown")} {...props} >
        <input type='hidden' name={props.name} value={props.children[props.selectedIndex].attributes.value}></input>
        <div class={`select-selected${props.show?' select-arrow-active':''}`} onClick={this.onToggle}>{props.children[props.selectedIndex].children[0]}</div>
        {props.show && <div class="select-items">
          {props.children.map((child, index) => {
            if (index === props.selectedIndex) {
              return <div onClick={(e)=>{this.onSelect(index)}} class='same-as-selected'>{child.children[0]}</div>
            }
            return <div onClick={(e)=>{this.onSelect(index)}}>{child.children[0]}</div>
          })}
        </div>}
      </div>
    )
  }
})
