## omi-transform 

Omi的[transformjs](http://alloyteam.github.io/AlloyTouch/transformjs/)插件，让你轻松在Omi项目里快速简便支持CSS3 Transform设置。

---

## Demo

[http://alloyteam.github.io/omi/plugins/omi-transform/example/transform/](http://alloyteam.github.io/omi/plugins/omi-transform/example/transform/)

## 通过npm安装 

``` js
npm install omi-transform
```

## 使用

```js
import Omi from 'omi';
import OmiTransform from '../../omi-transform.js';

OmiTransform.init();

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
```

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
