<h2 id="事件处理">事件处理</h2>

Omi的事件分内置事件和自定义事件。在内置事件处理方面巧妙地利用了浏览器自身的管线机制，可以通过event和this轻松拿到事件实例和触发该事件的元素。

### 内置事件

什么算内置事件？只要下面正则能匹配到就算内置事件。

```js
on(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave)
```

内置事件怎么绑定？如下所示：

```js
class EventTest extends Omi.Component {
    constructor(data) {
        super(data);
    }

    handleClick(dom, evt){
        alert(dom.innerHTML);
    }

    render () {
        return `<div onclick="handleClick(this, event)">Hello, Omi!</div>`;
    }
}
```

### 自定义事件

开发者自己定义的组件的事件，称为自定义事件。这里拿分页作为例子：

```js
import Omi from '../../src/index.js';
import Pagination from './pagination.js';
import Content from './content.js';

Omi.makeHTML('Pagination', Pagination);
Omi.makeHTML('Content', Content);

class Main extends Omi.Component {
    constructor(data) {
        super(data);
    }

    installed(){
        this.content.goto(this.pagination.data.currentPage+1);
    }
    handlePageChange(index){
        this.content.goto(index+1);
    }

    render () {
        return `<div>
                    <h1>Pagination Example</h1>
                    <Content name="content" />
                    <Pagination
                        name="pagination"
                        data-total="100"
                        data-page-size="10"
                        data-num-edge="1"
                        data-num-display="4"　　　　　
                        onPageChange="handlePageChange" />
                </div>`;
    }
}

Omi.render( new Main(),'body');
```

如上面的onPageChange就是自定义事件，触发会执行handlePageChange。onPageChange方法是在Pagination中执行：

```js
import Omi from '../../src/index.js';

class Pagination extends Omi.Component {
    ...
    ...
    ...
            linkTo: "#",
            prevText: "Prev",
            nextText: "Next",
            ellipseText: "...",
            prevShow: true,
            nextShow: true,
            onPageChange: function () { return false; }
        }, this.data);

        this.pageNum = Math.ceil(this.data.total / this.data.pageSize);
    }
    goto (index,evt) {
        evt.preventDefault();
        this.data.currentPage=index;
        this.update();
        this.data.onPageChange(index);
    }
    ...
    ...
    ...
}
```

这里取了Pagination组件的部分代码。高亮的就是执行onPageChange的地方。

### 相关地址

* [演示地址](http://alloyteam.github.io/omi/example/pagination/)
* [源码地址](https://github.com/AlloyTeam/omi/tree/master/example/pagination)