import OmiDrag from './omi-drag.js';

OmiDrag.init();


class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render() {
        return  `
        <div>
            <div omi-drag  class="test">Drag Me<div>
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
