import { WeElement, define } from '../../src/omi'

class HelloElement extends WeElement {

    static get props(){
        return {
            propFromParent: {
                value: '9'
            },
            msg: {
                value: ''
            },
            num :{
                value :10
            }
        }
        //不需要默认值直接使用数组
        //return ['prop-from-parent', 'msg']
    }

    static get data() {
        return {
            a: 1,
            b: {
                c: 2
            }
        }
    }

    onClick = (evt) => {
        //trigger CustomEvent
        this.fire('abc', { name : 'dntzhang', age: 12 })
        evt.stopPropagation()
    }

    installed(){
        setTimeout(() => {
            this.data.a = 2
            this.update()
        }, 1000);
    }

    css() {
        return `
         div{
             color: red;
             cursor: pointer;
         }`
    }

    render(props, data) {
        return (
            <div onClick={this.onClick}>
                Hello {props.msg} {props.propFromParent}
                <div>Click Me!{props.num}</div>
                <div>data: {data.a}</div>
                <div>props {props.num}</div>
            </div>
        )
    }
    
}

define('hello-element', HelloElement)
