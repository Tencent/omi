import Omi from 'omi';
import OmiFinger from '../../index.js';

OmiFinger.init();

class App extends Omi.Component {
    constructor(data) {
        super(data);
        this.data.text = 'handleSwipe'
    }

    handleTap(evt){
        this.refs.touchArea.innerHTML+='<br/>Tap';
    }

    handleSwipe(evt){

        alert('handleSwipe')
        this.data.text = 'handleSwipe2'
        this.update()
    }

    handleSwipe2(evt){
        alert('handleSwipe2')
    }

    style(){
        return  `
            .touchArea{
                background-color: green;
                width: 200px;
                min-height: 200px;
                text-align: center;
                color:white;
                height:auto;
            }
         `;
    }

    render() {
        return  `
        <div>
            <div omi-finger class="touchArea" ref="touchArea" tap="handleTap"  swipe="{{text}}" >
                Tap or Swipe Me!
            </div>
        </div>
        `;
    }
}

Omi.render(new App(),"#container");