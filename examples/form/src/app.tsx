import { h, tag,  Component,bind} from "../../../packages/omi/src"
import css from "./app.css?raw"
import "./my-input"
import "./my-ipaddress"

@tag('my-app')
export default class extends Component {
  static css = [ css] 
  @bind
  onSubmit(e:any){
    console.log(e)
    const formData = new FormData(e.target)
    // @ts-ignore
    for(let [key, value] of formData.entries()) {
      console.log(key,"=", value)
    }
    // alert(`x=${formData.get('x')}\ny=${formData.get('y')}\nz=${formData.get('z')}`)
    e.preventDefault()
  } 
  render() { 
    return (
      <div>
         <form method='post' onSubmit={this.onSubmit}>  
            <my-input name="x" value={1}/>
            <my-input name="y" value={2}/>
            <my-input name="z" value={3}/>
            <my-ipaddress name="ip"/>
            <input type="submit" value="Submit" />
         </form>
      </div>
    )
  }
}

