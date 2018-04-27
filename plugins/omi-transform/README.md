## omi-transform 

Omi的[transformjs](http://alloyteam.github.io/AlloyTouch/transformjs/)插件，让你轻松在Omi项目里快速简便支持CSS3 Transform设置。

---

## Demo

[http://alloyteam.github.io/omi/plugins/omi-transform/example/simple/](http://alloyteam.github.io/omi/plugins/omi-transform/example/simple/)

## 通过npm安装 

``` js
npm install omi-transform
```

## 使用

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
