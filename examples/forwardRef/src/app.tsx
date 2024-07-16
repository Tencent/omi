import { h, tag,  Component} from "../../../packages/omi/src"
import css from "./app.css?raw"
import "./my-parent"
import "./my-child"

@tag('my-app')
export default class extends Component {
  static css = [ css]  
  render() { 
    return (
      <div> 
            <my-parent ref={this.ref}/> 
            <button onClick={()=>alert("input value=" + this.ref.current.value)}>读取Ref元素</button>
      </div>
    )
  }
}

