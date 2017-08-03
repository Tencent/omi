## Component Communication

Communication between [Omi](https://github.com/AlloyTeam/omi) components is very flexible, there are many options:

- By declaring `data-*` on the component to pass data to child node
- By declaring `data` on the component to pass data to child node (support complex data types mapping)
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

### Communicate by `group-data`

`group-data` can pass data to  a group of components. 

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

By declaring a `group-data` tag in the sub-components, it will go to the current instance of the component (that is, `this`) to find the corresponding property. Then according to the current location, the data will pass to the positions one by one.

The results are as follows:

![group-data results](http://images2015.cnblogs.com/blog/105416/201702/105416-20170216110701535-1698390390.png)

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=group_data" target="_blank">Click me for the group-data example</a>

Similarly, `group-data` supports the mapping of complex data types. It should be noted that the end of the group-data mapping must be an array:

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

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=group_data_complex" target="_blank">Click me for the complex group-data mapping</a>

### By object instance

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

### By omi-id

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

By declaring `omi-id` on the component, we can get the instance of the object anywhere in the program. This can be regarded as any component communication artifacts.

