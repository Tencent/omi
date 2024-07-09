import { h, tag,  Component,bind} from "../../../packages/omi/src"
import css from "./app.css?raw"
import "./my-input"

@tag('my-app')
export default class extends Component {
  static css = [ css] 
  @bind
  onSubmit(e:any){
    console.log(e)
    const formData = new FormData(e.target)
    e.stopPropagation()    
    return false
  }
  render() { 
    return (
      <div>
         <form method='post' onSubmit={this.onSubmit}>  
            <my-input/>
            <input type="submit" value="Submit" />
         </form>
      </div>
    )
  }
}

