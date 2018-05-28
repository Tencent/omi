## omi-touch

AlloyTouch / [Omi](http://omijs.org) integration. Smooth scrolling, rotation, pull to refresh, page transition and any motion for your Omi project.

---

## Demo

[https://tencent.github.io/omi/plugins/omi-touch/example/simple/](https://tencent.github.io/omi/plugins/omi-touch/example/simple/)

## Install

``` js
npm i omi-touch
```

## Usage

```js
import {render, Component} from 'omi'
import  OmiTouch from 'omi-touch'

class App extends Component {
    constructor(data) {
        super(data)
        
        this.touchChange = this.touchChange.bind(this)
    }

    touchChange(value){
        console.log(this)
        console.log(value)
    }
   
    render() {
        return <div class="main">
        <OmiTouch  min={-1750} max={0} change={this.touchChange}>

            <div class="touchArea" >
                        <ul >
                            <li>Hello, Omi-Touch!</li>
                            <li>AlloyTouch</li>x
                            <li>AlloyFinger</li>
                            <li>Omi</li>
							  ...
							  ...
							  ...
                            <li style="border-bottom: none;"> row 25</li>
                        </ul>
                    </div>

        </OmiTouch>
        </div>
    }

}

render(<App />,"#container")
```


# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
