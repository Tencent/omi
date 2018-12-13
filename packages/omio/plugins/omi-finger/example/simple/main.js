import Omi from '../../../../dist/omi'
import OmiFinger from '../../index.js'

class App extends Omi.Component {
    constructor(data) {
        super(data)
        this.handleTap = this.handleTap.bind(this)
        this.handleSwipe = this.handleSwipe.bind(this)

        this.wording = 'Tap or Swipe Me!'
    }

    handleTap(evt) {
        this.wording += '\r\nTap'
        this.update()
    }

    handleSwipe(evt) {
        this.wording+= '\r\nSwipe-' + evt.direction
        this.update()
    }

    render() {
        return <div>
            <OmiFinger  onTap={this.handleTap} onSwipe={this.handleSwipe}>
                <div class="touchArea" >
                    {this.wording}
                    </div>
            </OmiFinger>

        </div>
    }

    style() {
        return `.touchArea{
                    background-color: green;
                    width: 200px;
                    min-height: 200px;
                    text-align: center;
                    color:white;
                    height:auto;
                    white-space: pre-line;
                }`
    }
}

Omi.render(new App(), "#container")