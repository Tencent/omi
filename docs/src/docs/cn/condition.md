## 条件判断

我们经常需要根据不同的状态呈现不同的界面，比如有的用户是vip要显示vip的Logo。Omi有许多种方式满足你的要求。

### 方式零

```js
class ConditionTest extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render () {
        return `
                <div o-if="isVip">you are VIP.</div>
                <div o-if="!isVip">you are not VIP.</div>
                `;
    }
}
```

这是omi.js的条件判断方式。

### 方式一

```js
class ConditionTest extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render () {
        return `{{#isVip}}
                    <div>you are VIP.</div>
                {{/isVip}}
                {{^isVip}}
                    <div>you are not VIP.</div>
                {{/isVip}}`;
    }
}
```

上面是omi.mustache.js的条件判断方式。完全使用mustachejs的条件判断的语法。当然Omi不强制你使用mustachejs。你可以是omi.lite.js，然后重写Omi.template方法去使用任意你喜爱的模板引擎。

### 方式二

```js
class ConditionTest extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render () {
        if(this.data.isVip){
            return '<div>you are VIP.</div>';
        }else{
            return '<div>you are not VIP.</div>';
        }
    }
}
```

render就是提供了很好的可编程性，里面可以写任意js逻辑代码。对了，差点忘了，style方法里面也可以写js逻辑的。

```js
class ConditionTest extends Omi.Component {
    constructor(data) {
        super(data);
    }

    style (){
        if(this.data.isVip){
            return 'div{ color : red; }';
        }else{
            return 'div{ color : green; }';
        }
    }

    render () {
        if(this.data.isVip){
            return '<div>you are VIP.</div>';
        }else{
            return '<div>you are not VIP.</div>';
        }
    }
}
```

### 方式三

```js
class ConditionTest extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render() {
        return  `
            ${this.data.isVip
                ?"<div>you are VIP.</div>"
                :"<div>you are not VIP.</div>"
    		}
        `;
    }
}
```

当然可以使用${ }里面写javascript代码进行输出。