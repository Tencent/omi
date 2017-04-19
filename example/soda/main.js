import Omi from '../../src/index.soda.js';

import hello from './hello.js'

class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render(){

        return `<div>
                    <hello  o-repeat="item in items" o-if="item.show" data-name="{{item.text}}"></hello>
                    <div o-repeat="item in items" o-if="item.show">
                        {{$index}}- {{item.text}}
                        <ul>
                            <li o-repeat="subItem in item.arr by $subIndex">
                                <div>parent index: {{$index}}</div>
                                <div>parent item text:{{item.text}}</div>
                                <div>{{$subIndex}}{{subItem}}</div>
                            </li>
                        </ul>
                    </div>
                </div>`
    }

}

Omi.render(new List({
    show:true,
    name:'Omi',
    items: [
        { text: 'Omi', show: true ,arr:['a','b','c']},
        { text: 'dntzhang', show: true},
        { text: 'AlloyTeam'}
    ]
}),"body",true);