import { Component,tag,h } from "../../../packages/omi/src"


@tag("my-child")
export default class MyInput extends Component {  
    static props = {
        name:String,
        value:String
    }
    render(props:any){        
        return <div>
            <input 
                ref={this.ref} 
                placeholder={props.name}
                name={props.name} 
                value={props.value} 
                type="text"
            /> 
        </div>
    }
} 