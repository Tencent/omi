<h2 id="component-communication">Component Communication</h2>

Communication between [Omi](https://github.com/AlloyTeam/omi) components is very flexible, there are many options:

- By declaring `data-*` on the component to pass data to child node
- By declaring `data` on the component to pass data to child node (support complex data types mapping)
- By declaring `childrenData` on parent component to automatically pass data to child node
- By declaring `group-data` (support complex data types mapping)
- It's completely object-oriented, you can easily get the object instance, then you can set the instance of the property or call the instance of the method

Let's see some examples.

### Communicate by `data-*`

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

Omi.makeHTML('Hello', Hello);

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

Generally `data-*` is used to pass value types such as string and number. It is worth noting that, through `data-*`, received data types are string. You need to manually transform it to the number type.

Normally, communicate by `data-*` is enough, but sometimes we may need to use complex data types, then we can use `data` to communicate.

### Communicate by `data`

As shown in the above code, name can be passed to the subcomponent by `data-name="Omi"`. The following code can also achieve the same effect.

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

Use the `data` tag, it will find the property from the component instance (that is, this), this can be mounted with any complex objects. This also broke the limitations of `data-*`.

Then how do we pass `data` that is in a deep depth of the instance to the Hello? No worries, `data` tag can be a complex statement:

```js
...
class App extends Omi.Component {
    constructor(data) {
        super(data);
        this.complexData ={
            a:{
                b:{
                    c:[
                        {
                            e:[{
                                name:'ComplexData Support1'
                            },{
                                name:'ComplexData Support2'
                            }]
                        },
                        {
                            name: 'ComplexData Support3'
                        }
                    ]
                }
            }
        };
    }
  
    render() {
        return  `
        <div>
            <Hello data="complexData.a.b.c[1]" />
        </div>
        `;
    }
}
...
```

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=data_complex" target="_blank">Click me for the complex data mapping</a>

### Communicate by `childrenData`

```js
...
class App extends Omi.Component {
    constructor(data) {
      super(data);
      this.childrenData = [{ name : 'Omi' } , { name : 'dntzhang' }];
    }
  
    render() {
        return  `
        <div>
            <Hello  />
            <Hello  />
        </div>
        `;
    }
}

Omi.render(new App(),"#container");
```

通用this.childrenData传递data给子组件，childrenData是一个数组类型，所以支持同时给多个组件传递data，与render里面的组件会一一对应上。

### group-data通讯

childrenData的方式可以批量传递数据给组件，但是有很多场景下data的来源不一定非要都从childrenData来，childrenData是个数组，会和组件的顺序一一对应，这就给不同传递方式的data必须全部集中的childrenData中，非常不方便。group-data专门为解决上面的痛点而生，专门是为了给一组组件批量传递data。

```js
import Hello from './hello.js';


Omi.makeHTML('Hello', Hello);

class App extends Omi.Component {
    constructor(data) {
        super(data);
        this.testData = [{name: 'Omi'}, {name: 'dntzhang'}, {name: 'AlloyTeam'}];
    }

    render() {
        return  `
        <div>
            <Hello group-data="testData" />
            <Hello group-data="testData" />
            <Hello group-data="testData" />
        </div>
        `;

    }
}

Omi.render(new App(),"#container");
```

只需要在声明的子组件上标记group-data，就会去当前组件的instance（也就是this）下面找对应的属性，然后根据当前的位置，和对应数组的位置会一一对应起来。

运行结果如下：
![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170216110701535-1698390390.png)

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=group_data" target="_blank">点击这里→group-data</a>

同样group-data支持复杂数据类型的映射，需要注意的是，group-data映射的终点必须是一个数组:

```js
import Hello from './hello.js';


Omi.makeHTML('Hello', Hello);

class App extends Omi.Component {
    constructor(data) {
        super(data);
        this.complexData ={
            a:{
                b:{
                    c:[
                        {
                            e:[{
                                name:'ComplexData Support1'
                            },{
                                name:'ComplexData Support2'
                            }]
                        },
                        {
                            name: 'ComplexData Support3'
                        }
                    ]
                }
            }
        };
    }

    render() {
        return  `
        <div>
            <Hello group-data="complexData.a.b.c[0].e" />
            <Hello group-data="complexData.a.b.c[0].e" />
        </div>
        `;

    }
}

Omi.render(new App(),"#container");
```

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=group_data_complex" target="_blank">点击这里→group-data映射复杂数据</a>

### 通过对象实例

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

### 通过omi-id

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

通过在组件上声明omi-id，在程序任何地方拿到该对象的实例。这个可以算是跨任意组件通讯神器。

### 特别强调

* 通过childrenData或者data方式通讯都是一锤子买卖。后续变更只能通过组件实例下的data属性去更新组件
* 通过data-✼通讯也是一锤子买卖。后续变更只能通过组件实例下的data属性去更新组件。
* 关于data-✼通讯也可以不是一锤子买卖，但是要设置组件实例的dataFirst为false，这样的话data-✼就会覆盖组件实例的data对应的属性

关于上面的第三条也就是这样的逻辑伪代码：
```js
if(this.dataFirst){
    this.data = Object.assign({},data-✼ ,this.data);
}else{
    this.data = Object.assign({},this.data, data-✼);
}
```