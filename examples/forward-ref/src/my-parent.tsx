import { Component,tag,h } from "../../../packages/omi/src"



@tag("my-parent")
export default class MyInput extends Component {  
    render(){        
        return <div>
            <my-child name="x" value={1}/> 
            {/* <my-child name="y" value={2}/> 
            <my-child name="z" value={3}/>  */}
        </div>
    }
} 