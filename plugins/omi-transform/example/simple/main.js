import Omi from 'omix'
import '../../index.js'

class App extends Omi.Component {
    installed(){
        setInterval(()=>{
            this.refs.test.rotateY += 1
        })
    }

    render() {
        return  <div omi-transform class="test" ref="test" rotateZ="0" translateX="100" perspective="400" >
                    omi-transform
                </div>
    }

    style(){
        return  `
            .test{
                font-size: 20px;
                border: 1px solid red;
                width: 150px;
                font-size
                min-height: 150px;
                text-align: center;
                line-height:150px;
            }
         `
    }
}

Omi.render(new App(),"#container")