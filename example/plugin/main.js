import OmiDrag from './omi-drag.js';

OmiDrag.init();


class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    moveHandlerA(){
        console.log('a is moving');
    }

    moveHandlerB(){
        console.log('b is moving');
    }

    render() {
        return  `
    <div>
        <div omi-drag class="test" dragMove="moveHandlerA" >Drag Me A</div>
        <div omi-drag class="test" dragMove="moveHandlerB" >Drag Me B</div>
    </div>
    `;
    }

    style(){
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

Omi.render(new App(),"#container");
