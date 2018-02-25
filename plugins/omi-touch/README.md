## omi-touch

Omi的[AlloyTouch](https://github.com/AlloyTeam/AlloyTouch)插件，Omi项目的触摸运动解决方案（支持触摸滚动、旋转、翻页、选择等等）。

---

## Demo

![omi-touch demo](./demo.png)

[https://alloyteam.github.io/omix/plugins/omi-touch/example/simple/](https://alloyteam.github.io/omix/plugins/omi-touch/example/simple/)

## 通过npm安装 

``` js
npm install omi-touch
```

## 使用

```js
import Omi from 'omix';
import 'omi-touch';

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render() {
        return  <div class="main">
	            <div  omi-touch class="touchArea" motionRef="scroller" min="-1750" max="0" >
	                        <ul ref="scroller">
	                            <li>Hello, Omi-Touch!</li>
	                            <li>AlloyTouch</li>
	                            <li>Transformjs</li>
	                            <li>AlloyFinger</li>
	                            <li>Omi</li>
	                            ...
	                            ...
	                            <li> row 24</li>
	                            <li style="border-bottom: none;"> row 25</li>
	                        </ul>
	                    </div>
	        </div>
    }
}

Omi.render(new App(),"#container");
```


# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
