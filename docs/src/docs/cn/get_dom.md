## 获取DOM节点

虽然绝大部分情况下，开发者不需要去查找获取DOM，但是还是有需要获取DOM的场景，所以Omi提供了方便获取DOM节点的方式。

### ref和refs

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

可以看到通过在HTML中标记ref为abc，那么就通过this.refs.abc访问到该DOM节点。

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=ref" target="_blank">点击这里→在线试试</a>