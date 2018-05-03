## omi-transform 

[Omi](http://omijs.org) / css3transform  integration. Support CSS3 transformation in your Omi project.

---

## Demo

[http://alloyteam.github.io/omi/plugins/omi-transform/example/simple/](http://alloyteam.github.io/omi/plugins/omi-transform/example/simple/)

## Install

``` js
npm i omi-transform
```

## Usage

```js
import Omi from 'omi'
import 'omi-transform'

class App extends Omi.Component {
    installed(){
        setInterval(()=>{
            this.refs.test.rotateY += 1
        })
    }

    render() {
        return  <div omi-transform class="test" ref="test" rotateZ="0" translateX="100" perspective="400" >
                    omi-transform
                </div>
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
         `
    }
}

Omi.render(new App(),"#container")
```

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
