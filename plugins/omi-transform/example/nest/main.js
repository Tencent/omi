import Omi from '../../../../src/index.js';
import OmiTransform from '../../omi-transform.js';

OmiTransform.init();



class Test extends Omi.Component {
    constructor(data) {
        super(data);
    }

    installed(){

        this.data.rotateZ =60;
    }

    render() {
        return  `
   <div omi-transform class="test" ref="test" rotateZ="${this.data.rotateZ}" translateX="100" >
    omi-transform
</div>
        `;
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
         `;
    }
}

Omi.makeHTML('Test',Test);

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    installed(){

        this.data.rotateZ =60;
    }

    render() {
        return  `
        <div>
            <Test />
        </div>
        `;
    }

}

Omi.render(new App(),"#container");