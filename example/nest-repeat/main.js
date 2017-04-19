import Omi from '../../src/index.js';


class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render(){
        return `<div>
                    <div o-repeat="item in items" o-if="item.show">
                        {{$index}}- {{item.text}}
                        <ul>
                            <li o-repeat="subItem in item.arr by $subIndex">
                                <div>parent index: {{$index}}</div>
                                <div>parent item text:{{item.text}}</div>
                                <div>sub index: {{$subIndex}}</div>
                                <div>sub item :{{subItem}}</div>
                            </li>
                        </ul>
                    </div>
                </div>`
    }

}

Omi.render(new List({
    items: [
        { text: 'Omi', show: true ,arr:['a','b','c']},
        { text: 'dntzhang', show: true, arr:['d','e']},
        { text: 'AlloyTeam'}
    ]
}),"body",true);