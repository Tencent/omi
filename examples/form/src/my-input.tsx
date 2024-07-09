import { Component,component,h } from "../../../packages/omi/src"


@component({tagName:"my-input",formAssociated:true})
export default class MyInput extends Component {
    static props = {
        name:String,
        value:String
    } as any
    render(props:any){
        return <div><input name={props.name} value={props.value} type="text"/></div>
    }
}