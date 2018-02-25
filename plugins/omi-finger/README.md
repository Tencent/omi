## omi-finger

Omi的[AlloyFinger](https://github.com/AlloyTeam/AlloyFinger)插件，让你轻松在Omi项目里支持各种触摸事件和手势。

---

## Demo

![omi-finger demo](./demo.png)

[https://alloyteam.github.io/omix/plugins/omi-finger/example/simple/](https://alloyteam.github.io/omix/plugins/omi-finger/example/simple/)

## 通过npm安装 

``` js
npm install omi-finger
```

## 使用

```js
import 'omi-finger';

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
        return  <div>
	            <div omi-finger ref="touchArea" tap={this.handleTap}  swipe={this.handleSwipe} >
	                Tap or Swipe Me!
	            </div>
	        </div>
    }
}

Omi.render(new App(),"#container");
```

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
