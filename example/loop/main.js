import Omi from '../../src/index.js';

class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render() {
        return `<div>
                    <ul>
                    ` + this.data.items.map(item =>
                        '<li id="' + item.id + '">' + item.text + '</li>'
                    ).join("") + `
                    </ul>
                </div>`;
    }

    //render () {
    //    return `<div>
    //                <ul> {{#items}} <li id="{{id}}">{{text}}</li> {{/items}}</ul>
    //            </div>`;
    //}
}

Omi.render(new List({
    items: [
        {id: 1, text: 'Omi'},
        {id: 2, text: 'dntzhang'},
        {id: 3, text: 'AlloyTeam'}
    ]
}),"body",true);