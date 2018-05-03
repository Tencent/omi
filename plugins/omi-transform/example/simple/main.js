import Omi from '../../../../dist/omi'
import OmiTransform from '../../index'

class App extends Omi.Component {

    install() {
        this.rotateZ = 0

        this.linkRef = (e)=>{
            this.trDiv = e
        }
    }

    installed() {
        setInterval(() => {
            //slow
            // this.rotateZ += 1
            // this.update()

            //fast
            this.trDiv.rotateZ +=2
            this.rotateZ = this.trDiv.rotateZ 

        }, 16)
    }

    render() {

        return (
            <OmiTransform rotateZ={this.rotateZ} translateX={100} perspective={400} >
                <div ref={this.linkRef} class="test" style="color:red;">
                    omi-transform
                </div>
            </OmiTransform>
        )

    }

    style() {
        return `
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

Omi.render(<App />, "#container")