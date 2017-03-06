## Loop

The following describes how to traverses in mustache.js and javascript.

### First Option

```js
class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render () {
        return `<div>
                    <ul> 
                        {{#items}} 
                        <li id="{{id}}">{{text}}</li> 
                        {{/items}}
                    </ul>
                </div>`;
    }
}

Omi.render(new List({
    items: [
        {id: 1, text: 'Omi'},
        {id: 2, text: 'dntzhang'},
        {id: 3, text: 'AlloyTeam'}
    ]
}),"body");
```

Mustache.js more detailed loop traversal use can see 

For more details for traversal in mustache.js please view [https://github.com/janl/mustache.js#non-empty-lists](https://github.com/janl/mustache.js#non-empty-lists).

For example, it also support:

- If each item of items is a string, you can directly use **{{.}}** to output each item
- Call the defined function when looping

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=list" target="_blank">Click me for the live demo</a>

### Second Option

Of course, you can also use template string inside the `map`:

```js
class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render() {
        return `<div>
                    <ul>
                    ${this.data.items.map(item =>
                         `<li id="${item.id}">${item.text}</li>`
                    ).join('')}
                    </ul>
                </div>`;
    }
}

Omi.render(new List({
    items: [
        {id: 1, text: 'Omi'},
        {id: 2, text: 'dntzhang'},
        {id: 3, text: 'AlloyTeam'}
    ]
}),"body");
```

You will see the following page:

![pv](http://images2015.cnblogs.com/blog/105416/201701/105416-20170122095724129-2059595233.png)

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=list2" target="_blank">Click me for the live demo</a>