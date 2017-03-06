## Handling Events

There are two types of events in Omi, built-in events and custom events. Built-in events clever use of the browser's own pipeline mechanism, you can easily get events instance and the triggered event elements through `event` and `this`.

### Built-in events

What is the built-in event? As long as the it can match the following regular expression.

```js
on(abort|blur|cancel|canplay|canplaythrough|change|click|close|contextmenu|cuechange|dblclick|drag|dragend|dragenter|dragleave|dragover|dragstart|drop|durationchange|emptied|ended|error|focus|input|invalid|keydown|keypress|keyup|load|loadeddata|loadedmetadata|loadstart|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup|mousewheel|pause|play|playing|progress|ratechange|reset|resize|scroll|seeked|seeking|select|show|stalled|submit|suspend|timeupdate|toggle|volumechange|waiting|autocomplete|autocompleteerror|beforecopy|beforecut|beforepaste|copy|cut|paste|search|selectstart|wheel|webkitfullscreenchange|webkitfullscreenerror|touchstart|touchmove|touchend|touchcancel|pointerdown|pointerup|pointercancel|pointermove|pointerover|pointerout|pointerenter|pointerleave)
```

How to bind built-in events? As follows:

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

### Custom events

Events that defined by developers is the custom events. Here is the pagination example:

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

As we can see, the `onPageChange` is a custom event, `handlePageChange` will being executed when `onPageChange` is triggered. The `onPageChange` method is executed in `Pagination`:

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

This is a part of `Pagination` code. Highlight is the place to execute `onPageChange`.

### Links

- [Demo](http://alloyteam.github.io/omi/example/pagination/)
- [Source](https://github.com/AlloyTeam/omi/tree/master/example/pagination)