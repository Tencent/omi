<h2 id="Inheritance">Inheritance</h2>

Through the inheritance mechanism, we can define new classes base on old classes. The new classes not only have newly defined members, but also have old members at the same time.

We call the existing class the base class, also known as the parent class. And the new class derived from the existing class is called a derived class, also known as a subclass.

### For Example

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

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=inherit" target="_blank">Click me for the live demo</a>

### inherit in ES5

```js
var Hello =  Omi.create("Hello",{
  render:function(){
    return  ' <div>Hello {{name}}!</div>'
  }
})

var SubHello =  Omi.create("SubHello",Hello,{ });


Omi.render(new SubHello({ name : 'Omi' }),'#container');
```

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=inherit_es5" target="_blank">Click me for the live demo</a>