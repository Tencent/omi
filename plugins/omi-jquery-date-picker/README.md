## omi-jquery-date-picker

Omi的[jquery-date-range-picker](https://github.com/longbill/jquery-date-range-picker)插件，让你轻松在Omi项目里支持各种时间或者时间区域选择。

---

## Demo
![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170215195952691-1738483673.jpg)
[http://alloyteam.github.io/omi/plugins/omi-finger/example/finger/](http://alloyteam.github.io/omi/plugins/omi-finger/example/finger/)

## 通过npm安装 

``` js
npm install omi-jquery-date-picker
```

## 使用

现引入一堆[jquery-date-range-picker](http://longbill.github.io/jquery-date-range-picker/)依赖的文件:

```html
<link rel="stylesheet" href="http://longbill.github.io/jquery-date-range-picker/dist/daterangepicker.min.css">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.16.0/moment.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="http://longbill.github.io/jquery-date-range-picker/dist/jquery.daterangepicker.min.js"></script>
```

在Omi项目里使用:

```js
import Omi from 'omi';
import OmiFinger from '../../omi-finger.js';

OmiFinger.init();

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    handleTap(evt){
        this.refs.touchArea.innerHTML+='<br/>Tap';
    }

    handleSwipe(evt){
        this.refs.touchArea.innerHTML+='<br/>Swipe-'+ evt.direction;
    }

    render() {
        return  `
        <div>
            <div omi-finger ref="touchArea" onTap="handleTap"  onSwipe="handleSwipe" >
                Tap or Swipe Me!
            </div>
        </div>
        `;
    }
}

Omi.render(new App(),"#container");
```


# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
