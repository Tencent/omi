import List from './list.js';

let list = new List({
    title:"aa",
    items: [
        {message: 'Foo' },
        {message: 'Bar' }
    ]
});

Omi.render(list,'#test');