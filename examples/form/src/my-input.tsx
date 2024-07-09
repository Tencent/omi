import { Component,component,h } from "../../../packages/omi/src"


@component({tagName:"my-input",formAssociated:true})
export default class MyInput extends Component {
    render(){
        return <div><input name="x" value="1" type="text"/></div>
    }
}