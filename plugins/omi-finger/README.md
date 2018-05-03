## omi-finger

[Omi](http://omijs.org) /[AlloyFinger](https://github.com/AlloyTeam/AlloyFinger) integration, support touch and gesture events in your Omi project.

---

## Demo

[https://alloyteam.github.io/omi/plugins/omi-finger/example/simple/](https://alloyteam.github.io/omi/plugins/omi-finger/example/simple/)

## Install

``` js
npm i omi-finger
```

## Usgae

```js
import Omi from 'omi'
import OmiFinger from 'omi-finger'

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
```

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
