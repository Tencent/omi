## Get DOM

While most of the time, developers do not need to find the DOM, but sometimes is a need to get the DOM.

Omi provides a way to get the DOM node.

### ref and refs

```js
class Hello extends Omi.Component {
    constructor(data) {
        super(data);
    }
    
    style () {
        return  `
            h1{
                cursor:pointer;
            }
         `;
    }
    
    handleClick(){
        alert(this.refs.abc.innerHTML);
    }
    
    render() {
        return  `
        <div>
            <h1 ref="abc" onclick="handleClick()">Hello ,{{name}}!</h1>
        </div>
        `;
    }
}

Omi.render(new Hello({ name : "Omi" }),"#container");
```

As we can see, by referencing `ref` as `abc` in HTML, the DOM node can be accessed through `this.refs.abc`.

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=ref" target="_blank">Click me for the live demo</a>
