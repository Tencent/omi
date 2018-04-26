import OmiDrag from './omi-drag.js'
import Omi from '../../src/index.js'



class App extends Omi.Component {
    constructor(data) {
        super(data)
        this.name = 'app'
    }

    clickHandler() {
        console.log('click')
        console.log(this.aa())
    }

    aa(){
        return this.name
    }
   

    render() {
        return <div>
            <OmiDrag click={this.clickHandler.bind(this)}>
                <div class="test">Drag Me A</div>
            </OmiDrag>
        </div>
    }

    style() {
        return `
        .test{
            width:100px;
            height:100px;
            color:white;
            line-height:90px;
            text-align:center;
            background-color:#00BFF3;
        }
        `
    }
}

Omi.render(new App(), '#container')
