import Omi from '../../src/index.soda.js';

import hello from './hello.js'

class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render(){

        return `<div>
                    <hello soda-if="show" data-name="{{name}}"></hello>
                    <div soda-repeat="item in items" soda-if="item.show">
                        {{$index}}- {{item.text}}
                    </div>
                </div>`
    }

}

Omi.render(new List({
    show:true,
    name:'Omi',
    items: [
        { text: 'Omi', show: true},
        { text: 'dntzhang', show: true},
        { text: 'AlloyTeam'}
    ]
}),"body",true);