import Omi from 'omi';
import OmiFinger from '../../omi-transform.js';

OmiFinger.init();

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    installed(){
        setInterval(function(){
            this.refs.test.rotateZ += 0.1;
        }.bind(this));
    }

    render() {
        return  `
            <div omi-transform class="test" ref="test" rotateZ="45" translateX="100" >
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