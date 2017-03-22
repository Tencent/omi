import Omi from '../../src/index.js';

class List extends Omi.Component {
    constructor(data) {
        super(data)
    }

    beforeRender(){
        this.data.items = this.$store.data.items
    }

    render () {
        return ` <ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`
    }
}

export default List;
