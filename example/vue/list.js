import Omi from '../../src/index.js';
import template from './template.js';

Omi.template = function(tpl, data){
    var res = Vue.compile(tpl)
    var v =  new Vue({
        el: document.createElement('div'),
        data: data,
        render: res.render,
        staticRenderFns: res.staticRenderFns
    });

    var html = v.$el.outerHTML

    v.$el = null;
    v = null
    res = null;
    
    return html;
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
        return `
                <div>
                    <h1>{{title}}</h1>
                    <ul id="example-1">
                      <li v-for="item in items">
                        {{ item.message }}
                      </li>
                    </ul>
                </div>
                `;
    }
}

export default List;
