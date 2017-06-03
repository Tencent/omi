import Omi from '../../src/index.art.js';

class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    style () {
        return `
        h1 { color:red; }
        li{
         color:green;
         cursor:pointer;
        }
        `;
    }

    showMe(value){
        alert(value)
    }

    render () {
        return `<h1>{{title}}</h1>
                <ul>
                    {{each list value i}}
                    <li onclick="showMe('{{value}}')">索引 {{i + 1}} ：{{value}}</li>
                    {{/each}}
                </ul>`;
    }
}

export default List;
