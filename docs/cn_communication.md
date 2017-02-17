<h2 id="组件通讯">组件通讯</h2>

[Omi框架](https://github.com/AlloyTeam/omi)组建间的通讯非常遍历灵活，因为有许多可选方案进行通讯：

* 通过在组件上声明 data-* 传递给子节点 
* 通过在组件上声明 data 传递给子节点 （支持复杂数据类型的映射）
* 父容器设置 childrenData 自动传递给子节点
* 声明 group-data 传递（支持复杂数据类型的映射）
* 完全面向对象，可以非常容易地拿到对象的实例，之后可以设置实例属性和调用实例的方法

所以通讯变得畅通无阻，下面一一来举例说明。

### data-*通讯 

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

一般data-*用来传递值类型，如string、number。值得注意的是，通过data-*接收到的数据类型都是string，需要自行转成number类型。
通常情况下，data-*能满足我们的要求，但是遇到复杂的数据类型是没有办法通过大量data-*去表达，所以可以通过data通讯，请往下看。

### data通讯 

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

使用data声明，会去组件的instance（也就是this）下找对应的属性，this下可以挂载任意复杂的对象。所以这也就突破了data-*的局限性。

如果instance下面的某个属性下面的某个属性下面的某个数组的第一个元素的某个属性要作为data传递Hello怎么办？
没关系，data声明是支持复杂类型的，使用方式如下:

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

[在线试试->data映射复杂数据](http://alloyteam.github.io/omi/website/redirect.html?type=data_complex)

### childrenData通讯

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

[在线试试->group-data](http://alloyteam.github.io/omi/website/redirect.html?type=group_data)

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

[在线试试->group-data映射复杂数据](http://alloyteam.github.io/omi/website/redirect.html?type=group_data_complex)

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