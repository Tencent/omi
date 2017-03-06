## Conditional Rendering

In most case, we need to show different layouts according to different states. For example, some users are vip and we need to show vip logo for them. Omi has many ways to meet this kind of requirements.

### First Option

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

In the above case, we use the condition in mustachejs for rendering. Of course Omi does not force you to use mustachejs. You can use omi.lite.js and then override the `Omi.template` method to use any of your favorite template engines.

### Second Option

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

`render` provides a very good programmability, which can write any js code inside. Oh, don't forget that `style` method can also have js code inside it.

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