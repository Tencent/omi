import Omi from '../../src/index.js';
import template from './template.js';

Omi.template = function(tpl, data){
    return template.compile(tpl)(data);
}

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
                    <li>索引 {{i + 1}} ：{{value}}</li>
                    {{/each}}
                </ul>`;
    }
}

export default List;
