## Templates

There are three types of Omi. omi.js and omi.lite.js is for web side.

- omi.js has a built-in [mustache.js](https://github.com/janl/mustache.js) as the template engine
- omi.lite.js doesn't have any template engines

Omi does not force developers to use mustache.js, you can use any template engine based on business scenarios or do not use any template engines.

How to use other template engines? Let's see the [artTemplate](https://github.com/aui/artTemplate) example.

### Use artTemplate

```js
Omi.template = function(tpl, data){
    return artTemplate.compile(tpl)(data);
}
```

We need to rewrite the `Omi.template` method, the `tpl` is the incoming template, the `data` is the required data for the template, and the return value is HTML.

After rewriting, you can use the artTemplate syntax in `render`, such as:

```js
class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    style () {
        return `
        h1 { color:red; }
        li{ color:green;}
        `;
    }

    render () {
        return `<h1>{{title}}</h1>
                <ul>
                    {{each list as value i}}
                    <li># {{i + 1}} ：{{value}}</li>
                    {{/each}}
                </ul>`;
    }
}
```

### Links

* [Demo Link](http://alloyteam.github.io/omi/example/artTemplate/)
* [Source Code](https://github.com/AlloyTeam/omi/tree/master/example/artTemplate)