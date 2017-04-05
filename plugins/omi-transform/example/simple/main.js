import Omi from 'omi';
import OmiTransform from '../../omi-transform.js';

OmiTransform.init();

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    installed(){
        setInterval(function(){
            this.refs.test.rotateY += 1;
        }.bind(this));
    }

    render() {
        return  `
            <div omi-transform class="test" ref="test" rotateZ="0" translateX="100" perspective="400" >
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

Omi.render(new App(),"#container");