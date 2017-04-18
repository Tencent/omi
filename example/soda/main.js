import Omi from '../../src/index.soda.js';

class List extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render(){

        return `<ul>
                    <li soda-repeat="item in items" soda-if="item.show">
                        {{$index}}- {{item.text}}
                    </li>
                </ul>`
    }

}

Omi.render(new List({
    items: [
        { text: 'Omi', show: true},
        { text: 'dntzhang', show: true},
        { text: 'AlloyTeam'}
    ]
}),"body",true);