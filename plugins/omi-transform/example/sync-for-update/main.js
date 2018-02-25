import Omi from 'omix'
import '../../index.js'

class App extends Omi.Component {

    install(){
        this.rotateY = 45
    }

    handleClick(){
        this.refs.test.rotateY += 100
        this.rotateY = this.refs.test.rotateY
    }

    render() {
        return  (
            <div onclick={this.handleClick.bind(this)}
                 omi-transform class="test" ref="test"
                 rotateY={this.rotateY}
                 translateX="100"
                 perspective="400" >
                omi-transform
            </div>
        )
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