import Omi from '../../src/index.js';


class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render(){
        return `<div>
                    <div o-repeat="item in items" o-if="item.show">
                        {{$index}}- {{item.text}}
                    </div>
                </div>`
    }

}

Omi.render(new List({
    items: [
        { text: 'Omi', show: true },
        { text: 'dntzhang', show: true },
        { text: 'AlloyTeam'}
    ]
}),"body",true);