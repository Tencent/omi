import { Component,tag,h,createRef } from "../../../packages/omi/src"


@tag("my-ipaddress",{formAssociated:true})
export default class MyInput extends Component {
    static props = {
        name:{
            type:String,
            value:"ip"
        },
        value:String
    } as any
    
    f1= createRef()
    f2=createRef()
    f3=createRef()
    f4=createRef()

    getFieldValue(){
        return {
            // @ts-ignore
            [this.props.name]:`${this.f1.current.value}.${this.f2.current.value}.${this.f3.current.value}.${this.f4.current.value}`
        }            
    }

    render(){        
        return <div>
            <input ref={this.f1} name="f1" value="192" type="text"/>
            <input ref={this.f2}  name="f2" value="168" type="text"/>
            <input ref={this.f3} name="f3" value="0" type="text"/>
            <input ref={this.f4} name="f4" value="1" type="text"/>
        </div>
    }
} 