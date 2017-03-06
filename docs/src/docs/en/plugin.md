## Plugin

[Omi](https://github.com/AlloyTeam/omi) is a componentized web framework. Then what is plugin?

It can be understood that the Omi plugin system can give the dom element some ability and can be associated with the instance of the components.

### omi-drag

Let's see this example:

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=plugin" target="_blank">Click me for the live deme</a>

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

As shown above, by adding `omi-drag` attribute to the div, it can be dragged by the user using the mouse. We call omi-drag.js an omi plugin.

Isn't it very convenient? So how did this omi-drag implement?

如上面的代码所示，通过在div上标记omi-drag，这个div就能够被用户使用鼠标拖拽。我们称omi-drag.js为omi插件。
是不是非常方便？那么这个omi-drag是怎么实现的？

## Omi.extendPlugin

Core method: Omi.extendPlugin( pluginName, handler )

The following code shows how to use `Omi.extendPlugin` to give dom the drap and drop ability:

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

Method: Omi.extendPlugin( pluginName, handler )

`pluginName` is the name of the plugin.

`handler` is the processor. The handler can get the dom which marked as the `pluginName` and the instance of the component.

With `Omi.extendPlugin`, we can give the dom some ability, and can also be associated with the component instance.

The above example is not associated with the instance, let's try it:

## Associated with instance

We want to be able to listen to the `move` inside the component and perform a callback. As follows:

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

In this case, the `moveHandler` will be continually executed while dragging. We can modify some code to solve this issue:

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

We add `instance.moveHandler(evt)` method to execute the `moveHandler` method of component instance.

This is how associated with instance works.

However, this may still have an issue if we add `omi-drag` to a list of `div`:

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

Usually each of our `omi-drag` can correspond to a callback function, such as:

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

How to achieve this? We can pass the data to the plugin via dom.

## Passing data

Let's see the final code:

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

Where `omi-drag` modified:

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

- We use `var handlerName = dom.getAttribute('dragMove')` to get the `dragMove` of dom
- We use `instance[handlerName](evt)` to execute the method

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=plugin" target="_blank">Click me for the live demo</a>

## More plugins

* [omi-finger](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-finger) The [AlloyFinger](https://github.com/AlloyTeam/AlloyFinger) plugin for Omi, which support touch events and gustures
* [omi-transform](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-transform) The [transformjs](http://alloyteam.github.io/AlloyTouch/transformjs/) plugin for Omi, which can easily set CSS3 Transform to DOM
* [omi-touch](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-touch) The [AlloyTouch](https://github.com/AlloyTeam/AlloyTouch) plugin for Omi. The touch movement solution for Omi (support touch scroll, rotate, flip, select, etc.)
* [omi-jquery-date-picker](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-jquery-date-picker) The date picker plugin for Omi, which support choose any time zone
