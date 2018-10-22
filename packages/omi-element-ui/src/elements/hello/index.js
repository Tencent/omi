import { tag, WeElement } from 'omi'
import style from './_index.css'

@tag('hello-element')
class HelloElement extends WeElement{
    static get data() {
        return { name: '' }
    }

    installed(){
        setTimeout(()=>{
            this.store.data.name = 'Good Job!'
        },1000)
    }
    css(){
        return style
    }

    render(props, data){
        return(
            <div class="hello">
                <h1> {data.name} </h1>
               <div> I am hello element.</div>
               <div class="omi"></div>
            </div> 
        )
    }
}