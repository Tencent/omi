## 继承

通过继承机制，可以利用已有的数据类型来定义新的数据类型。所定义的新的数据类型不仅拥有新定义的成员，而且还同时拥有旧的成员。我们称已存在的用来派生新类的类为基类，又称为父类。由已存在的类派生出的新类称为派生类，又称为子类。

### 举个例子

```js
class Hello extends Omi.Component {
    constructor(data) {
        super(data);
    }
    
    style () {
        return  `
            div{
                cursor:pointer;
            }
         `;
    }
    
    handleClick(target, evt){
        alert(target.innerHTML);
    }
    
    render() {
       return  ' <div onclick="handleClick(this,event)">Hello {{name}}!</div>'
    }
}

class SubHello extends Hello {
    constructor(data) {
        super(data);
    }
}

Omi.render(new SubHello({ name : 'Omi' }),'#container');
```

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=inherit" target="_blank">点击这里→在线试试</a>

###  ES5下的继承

```js
var Hello =  Omi.create("hello",{
  render:function(){
    return  ' <div>Hello {{name}}!</div>'
  }
})

var SubHello =  Omi.create("sub-hello",Hello,{ });


Omi.render(new SubHello({ name : 'Omi' }),'#container');
```

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=inherit_es5" target="_blank">点击这里→在线试试</a>