<h2 id="插件体系">插件体系</h2>

[Omi](https://github.com/AlloyTeam/omi)是Web组件化框架，怎么又来了个插件的概念？

可以这么理解: Omi插件体系可以赋予dom元素一些能力，并且可以和组件的实例产生关联。

### omi-drag

且看这个例子:

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=plugin" target="_blank">点击这里→在线试试</a>

```js
import OmiDrag from './omi-drag.js';

OmiDrag.init();

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render() {
        return  `
        <div>
            <div omi-drag class="test">Drag Me</div>
        </div>
        `;

    }

    style(){
       return `
        .test{
            width:100px;
            height:100px;
            color:white;
            line-height:90px;
            text-align:center;
            background-color:#00BFF3;
        }
        `
    }
}

Omi.render(new App(),"#container");
```

如上面的代码所示，通过在div上标记omi-drag，这个div就能够被用户使用鼠标拖拽。我们称omi-drag.js为omi插件。
是不是非常方便？那么这个omi-drag是怎么实现的？

## Omi.extendPlugin

核心方法: Omi.extendPlugin( pluginName, handler )

下面的代码就是展示了如何通过 Omi.extendPlugin 赋予dom拖拽的能力:

```js
;(function () {

    var OmiDrag = {};
    var Omi = typeof require === 'function'
        ? require('omi')
        : window.Omi;

    OmiDrag.init = function(){
        Omi.extendPlugin('omi-drag',function(dom, instance){
            dom.style.cursor='move';
            var isMouseDown = false,
                preX = null,
                preY = null,
                currentX = null,
                currentY = null,
                translateX = 0,
                translateY = 0;

            dom.addEventListener('mousedown',function(evt){
                isMouseDown = true;
                preX = evt.pageX;
                preY = evt.pageY;
                evt.stopPropagation();
            },false);

            window.addEventListener('mousemove',function(evt){
                if(isMouseDown){
                    currentX = evt.pageX;
                    currentY = evt.pageY;
                    if(preX != null){
                        translateX += currentX - preX;
                        translateY += currentY - preY;
                        dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';
                    }
                    preX = currentX;
                    preY = currentY;
                    evt.preventDefault();
                }
            },false);

            window.addEventListener('mouseup',function(){
                isMouseDown = false;
                preX = preY = currentX = currentY = null;
            },false);
        });
    }

    OmiDrag.destroy = function(){
        delete Omi.plugins['omi-drag'];
    };

    if (typeof exports == "object") {
        module.exports = OmiDrag;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return OmiDrag });
    } else {
        window.OmiDrag = OmiDrag;
    }

})();
```

方法: Omi.extendPlugin( pluginName, handler )

其中pluginName为插件的名称
其中handler为处理器。handler可以拿到标记了pluginName的dom以及dom所在的组件的实例，即 dom 和 instance。

通过 Omi.extendPlugin，可以赋予dom元素一些能力，也可以和组件的实例(instance)产生关联。
但是上面的例子没有和instance产生关联，我们接下来试试:

## 关联instance

我们想在组件里面能够监听到move并且执行回调。如下:

```js
...
...
moveHandler(){
    console.log('moving');
}

render() {
    return  `
    <div>
        <div omi-drag class="test">Drag Me</div>
    </div>
    `;
}
...
```

主要被拖动过程中，moveHandler就不断地被执行。插件代码需要修改:

```js
...
window.addEventListener('mousemove',function(evt){
    if(isMouseDown){
        currentX = evt.pageX;
        currentY = evt.pageY;
        if(preX != null){
            translateX += currentX - preX;
            translateY += currentY - preY;
            dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';
        }
        preX = currentX;
        preY = currentY;
        evt.preventDefault();
        instance.moveHandler(evt);
    }
},false);
```

我们在里面增加了instance.moveHandler(evt);方法，用来执行组件实例上的moveHandler方法。
这样的话:就是组件的实例(instance)产生关联。但是还是有问题？如果标记了多个omi-drag 就会有问题！如:

```js
...
render() {
    return  `
    <div>
        <div omi-drag class="test">Drag Me</div>
        <div omi-drag class="test">Drag Me</div>
    </div>
    `;
}
...
```

通常我们系统每个omi-drag都能对应一个回调函数，如：

```js
...
...
moveHandlerA(){
    console.log('moving');
}

moveHandlerB(){
    console.log('moving');
}

render() {
    return  `
    <div>
        <div omi-drag class="test">Drag Me A</div>
        <div omi-drag class="test">Drag Me B</div>
    </div>
    `;
}
...
```

怎么办？怎么实现？有办法！通过dom传递数据给插件。

## 传递数据

先来看最后实现的效果:

```js
...
...
moveHandlerA(){
    console.log('moving');
}

moveHandlerB(){
    console.log('moving');
}

render() {
    return  `
    <div>
        <div omi-drag class="test" dragMove="moveHandlerA" >Drag Me A</div>
        <div omi-drag class="test" dragMove="moveHandlerB" >Drag Me B</div>
    </div>
    `;
}
...
```

omi-drag修改的地方:

```js
...
var handlerName = dom.getAttribute('dragMove');

window.addEventListener('mousemove',function(evt){
    if(isMouseDown){
        currentX = evt.pageX;
        currentY = evt.pageY;
        if(preX != null){
            translateX += currentX - preX;
            translateY += currentY - preY;
            dom.style.transform = 'translateX('+translateX+'px) translateY('+translateY+'px)';
        }
        preX = currentX;
        preY = currentY;
        evt.preventDefault();
        instance[handlerName](evt);
    }
},false);
...
```

* 通过 var handlerName = dom.getAttribute('dragMove') 拿到dom上声明的dragMove
* 通过 instance[handlerName](evt) 去执行对应的方法

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=plugin" target="_blank">点击这里→在线试试</a>

## 更多插件

* [omi-finger](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-finger) Omi的[AlloyFinger](https://github.com/AlloyTeam/AlloyFinger)插件，支持各种触摸事件和手势
* [omi-transform](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-transform) Omi的[transformjs](http://alloyteam.github.io/AlloyTouch/transformjs/)插件，快速方便地设置DOM的CSS3 Transform属性
* [omi-touch](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-touch) Omi的[AlloyTouch](https://github.com/AlloyTeam/AlloyTouch)插件，Omi项目的触摸运动解决方案（支持触摸滚动、旋转、翻页、选择等等）
* [omi-jquery-date-picker](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-jquery-date-picker) Omi的时间选择插件，支持各种时间或者时间区域选择
