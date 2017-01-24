<h2 id="组件通讯">组件通讯</h2>

使用Omi，其实没有组件通讯的概念，因为：

* 通过在子节点上声明 data-* 或者声明 data 传递给子节点 
* 父容器设置childrenData自动传递给子节点
* 完全面向对象，可以非常容易地拿到对象的实例，之后可以设置实例属性和调用实例的方法

所以通讯变得畅通无阻，下面一一来举例说明。

### data-*或者data通讯 

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
    handleClick(target, evt){
      alert(target.innerHTML);
    }
    render() {
      return  `
      <div>
      	<h1 onclick="handleClick(this, event)">Hello ,{{name}}!</h1>
      </div>
  		`;

    }
}

Omi.makeHTML(Hello);

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }
  
    render() {
        return  `
        <div>
            <Hello data-name="Omi" />
        </div>
        `;
    }
}

Omi.render(new App(),"#container");
```

如上面代码所示，通过 data-name="Omi"可以把name传递给子组件。下面的代码也可以达到同样的效果。

```js
...
class App extends Omi.Component {
    constructor(data) {
      super(data);
      this.helloData = { name : 'Omi' };
    }
  
    render() {
        return  `
        <div>
            <Hello data="helloData" />
        </div>
        `;
    }
}

Omi.render(new App(),"#container");
```

还可以使用childrenData的方式。

```js
...
class App extends Omi.Component {
    constructor(data) {
      super(data);
      this.childrenData = [{ name : 'Omi' }];
    }
  
    render() {
        return  `
        <div>
            <Hello  />
        </div>
        `;
    }
}

Omi.render(new App(),"#container");
```

### 设置对象实例

```js
...
class App extends Omi.Component {
    constructor(data) {
        super(data);
    }
    
    installed(){
        this.hello.data.name = "Omi";
        this.update()
    }
  
    render() {
        return  `
        <div>
            <Hello name="hello" />
        </div>
        `;
    }
}

Omi.render(new App(),"#container");
```

也可以通过设置omi-id在程序任何地方拿到该对象的实例。如：

```js
...
class App extends Omi.Component {
    constructor(data) {
        super(data);
    }
    
    installed(){
        Omi.get("hello").data.name = "Omi";
        this.update()
    }
  
    render() {
        return  `
        <div>
            <Hello omi-id="hello" />
        </div>
        `;

    }
}

Omi.render(new App(),"#container");
```